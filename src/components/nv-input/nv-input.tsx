/*
- required
 */

import { Component, Prop, Element, Event, EventEmitter, Method } from '@stencil/core'

/** @desc renders an input component */

@Component({
    tag: 'nv-input',
    styleUrl: 'nv-input.scss',
    shadow: true
})
export class NvInput {
    /** @desc the containing element */
    container: HTMLElement

    /** @desc the input element */
    inputElement: HTMLInputElement

    /** @desc the menu element for options */
    menu: any

    /** @desc the element for character count */
    characterCountElement: HTMLElement

    /** @desc the element that is full width/height of the element */
    shape: HTMLElement

    /** @desc Help text that briefly appears in the assistive text element */
    @Prop({ mutable: true })
    helpText: string = ``

    /**
     * @desc Whether or not component can update value. default is false as this should be handled by controller
     * @example true
     */
    @Prop() selfUpdate: boolean = false

    /** @desc value of the input */
    @Prop({ mutable: true, reflectToAttr: true }) value: string | number = null

    /** @desc type of input, either text or number */
    @Prop() type: string = `text`

    /** @desc classes to apply, currently supports small, transparent, center */
    @Prop() classes: string = ``

    /** @desc label of the input */
    @Prop() label: string = ``

    /** @desc icon to add to the left of the input */
    @Prop() icon: string = ``

    /** @desc adds a clear button to the left of the input, used to clear the value */
    @Prop() clear: boolean = false

    /** @desc if there is an error in the value */
    @Prop() error: boolean = false

    /** @desc text to add to the bottom of the input */
    @Prop() assistiveText: string = ''

    /** @desc whether or not to show character count text */
    @Prop() characterCount: boolean = false

    /** @desc whether or not the input should wrap and increase in height like a textarea element */
    @Prop() multiline: boolean = false

    /** @desc whether or not to filter the options list based on value */
    @Prop() filterOptions: boolean = false

    /** @desc an array of options to show, such as suggestions */
    @Prop() options: Array<string | number> | string | undefined = undefined

    /** @desc maximum of characters for text type or maximum value for number type */
    @Prop() max: number | undefined = undefined

    /** @desc minimum of characters for text type or minimum value for number type */
    @Prop() min: number | undefined = undefined

    /** @desc for number type, amount to increment value */
    @Prop() step: number | undefined = undefined

    /** @desc whether the input is required, set as a todo item */
    @Prop() required: boolean = false

    /** @desc a function to pass in to validate the value */
    @Prop() validator: Function | undefined

    /** @desc called when the value is updated */
    @Prop() whenUpdate: Function | undefined = undefined

    /** @desc called when the input is focused */
    @Prop() whenFocus: Function | undefined = undefined

    /** @desc called when the input loses focus */
    @Prop() whenBlur: Function | undefined = undefined

    /** @desc called when the input has an error */
    @Prop() whenError: Function | undefined = undefined

    /** @desc the component element */
    @Element() element: HTMLElement

    /** @desc called when the value is updated */
    @Event() whenupdate: EventEmitter

    /** @desc called when the value is updated */
    @Event() wheninput: EventEmitter

    /** @desc called when the input is focused */
    @Event() whenfocus: EventEmitter

    /** @desc called when the input loses focus */
    @Event() whenblur: EventEmitter

    /** @desc called when the input is clicked */
    @Event() whenclick: EventEmitter

    /** @desc called when the input has a keypress event */
    @Event() whenkeypress: EventEmitter

    /** @desc called when the input has a keydown event */
    @Event() whenkeydown: EventEmitter

    /** @desc called when the input has a keyup event */
    @Event() whenkeyup: EventEmitter

    /** @desc called when the enter key is pressed */
    @Event() whensubmit: EventEmitter

    /** @desc called when the input has an error */
    @Event() whenerror: EventEmitter

    /** @desc returns the character count of the input */
    get characterCountText() {
        if (this.max !== undefined) {
            return `${this.inputElement.value.length}${this.max ? `/${this.max}` : ``}`
        }

        return (this.inputElement.value.length).toString()
    }

    /** @desc returns the old and new value as well as the component data */
    get updatedData() {
        let value: string | number = this.inputElement.value

        if (this.type === `number`) {
            value = parseFloat(value)
        }

        return {
            oldValue: this.value,
            newValue: value,
            element: this
        }
    }

