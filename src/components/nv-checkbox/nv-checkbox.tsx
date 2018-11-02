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
    pulseBox: any

    /** @desc element that displays ripple effect on check/uncheck */
    rippleBox: any

    /** @desc containing element */
    container: HTMLElement

    /**
     * @desc Whether or not component can update active states. default is false as this should be handled by controller
     * @example true
     */
    @Prop() selfUpdate: boolean = false

    /** @desc value for the checkbox */
    @Prop({mutable:true}) value: boolean | string = true

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
    @Event() whenupdate: EventEmitter

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
    async toggle() {
        if (this.disabled || this.parentDisabled) {
            return false
        }

        const oldValue = this.value
        const newValue = this.value === `mixed` ? true : this.value === `false` ? true : this.value === `true` ? false : !this.value
        const updateData = { oldValue, newValue, element: this }

        if (this.whenUpdate && typeof this.whenUpdate === `function`) {
            this.whenUpdate(updateData)
        }

        this.whenupdate.emit(updateData)
        this.onClick()

        if(this.selfUpdate){
            this.value = newValue
        }
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
        this.pulseBox.startPulse()
    }

    /** @desc handles hover leave state */
    mouseLeaveBox() {
        this.pulseBox.stopPulse()
    }

    /** @desc handles click and updates state */
    onClick() {
        if (!this.container.querySelector(`input:focus`)) {
            this.pulseBox.stopPulse()
        }

        this.rippleBox.doRipple()
    }

    /** @desc renders the element */
    render() {
        return (
            <div ref={(el: HTMLElement) => this.container = el} class={{ 'nv-checkbox-container': true, selected: !!this.value && this.value !== `false`, 'nv-component-disabled': this.disabled || this.parentDisabled }} onClick={() => this.toggle()} onKeyPress={ev => this.keyPress(ev)}>
                <div class="nv-checkbox-box" onMouseEnter={() => this.mouseOverBox()} onMouseLeave={() => this.mouseLeaveBox()}>
                    <nv-pulse highlight={this.value === true || this.value === `true`} ref={(el: any) => this.pulseBox = el}></nv-pulse>
                    <nv-ripple highlight={this.value === true || this.value === `true`} ref={(el: any) => this.rippleBox = el}></nv-ripple>
                    <material-icon type={this.state}></material-icon>
                </div>
                <label innerHTML={this.label}></label>
                <input class="nv-checkbox-checkbox-native" ref={(el: HTMLInputElement) => this.nativeCheckbox = el} tabindex={this.tabIndex} type="checkbox" name={this.label} value={this.label} onFocus={() => this.mouseOverBox()} onBlur={() => this.mouseLeaveBox()} />
            </div>
        );
    }
}
