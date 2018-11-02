import { Component, Prop, Element, Event, EventEmitter } from '@stencil/core'

/*
- nested
- keyboard
*/

/** @desc renders a styled slider component */

@Component({
    tag: 'nv-slider',
    styleUrl: 'nv-slider.scss',
    shadow: true
})
export class NvSlider {
    /** @desc For accessibility a hidden slider input */
    // nativeslider: HTMLInputElement

    /** @desc element that displays hover state */
    pulseBox1: any

    /** @desc element that displays hover state */
    pulseBox2: any

    rippleBox1: any
    rippleBox2: any

    track: HTMLElement
    ball1: HTMLElement
    ball2: HTMLElement
    trackContainer: HTMLElement
    input1: HTMLInputElement
    input2: HTMLInputElement
    stepsElement: HTMLElement

    mouseDownIndex: number = 1

    /** @desc containing element */
    container: HTMLElement

    /**
     * @desc Whether or not component can update active states. default is false as this should be handled by controller
     * @example true
     */
    @Prop() selfUpdate: boolean = false

    /** @desc value for the slider */
    @Prop({ mutable: true }) value: number | undefined = undefined

    /** @desc values for the slider, indicates a range slider */
    @Prop({ mutable: true }) values: Array<number> | string | undefined = undefined

    @Prop() showInput: boolean = false

    @Prop() step: number | undefined = undefined

    /** @desc max value for the slider */
    @Prop() max: number = 1

    /** @desc min value for the slider */
    @Prop() min: number = 0

    /** @desc text for the label */
    @Prop() label: string = ''

    /** @desc whether or not the slider is disabled */
    @Prop() disabled: boolean = false

    /** @desc function that is called when the slider state changes */
    @Prop() whenUpdate: Function

    /** @desc the component element */
    @Element() element: HTMLElement

    /** @desc an event called when the slider state changes */
    @Event() change: EventEmitter

    get _value(): number {
        if (isNaN(this.value)) {
            return this.min || 0
        }

        return ((this.value - (this.min || 0)) / (this.max - (this.min || 0))) * 100
    }

    get _values(): Array<number> {
        if (!this.values) {
            return undefined
        }

        let values = this.values

        if (typeof values === `string`) {
            try {
                values = JSON.parse(values)
            } catch (error) {
                return undefined
            }
        }

        if (!Array.isArray(values)) {
            return undefined
        }

        if (isNaN(values[0])) {
            values[0] = 0
        }

        if (isNaN(values[1])) {
            values[1] = 0
        }

        if(this.input1){
            this.input1.value = values[0] as any
        }

        if(this.input2){
            this.input2.value = values[1] as any
        }

        return values
    }

    /** @desc determines the slider's tabIndex */
    get tabIndex(): number {
        if (this.disabled) {
            return -1
        }

        return 0
    }

    /** @desc handles hover state */
    mouseOverBox() {
        this.pulseBox2.startPulse()

        if (this.pulseBox1) {
            this.pulseBox1.startPulse()
        }
    }

    /** @desc handles hover leave state */
    mouseLeaveBox() {
        this.pulseBox2.stopPulse()

        if (this.pulseBox1) {
            this.pulseBox1.stopPulse()
        }
    }