    /** @desc returns the parsed options */
    get _options() {
        let options = this.options

        if (typeof options === `string`) {
            try {
                options = JSON.parse(options)
            } catch (error) { }
        }

        if (!Array.isArray(options)) {
            return []
        }

        if (this.filterOptions) {
            let _options = []
            let value = (this.value ? this.value.toString() : ``).toLowerCase()

            options.forEach(o => {
                if (o.toString().toLowerCase().indexOf(value) > -1) {
                    _options.push(o)
                }
            })

            options = _options
        }

        return options
    }

    /** @desc returns the focused state */
    get isFocused() {
        return this.container.classList.contains(`active`)
    }

    /** @desc focuses the input */
    @Method() doClick() {
        this.whenclick.emit(this.updatedData)
        this.inputElement.focus()
        this.doFocus()
    }

    /** @desc handles the input event */
    @Method() doInput(e?: Event) {
        let cancel = false
        let errorMessage = ``

        if (!this.type || this.type === `text`) {
            if (this.max && this.inputElement.value.length > this.max) {
                cancel = true
                errorMessage = `${this.max} characters allowed`
            }
        }

        if (this.type === `number`) {
            if (isNaN(parseFloat(this.inputElement.value))) {
                cancel = true
                errorMessage = `only numbers are allowed`
            }

            if (this.max && parseFloat(this.inputElement.value) > this.max) {
                cancel = true
                errorMessage = `${this.max} is the maximum`
            }

            if (this.min !== undefined && parseFloat(this.inputElement.value) < this.min) {
                cancel = true
                errorMessage = `${this.max} is the maximum`
            }
        }

        if (this.validator && typeof this.validator === `function`) {
            let valid = this.validator(this.inputElement.value)

            if (!valid) {
                cancel = true
            }
        }

        if (cancel) {
            if (errorMessage && errorMessage !== ``) {
                this.doError(errorMessage)
            }

            this.whenerror.emit(this.updatedData)

            if (this.whenError && typeof this.whenError === `function`) {
                this.whenError(this.updatedData)
            }

            this.inputElement.value = this.value.toString()

            if (e) {
                e.preventDefault()
            }

            return false
        }

        this.inputElement.focus()

        this.whenupdate.emit(this.updatedData)
        this.wheninput.emit(this.updatedData)

        if (this.whenUpdate && typeof this.whenUpdate === `function`) {
            this.whenUpdate(this.updatedData)
        }

        if (this.selfUpdate) {
            this.characterCountElement.textContent = this.characterCountText
            this.value = this.updatedData.newValue
            this.setClasses()
            this.setHeight()
        }
    }

    /** @desc focuses the input */
    @Method() doFocus() {
        this.container.classList.add(`active`)
        this.whenfocus.emit(this.updatedData)

        if (this.whenFocus && typeof this.whenFocus === `function`) {
            this.whenFocus(this.updatedData)
        }

        if (this._options.length) {
            this.menu.setAttribute(`active`, `true`)
        }
    }

    /** @desc blurs the input */
    @Method() doBlur() {
        this.container.classList.remove(`active`)
        this.whenblur.emit(this.updatedData)

        if (this.whenBlur && typeof this.whenBlur === `function`) {
            this.whenBlur(this.updatedData)
        }

        this.menu.setAttribute(`active`, `false`)
    }

    /** @desc errors the input */
    @Method() doError(message: string) {
        this.container.classList.add(`showHelp`)
        this.container.classList.add(`error`)
        this.helpText = message

        setTimeout(() => {
            this.container.classList.remove(`showHelp`)

            if (!this.error) {
                this.container.classList.remove(`error`)
            }
        }, 1500)
    }

    /** @desc shrinks the input to the space the text takes up */
    shrink() {
        if (this.classes.indexOf(`shrink`) > -1) {
            this.inputElement.style.width = `${this.value.toString().length * 16}px`
        }
    }

    /** @desc clears the input value */
    clearValue() {
        this.inputElement.value = ``
        this.doInput()
    }

    /** @desc sets the state classes */
    setClasses() {
        let hasValue = this.inputElement.value !== undefined && this.inputElement.value !== null && this.inputElement.value !== ``
        let hasIcon = this.icon !== undefined && this.icon !== null && this.icon !== ``

        if (this.classes) {
            this.classes.split(`,`).forEach(s => {
                if (s && s.trim() !== ``) {
                    this.container.classList.add(s.trim())
                }
            })

            this.shrink()
        }

        if (hasValue) {
            this.container.classList.add(`hasValue`)
        } else {
            this.container.classList.remove(`hasValue`)
        }

        if (hasIcon) {
            this.container.classList.add(`hasIcon`)
        } else {
            this.container.classList.remove(`hasIcon`)
        }

        if (this.clear) {
            this.container.classList.add(`hasClear`)
        } else {
            this.container.classList.remove(`hasClear`)
        }

        if (this.characterCount && this.type === `text`) {
            this.container.classList.add(`showCharacterCount`)
        } else {
            this.container.classList.remove(`showCharacterCount`)
        }

        if (this.error) {
            this.container.classList.add(`error`)
        } else {
            this.container.classList.remove(`error`)
        }
    }

