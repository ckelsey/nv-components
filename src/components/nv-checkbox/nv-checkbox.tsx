import { Component, Prop, Element, Method, Event, EventEmitter } from '@stencil/core'

/** @desc renders a styled checkbox component */

@Component({
    tag: 'nv-checkbox',
    styleUrl: 'nv-checkbox.scss',
    shadow: true
})
export class NvCheckbox {
    /** @desc For accessibility a hidden checkbox input */
    nativeCheckbox: HTMLInputElement

    /** @desc element that displays hover state */
    hoverBox: HTMLElement

    /** @desc element that displays ripple effect on check/uncheck */
    rippleBox: HTMLElement

    /** @desc containing element */
    container: HTMLElement

    /** @desc timer for hover state animation */
    pulseTimer: any

    /** @desc timer for ripple effect animation */
    rippleTimer: any

    /** @desc value for the checkbox */
    @Prop() value: boolean | string = true

    /** @desc text for the label */
    @Prop() label: string = ''

    /** @desc whether or not the checkbox is disabled */
    @Prop() disabled: boolean = false

    /** @desc if part of a checkbox array, whether or not the parent checkbox is disabled */
    @Prop() parentDisabled: boolean = false

    /** @desc function that is called when the checkbox state changes */
    @Prop() whenUpdate: Function

    /** @desc the component element */
    @Element() element: HTMLElement

    /** @desc an event called when the checkbox state changes */
    @Event() change: EventEmitter

    /** @desc determines the checkbox's state */
    get state(): string {
        switch (this.value) {
            case `mixed`:
                return `indeterminate_check_box`

            case true:
            case `true`:
                return `check_box`

            case false:
            case `false`:
                return `check_box_outline_blank`
        }
    }

    /** @desc determines the checkbox's tabIndex */
    get tabIndex(): number {
        if (this.disabled || this.parentDisabled) {
            return -1
        }

        return 0
    }

    /** @desc toggles the checkbox's state */
    @Method()
    toggle() {
        if (this.disabled || this.parentDisabled) {
            return false
        }

        const oldValue = this.value
        const newValue = this.value === `mixed` ? true : this.value === `false` ? true : this.value === `true` ? false : !this.value
        const updateData = { oldValue, newValue, element: this }

        if (this.whenUpdate && typeof this.whenUpdate === `function`) {
            this.whenUpdate(updateData)
        }

        this.change.emit(updateData)
        this.onClick()
    }

    /**
     * @desc handles the enter key press
     * @param e keyboard event
     */
    keyPress(e: KeyboardEvent) {
        if (e.key === `Enter`) {
            e.preventDefault()
            this.toggle()
        }
    }

    /** @desc handles hover state */
    mouseOverBox() {
        this.hoverBox.classList.add(`pulseIn`)
        this.hoverBox.classList.add(`pulseOut`)

        this.pulseTimer = setInterval(() => {
            this.hoverBox.classList.toggle(`pulseOut`)
        }, 1200)
    }

    /** @desc handles hover leave state */
    mouseLeaveBox() {
        clearInterval(this.pulseTimer)
        this.hoverBox.classList.remove(`pulseIn`)
        this.hoverBox.classList.remove(`pulseOut`)
    }

    /** @desc handles click and updates state */
    onClick() {
        const cleanUp = () => {
            clearTimeout(this.rippleTimer)
            this.rippleBox.classList.remove(`rippling`)
            this.rippleBox.classList.remove(`rippleIn`)
            this.rippleBox.classList.remove(`rippleMiddle`)
            this.rippleBox.classList.remove(`rippleOut`)
            this.rippleBox.classList.remove(`rippleGrow`)
        }

        if (!this.container.querySelector(`input:focus`)) {
            clearInterval(this.pulseTimer)
            this.hoverBox.classList.remove(`pulseIn`)
            this.hoverBox.classList.remove(`pulseOut`)
        }

        this.rippleBox.classList.add(`rippling`)
        this.rippleBox.classList.add(`rippleIn`)

        this.rippleTimer = setTimeout(() => {

            this.rippleBox.classList.add(`rippleGrow`)
            this.rippleBox.classList.add(`rippleMiddle`)

            this.rippleBox.classList.remove(`rippleIn`)

            this.rippleTimer = setTimeout(() => {

                this.rippleBox.classList.add(`rippleOut`)
                this.rippleBox.classList.remove(`rippleMiddle`)

                this.rippleTimer = setTimeout(() => {
                    this.rippleBox.classList.remove(`rippling`)
                    this.rippleBox.classList.remove(`rippleOut`)

                    cleanUp()
                }, 300)
            }, 200)
        }, 10)
    }

    /** @desc renders the element */
    render() {
        return (
            <div ref={(el: HTMLInputElement) => this.container = el} class={{ 'nv-checkbox-container': true, selected: !!this.value && this.value !== `false`, 'nv-component-disabled': this.disabled || this.parentDisabled }} onClick={() => this.toggle()} onKeyPress={ev => this.keyPress(ev)}>
                <div class="nv-checkbox-box" onMouseEnter={() => this.mouseOverBox()} onMouseLeave={() => this.mouseLeaveBox()}>
                    <div class="nv-checkbox-box-hover" ref={(el: HTMLInputElement) => this.hoverBox = el}></div>
                    <div class="nv-checkbox-box-ripple" ref={(el: HTMLInputElement) => this.rippleBox = el}></div>
                    <material-icon type={this.state}></material-icon>
                </div>
                <label innerHTML={this.label}></label>
                <input class="nv-checkbox-checkbox-native" ref={(el: HTMLInputElement) => this.nativeCheckbox = el} tabindex={this.tabIndex} type="checkbox" name={this.label} value={this.label} onFocus={() => this.mouseOverBox()} onBlur={() => this.mouseLeaveBox()} />
            </div>
        );
    }
}