    updateValue(value: number, index) {
        const min = this.min !== undefined ? this.min : 0
        const step = this.step ? this.step : (this.max - min) / 100

        const roundStep = (val) => {
            if (this.step) {
                val = Math.round(val / this.step) * this.step

                const decimal = this.step.toString().split('.')[1]

                if (decimal) {
                    val = parseFloat(val.toFixed(decimal.length))
                }
            }

            return val
        }

        if (this._values) {
            const values = this._values

            if (!index) {
                if (value > values[1] - step) {
                    value = values[1] - step
                }

                if (value < min) {
                    value = min
                }
            } else {
                if (value > this.max) {
                    value = this.max
                }

                if (value <= this._values[0] + step) {
                    value = this._values[0] + step
                }
            }

            value = roundStep(value)

            values[index] = value

            const updateData = {
                oldValue: this.values,
                newValue: values,
                element: this
            }

            if (typeof this.whenUpdate === `function`) {
                this.whenUpdate(updateData)
            }

            this.change.emit(updateData)

            if (this.selfUpdate) {
                this.values = values
                this.update()
            }

            this.setSteps()

        } else {
            if (value > this.max) {
                value = this.max
            }

            if (value < min) {
                value = min
            }

            value = roundStep(value)

            const updateData = {
                oldValue: this.value,
                newValue: value,
                element: this
            }

            if (typeof this.whenUpdate === `function`) {
                this.whenUpdate(updateData)
            }

            this.change.emit(updateData)

            if (this.selfUpdate) {
                this.value = value
            }

            this.setSteps()
        }
    }

    mouseMove(e: MouseEvent) {
        const x = e.pageX - this.trackContainer.getBoundingClientRect().left
        const percent = (x / this.trackContainer.getBoundingClientRect().width)
        const value = (percent * (this.max - (this.min || 0))) + (this.min || 0)
        this.updateValue(value, this.mouseDownIndex)
    }

    mouseDown(e: MouseEvent) {
        document.body.style.userSelect = 'none'

        if (this._values) {
            const ballBox1 = this.ball1.getBoundingClientRect()
            const dist1 = Math.abs(e.pageX - (ballBox1.left + (ballBox1.width / 2)))

            const ballBox2 = this.ball2.getBoundingClientRect()
            const dist2 = Math.abs(e.pageX - (ballBox2.left + (ballBox2.width / 2)))

            if (dist1 < dist2) {
                this.mouseDownIndex = 0
                this.rippleBox1.startRipple()
            } else {
                this.mouseDownIndex = 1
                this.rippleBox2.startRipple()
            }
        } else {
            this.rippleBox2.startRipple()

            if (this.rippleBox1) {
                this.rippleBox1.startRipple()
            }
        }

        this.mouseMove(e)

        this.pulseBox2.stopPulse()

        if (this.pulseBox1) {
            this.pulseBox1.stopPulse()
        }

        window.document.addEventListener(`mousemove`, this.mouseMove)
        window.document.addEventListener(`mouseup`, this.mouseUp)
        window.document.addEventListener(`mouseleave`, this.mouseUp)
    }

    mouseUp() {
        document.body.style.removeProperty('user-select')
        window.document.removeEventListener(`mousemove`, this.mouseMove)
        window.document.removeEventListener(`mouseup`, this.mouseUp)
        window.document.removeEventListener(`mouseleave`, this.mouseUp)

        this.pulseBox2.stopPulse()

        if (this.pulseBox1) {
            this.pulseBox1.stopPulse()
        }

        this.rippleBox2.stopRipple()

        if (this.rippleBox1) {
            this.rippleBox1.stopRipple()
        }
    }

    inputUpdate(data, index) {
        if (this._values) {
            const value = parseFloat(data.newValue)

            return this.updateValue(value, index)
        }

        return this.updateValue(parseFloat(data.newValue), index)
    }

    setSteps() {
        if (this.step !== undefined) {
            const count = Math.round((this.max - (this.min || 0)) / this.step)
            const position = Math.round((this.value + (this.min || 0)) / this.step)
            let children = this.stepsElement.children
            let c = 0

            while (children.length > count) {
                this.stepsElement.removeChild(children[children.length - 1])
            }

            while (children.length < count) {
                const tick = document.createElement(`div`)
                tick.className = `track-tick`
                this.stepsElement.appendChild(tick)
                children = this.stepsElement.children
            }

            while (c < count) {
                if (c < position) {
                    children[c].classList.add(`active`)
                } else {
                    children[c].classList.remove(`active`)
                }

                c = c + 1
            }
        }
    }

