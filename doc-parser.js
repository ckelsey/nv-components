module.exports = function (docs) {
    var components = {}

    function parseComponentArgs(component) {
        return JSON.parse(component.decorators[0].arguments.opts
            .split(' ').join('')
            .split('\'').join('"')
            .split('`').join('"')
            .split("\n").join("")
            .split("\r").join("")
            .split('",').join('","')
            .split(':').join('":')
            .split('{').join('{"'))
    }

    function parseType(type) {
        if (type.types) {
            return type.types.map(function (t) {
                return t.name
            }).join(', ')
        } else if (type.name) {
            return type.name
        } else {
            return type.type
        }
    }

    function parseObject(child) {
        return {
            name: child.name,
            type: parseType(child.type),
            values: child.children.map(function (o) {
                return parseProperties(o)
            }),
            description: parseComments(child.comment).desc || ''
        }
    }

    function parseProperties(child) {
        const defaultValue = child.defaultValue ? child.defaultValue.trim().split('').map(function (char, index) {
            if (!index || index === child.defaultValue.trim().length - 1) {
                if (char === '"' || char === '`' || char === "'") {
                    return ''
                }
            }
            return char

        }).join('') : ''

        return {
            name: child.name,
            type: parseType(child.type),
            defaultValue,
            attributeProperty: !!child.decorators && child.decorators.length > 0 && child.decorators[0].name === 'Prop' && (!child.decorators[0].arguments.opts || (child.decorators[0].arguments.opts && child.decorators[0].arguments.opts.indexOf('context:') === -1)),
            description: parseComments(child.comment).desc || '',
            demoValue: parseComments(child.comment).example || defaultValue,
            event: !!child.decorators && child.decorators.length > 0 && child.decorators[0].name === 'Event'
        }
    }

    function parseAccessors(child) {
        return {
            name: child.name,
            returns: child.getSignature && child.getSignature.type.declarations ?
                child.getSignature.type.declaration.children.map(function (dec) {
                    var obj = {}
                    obj[dec.name] = parseType(dec.type)
                    return obj
                }) : parseType(child.getSignature.type),
            description: parseComments(child.comment).desc || ''
        }
    }

    function parseMethods(child) {
        return {
            name: child.name,
            public: !!child.decorators && child.decorators.length > 0,
            returns: parseType(child.signatures[0].type),
            parameters: child.signatures[0].parameters ? child.signatures[0].parameters.map(function (param) {
                var obj = {
                    name: param.name,
                    type: parseType(param.type),
                    description: param.comment ? param.comment.text : undefined,
                    data: {},
                    demoValue: ''
                }

                obj.data[param.name] = parseType(param.type)

                return obj
            }) : [],
            description: parseComments(child.signatures[0].comment).desc || ''
        }
    }

    function parseGroup(group, children) {
        return group.children.map(function (child) {
            var _child = {}

            for (var i = 0; i < children.length; i++) {
                if (child === children[i].id) {
                    _child = children[i]
                    break
                }
            }

            if (group.title === "Properties") {
                return parseProperties(_child)
            }

            if (group.title === "Accessors") {
                return parseAccessors(_child)
            }

            if (group.title === "Methods") {
                return parseMethods(_child)
            }

            if (group.title === "Object literals") {
                return parseObject(_child)
            }
        })
    }

    function parseComments(comments) {
        if (!comments || !comments.tags || !comments.tags.length) {
            return {}
        }

        var _comments = {}

        comments.tags.forEach(function (comment) {
            _comments[comment.tag === 'description' ? 'desc' : comment.tag] = comment.text.trim()
        })

        return _comments
    }

    function parseComponent(component) {
        var args = parseComponentArgs(component)

        var children = {
            "Attributes": [],
            "Methods": [],
            "Events": [],
            "Private properties": [],
            "Private methods": [],
            "Private accessors": [],
        }

        component.groups.forEach(function (group) {
            const groupChildren = parseGroup(group, component.children)

            if (group.title === 'Properties') {
                groupChildren.forEach(function (prop) {
                    if (!!prop.attributeProperty) {
                        children.Attributes.push(prop)
                    }else if (!!prop.event) {
                        children.Events.push(prop)
                    } else {
                        children["Private properties"].push(prop)
                    }
                })

                return
            }

            if (group.title === 'Methods') {
                groupChildren.forEach(function (prop) {
                    if (!!prop.public) {
                        children.Methods.push(prop)
                    } else {
                        children["Private methods"].push(prop)
                    }
                })

                return
            }

            if (group.title === 'Accessors') {
                children["Private accessors"] = groupChildren
                return
            }

            children[group.title] = groupChildren
        })

        for (var i in children) {
            if (!children[i].length) {
                delete children[i]
            }
        }

        var componentData = {
            description: parseComments(component.comment).desc || '',
            id: component.id,
            name: component.name,
            tag: args.tag,
            shadow: args.shadow,
            styles: args.styleUrl,
            children: children,
            slotMarkup: ``,
            slots: !!parseComments(component.comment).yield,
            example: parseComments(component.comment).example
        }

        return componentData
    }

    for (var i in docs.children) {
        if (docs.children[i].groups && docs.children[i].groups[0].kind === 128) {
            var componentData = parseComponent(docs.children[i].children[0])
            components[componentData.name] = componentData
        }
    }

    return components
}
