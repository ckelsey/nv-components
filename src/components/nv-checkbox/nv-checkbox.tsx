import { Component, Prop, Element, Method, Event, EventEmitter } from '@stencil/core'

@Component({
    tag: 'nv-checkbox',
    styleUrl: 'nv-checkbox.scss',
    shadow: true
})
export class NvCheckbox {
    nativeCheckbox: HTMLInputElement
    hoverBox: HTMLElement
    rippleBox: HTMLElement
    container: HTMLElement
    pulseTimer: any
    rippleTimer: any

    @Prop() value: boolean | string
    @Prop() label: string
    @Prop() disabled: boolean
    @Prop() parentDisabled: boolean
    @Prop() whenUpdate: Function

    @Element() element: HTMLElement

    @Event() change: EventEmitter

    get state() {
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

    get tabIndex() {
        if (this.disabled || this.parentDisabled) {
            return -1
        }

        return 0
    }

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

    keyPress(e: KeyboardEvent) {
        if (e.key === `Enter`) {
            e.preventDefault()
            this.toggle()
        }
    }

    mouseOverBox() {
        this.hoverBox.classList.add(`pulseIn`)
        this.hoverBox.classList.add(`pulseOut`)

        this.pulseTimer = setInterval(() => {
            this.hoverBox.classList.toggle(`pulseOut`)
        }, 1200)
    }

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

    mouseLeaveBox() {
        clearInterval(this.pulseTimer)
        this.hoverBox.classList.remove(`pulseIn`)
        this.hoverBox.classList.remove(`pulseOut`)
    }

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