    update() {
        if (this._values) {
            this.ball1.style.left = `${(this._values[0] / this.max) * 100}%`
            this.ball2.style.left = `${(this._values[1] / this.max) * 100}%`

            if (this.track) {
                this.track.style.width = `${((this._values[1] - this._values[0]) / this.max) * 100}%`
                this.track.style.left = `${(this._values[0] / this.max) * 100}%`
            }
        } else if (this.track) {
            this.track.style.width = `${this._value}%`
            this.ball2.style.left = `${this._value}%`
        } else {
            this.ball2.style.left = `${this._value}%`
        }

        this.setSteps()
    }

    componentDidUpdate() {
        this.update()
    }

    componentDidLoad() {
        this.mouseUp = this.mouseUp.bind(this)
        this.mouseMove = this.mouseMove.bind(this)
        this.update()
    }

    /** @desc renders the element */
    render() {
        return (
            <div
                ref={(el: HTMLElement) => this.container = el}
                class={{ 'nv-slider-container': true, 'nv-component-disabled': this.disabled }}
                onMouseEnter={() => this.mouseOverBox()}
                onMouseLeave={() => this.mouseLeaveBox()}
            >
                {this.label ? <label innerHTML={this.label}></label> : ``}
                {
                    this.showInput && this._values ?
                        <nv-input
                            type="number"
                            classes="small, transparent, center"
                            style={{ width: `48px` }}
                            value={this._values[0]}
                            whenUpdate={(data) => this.inputUpdate(data, 0)}
                            whenFocus={() => this.rippleBox1.startRipple()}
                            whenBlur={() => this.rippleBox1.stopRipple()}
                            step={this.step ? this.step : this.max ? this.max / 100 : 0.1}
                            max={this.max}
                            min={this.min || 0}
                            ref={(el: HTMLInputElement) => this.input1 = el}
                        ></nv-input>
                        :
                        ``
                }
                <div
                    class="nv-slider-box"
                    ref={(el: HTMLElement) => this.trackContainer = el}
                    onMouseDown={(e) => this.mouseDown(e)}
                >
                    {this.step === undefined ?
                        <div class="nv-slider-track">
                            <div class="nv-slider-track-inner" ref={(el: HTMLElement) => this.track = el}></div>
                        </div>
                        :
                        <div class="nv-slider-track-steps" ref={(el: HTMLElement) => this.stepsElement = el}></div>
                    }
                    {this._values ?
                        <div class="nv-slider-ball" ref={(el: HTMLElement) => this.ball1 = el}>
                            <nv-pulse highlight={true} ref={(el: any) => this.pulseBox1 = el}></nv-pulse>
                            <nv-ripple highlight={true} ref={(el: any) => this.rippleBox1 = el}></nv-ripple>
                        </div>
                        :
                        ``
                    }
                    <div class="nv-slider-ball" ref={(el: HTMLElement) => this.ball2 = el}>
                        <nv-pulse highlight={true} ref={(el: any) => this.pulseBox2 = el}></nv-pulse>
                        <nv-ripple highlight={true} ref={(el: any) => this.rippleBox2 = el}></nv-ripple>
                    </div>
                </div>
                {
                    this.showInput ?
                        <nv-input
                            type="number"
                            classes="small, transparent, center"
                            style={{ width: `48px` }}
                            value={this._values ? this._values[1] : this.value}
                            whenUpdate={(data) => this.inputUpdate(data, 1)}
                            whenFocus={() => this.rippleBox2.startRipple()}
                            whenBlur={() => this.rippleBox2.stopRipple()}
                            step={this.step ? this.step : this.max ? this.max / 100 : 0.1}
                            max={this.max}
                            min={this.min || 0}
                            ref={(el: HTMLInputElement) => this.input2 = el}
                        ></nv-input>
                        :
                        ``
                }
            </div>
        );
    }
}
