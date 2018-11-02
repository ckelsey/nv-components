import { Component, Prop, Element, Method, Event, EventEmitter } from '@stencil/core'

/** @desc renders a styled switch component */

@Component({
    tag: 'nv-switch',
    styleUrl: 'nv-switch.scss',
    shadow: true
})
export class NvSwitch {
    /** @desc For accessibility a hidden switch input */
    nativeswitch: HTMLInputElement

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

    /** @desc value for the switch */
    @Prop({ mutable: true }) value: boolean | string = true

    /** @desc text for the label */
    @Prop() label: string = ''

    /** @desc whether or not the switch is disabled */
    @Prop() disabled: boolean = false

    /** @desc function that is called when the switch state changes */
    @Prop() whenUpdate: Function

    /** @desc the component element */
    @Element() element: HTMLElement

    /** @desc an event called when the switch state changes */
    @Event() change: EventEmitter

    /** @desc determines the switch's tabIndex */
    get tabIndex(): number {
        if (this.disabled) {
            return -1
        }

        return 0
    }

    /** @desc toggles the switch's state */
    @Method()
    async toggle() {
        if (this.disabled) {
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

        if (this.selfUpdate) {
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
            <div ref={(el: HTMLElement) => this.container = el} class={{ 'nv-switch-container': true, selected: !!this.value && this.value !== `false`, 'nv-component-disabled': this.disabled }} onClick={() => this.toggle()} onKeyPress={ev => this.keyPress(ev)}>
                {this.label ? <label innerHTML={this.label}></label> : ``}
                <div class="nv-switch-box" onMouseEnter={() => this.mouseOverBox()} onMouseLeave={() => this.mouseLeaveBox()}>
                    <div class="nv-switch-track"></div>
                    <div class="nv-switch-ball">
                        <nv-pulse highlight={this.value === true || this.value === `true`} ref={(el: any) => this.pulseBox = el}></nv-pulse>
                        <nv-ripple highlight={this.value === false || this.value === `false`} ref={(el: any) => this.rippleBox = el}></nv-ripple>
                    </div>
                </div>
                <input class="nv-switch-switch-native" ref={(el: HTMLInputElement) => this.nativeswitch = el} tabindex={this.tabIndex} type="checkbox" name={this.label} value={this.label} onFocus={() => this.mouseOverBox()} onBlur={() => this.mouseLeaveBox()} />
            </div>
        );
    }
}
