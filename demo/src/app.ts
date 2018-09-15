/**
 * set initial component
 * exported on/off
 */

import Vue from "vue";
import Component from "vue-class-component"
import template from "./app.html"
import './style.scss'

const DOCS = require('../../docs/docs.json')

@Component({
    template
})

/** @desc The main component */
export default class App extends Vue {

    /** @desc Name of element */
    name: string = `App`

    DOCS = DOCS
    currentDoc: string = ``

    attrs() {
        let doc = this.DOCS[this.currentDoc]

        let attrs = []

        if (!doc || !doc.children) {
            return []
        }

        if (doc.children.Attributes) {
            doc.children.Attributes.forEach(a => {
                let value = a.demoValue
                let name = a.name.replace(/([A-Z])/g, "-$1").toLowerCase()

                if (value === `''` || value === `false` || value === `` || value === undefined || value === null || value === `undefined` || value === `null`) {
                    return
                }

                if (value.indexOf && value.indexOf('"') > -1) {
                    attrs.push(`${name}='${value}'`)
                    return
                }

                attrs.push(`${name}="${value}"`)
            })
        }

        return attrs
    }

    example() {

        let doc = this.DOCS[this.currentDoc]

        if (!doc || !doc.children) {
            return ``
        }

        if(doc.example){
            var cont = document.createElement(`div`)
            cont.innerHTML = doc.example

            var comp = cont.querySelector(doc.tag)

            this.attrs().forEach(a=>{
                const arr = a.split('=')
                const name = arr.shift()
                const val = arr.join('=')

                comp.setAttribute(name, val)
            })

            if(this.DOCS[this.currentDoc].slotMarkup){
                comp.innerHTML = this.DOCS[this.currentDoc].slotMarkup
            }

            return cont.innerHTML
        }

        return `<${doc.tag} ${this.attrs().join(` `)}>${doc.slotMarkup}</${doc.tag}>`
    }

    DOC() {
        let doc: any = {}

        if (this.DOCS[this.currentDoc]) {
            doc = this.DOCS[this.currentDoc]
        }

        const code = document.getElementById(`exampleCode`)

        if (code) {
            code.textContent = doc.example
            code.className = `demo-code prettyprint`

            setTimeout(() => {
                (window as any).PR.prettyPrint()
            }, 100)
        }

        return doc
    }

    openDoc(key) {
        this.currentDoc = key
    }

    updateValue(data, key) {
        this.DOCS[this.currentDoc].children.Attributes[key].demoValue = data.detail.newValue
    }

    updateParam(data, key, paramKey) {
        this.DOCS[this.currentDoc].children.Methods[key].parameters[paramKey].demoValue = data.detail.newValue
    }

    runMethod(methodName, key) {
        let doc = this.DOCS[this.currentDoc]
        const component = this.$el.querySelector(`.demo-container ${doc.tag}`)
        const params = this.DOCS[this.currentDoc].children.Methods[key].parameters.map(p => p.demoValue)

        if (component && component[methodName]) {
            component[methodName].apply(null, params)
        }
    }

    updateHTML(e:any){
        this.DOCS[this.currentDoc].slotMarkup = e.detail.newValue
    }

    /** @desc Vuejs mounted lifecyle hook for when the element is mounted */
    mounted() {
        console.log(this.DOCS)
    }
}