    /** @desc handles the click of an option  */
    @Method()
    optionClicked(index: number) {
        let options = this._options

        if (options[index]) {
            this.inputElement.value = options[index].toString()
        }

        this.doInput()
        this.inputElement.blur()
    }

    /** @desc sets the height of a multiline input */
    setHeight() {
        if (this.multiline) {
            this.inputElement.style.height = `0px`
            this.inputElement.style.height = `${this.inputElement.scrollHeight}px`
        }
    }

    /** @desc updates the input */
    update() {
        this.setClasses()
        this.characterCountElement.textContent = this.characterCountText
        this.setHeight()
    }

    /** @desc lifecycle hook for when component is updated */
    componentDidUpdate() {
        this.update()
    }

    /** @desc lifecycle hook for when component is ready */
    componentDidLoad() {
        this.update()
        this.doClick = this.doClick.bind(this)

        this.element.addEventListener(`keydown`, (e) => {
            this.whenkeydown.emit(this.updatedData)

            if (this.container.classList.contains(`active`)) {
                let options = this._options

                if (options.length) {
                    if (e.key === `ArrowDown`) {
                        e.preventDefault()
                        this.menu.focusNextOption()
                    }

                    if (e.key === `ArrowUp`) {
                        e.preventDefault()
                        this.menu.focusPreviousOption()
                    }

                    if (e.key === `Enter` && this.menu.focusedOption !== undefined) {
                        this.menu.selectOption(this.menu.focusedOption)
                    }
                }
            }

            if (e.key === `Enter`) {
                this.whensubmit.emit(this.updatedData)
            }
        })
    }

    /** @desc lifecycle hook for when component is rendered */
    render() {
        return (
            <div
                class="nv-input-container"
                ref={(el: HTMLInputElement) => this.container = el}
                onClick={() => {
                    this.doClick()
                }}
            >
                <div class="shape" ref={(el: HTMLElement) => this.shape = el}></div>
                {this.multiline ?
                    <textarea
                        value={this.value}
                        onInput={(e) => this.doInput(e)}
                        onBlur={() => this.doBlur()}
                        onFocus={() => this.doFocus()}
                        onKeyPress={() => this.whenkeypress.emit(this.updatedData)}
                        onKeyUp={() => this.whenkeyup.emit(this.updatedData)}
                        ref={(el: HTMLInputElement) => this.inputElement = el}
                        required={this.required}
                    ></textarea>
                    :
                    <input
                        type={this.type}
                        value={this.value}
                        onInput={(e) => this.doInput(e)}
                        onBlur={() => this.doBlur()}
                        onFocus={() => this.doFocus()}
                        onKeyPress={() => this.whenkeypress.emit(this.updatedData)}
                        onKeyUp={() => this.whenkeyup.emit(this.updatedData)}
                        ref={(el: HTMLInputElement) => this.inputElement = el}
                        required={this.required}
                        step={this.step}
                    />
                }
                <span class="help-text" innerHTML={this.helpText}></span>
                <span class="assistive-text" innerHTML={this.assistiveText}></span>
                <span class="character-count-text" ref={(el: HTMLInputElement) => this.characterCountElement = el}></span>
                {this.label ? <label innerHTML={this.label}></label> : ``}
                {this.icon ? <material-icon class="input-icon" type={this.icon} size="24px" color="inherit"></material-icon> : ``}
                {this.clear ? <material-icon class="input-clear" type="close" size="24px" color="inherit" onClick={() => this.clearValue()}></material-icon> : ``}
                <nv-menu
                    optionHoverStyles={{ background: '#676767' }}
                    optionStyles={{ background: '#575757', padding: `0px 16px`, lineHeight: `24px`, fontSize: `12px` }}
                    options={this._options.map(s => s.toString())}
                    active={false}
                    position="bottom"
                    anchor={this.element}
                    width={`100%`}
                    whenClicked={(index: number) => this.optionClicked(index)}
                    ref={(el: HTMLInputElement) => this.menu = el}
                ></nv-menu>
            </div>
        );
    }
}
