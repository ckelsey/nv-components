/**
 * round
 * center
 * spinner
 */

import { Component, Element, Prop, Method } from '@stencil/core'

@Component({
    tag: 'nv-progress',
    styleUrl: 'nv-progress.scss',
    shadow: true
})
export class NvProgress {
    container: HTMLElement
    barElement: HTMLElement
    countElement: HTMLElement
    previousState: string
    animate: boolean = true
    animator: any

    barPositions = {
        scale: 0,
        left: 0
    }

    @Element() element: HTMLElement

    @Prop() timer: string = `requestAnimationFrame`
    @Prop() state: string = `determinate`
    @Prop() type: string = `bar`
    @Prop() message: string = ``
    @Prop() showCount: boolean = false
    @Prop() value: number = 0
    @Prop() start: number = 0
    @Prop() speed: number = 1

    @Method()
    reset() {
        this.animate = false
        cancelAnimationFrame(this.animator)
        clearTimeout(this.animator)
        this.animateScale()
    }

    get _start() {
        return isNaN(this.start) ? 0 : this.start / 100
    }

    get _value() {
        let value = ((isNaN(this.value) ? 0 : this.value / 100) * (1 - (this._start / 1))) + this._start
        value = value > 1 ? 1 : value < 0 ? 0 : value

        return value
    }

    get _speed() {
        return this.speed || 1
    }

    easeArray(startValue: number, endValue: number, frames: number): number[] {
        if (startValue === endValue) {
            return []
        }

        const valueIncrement = (endValue - startValue) / frames
        const sinValueIncrement = Math.PI / frames

        let currentValue = startValue
        let currentSinValue = 0
        let results = []

        function step() {
            currentSinValue += sinValueIncrement;
            currentValue += valueIncrement * (Math.sin(currentSinValue) ** 2) * 2

            if (currentSinValue < Math.PI) {
                results.push(Math.round(currentValue * 10000) / 10000)
                return step()
            } else {
                return results
            }
        }

        return step()
    }

    updateBarPositions() {        
        cancelAnimationFrame(this.animator)
        clearTimeout(this.animator)
        
        if (!this.animate || (this.previousState && this.previousState !== this.state)) {
            return
        }

        this.previousState === this.state

        let scale = 0
        let left = 0

        if (this.state === `indeterminate`) {

            scale = this.barPositions.scale + (0.005 * this._speed)
            left = this.barPositions.left + this._speed

            if (left > 110) {
                left = -10
                scale = 0.05
            }

            if (left > 60) {
                scale = this.barPositions.scale - (0.007 * this._speed)
            }
        } else {
            scale = this.barPositions.scale + ((this._value - this.barPositions.scale) / 20)

            left = this.barPositions.left - (this._speed * 1.38)

            if (left < 0) {
                left = 0
            }

            if (scale < 0) {
                scale = 0
            }

            if (scale > 1) {
                scale = 1
            }

            if (scale < this.barPositions.scale) {
                scale = this.barPositions.scale
            }
        }

        this.update(scale, left)

        if(!this.timer || this.timer === `requestAnimationFrame`){
            this.animator = requestAnimationFrame(() => {
                this.updateBarPositions()
            })
        }else{
            this.animator = setTimeout(() => {
                this.updateBarPositions()
            }, 16)
        }
    }

    update(scale, left) {

        if(this.countElement){
            if ((!this.previousState || this.previousState === `determinate`) && (!this.state || this.state === `determinate`)) {
                this.countElement.textContent = `${Math.round(Math.max(scale, this._value) * 100)}%`
            } else {
                this.countElement.textContent = ``
            }
        }

        this.barElement.style.transformOrigin = `${left}% 50%`
        this.barElement.style.transform = `scale3d(${scale},1,1)`
        this.barPositions = { scale, left }
    }

    animateScale() {
        const scaleEasingArray = this.easeArray(this.barPositions.scale, this._value, 30 * this._speed)

        const animate = () => {
            if (!scaleEasingArray.length) {
                this.previousState = this.state
                this.animate = true
                return this.updateBarPositions()
            }

            this.update(scaleEasingArray.shift(), 0)

            if(!this.timer || this.timer === `requestAnimationFrame`){
                requestAnimationFrame(() => {
                    animate()
                })
            }else{
                setTimeout(() => {
                    animate()
                }, 16)
            }
        }

        animate()
    }

    animateToDeterminate() {
        const leftEasingArray = this.easeArray(this.barPositions.left, 0, 30 * this._speed)
        const scaleEasingArray = this.easeArray(this.barPositions.scale, this._value, 30 * this._speed)

        const animate = () => {
            if (!scaleEasingArray.length || !leftEasingArray.length) {
                this.previousState = this.state
                this.animate = true
                return this.updateBarPositions()
            }

            this.update(scaleEasingArray.shift(), leftEasingArray.shift())

            if(!this.timer || this.timer === `requestAnimationFrame`){
                requestAnimationFrame(() => {
                    animate()
                })
            }else{
                setTimeout(() => {
                    animate()
                }, 16)
            }
        }

        animate()
    }

    componentDidUpdate() {
        if (this.previousState !== this.state) {

            if (this.animate) {
                this.animate = false
                cancelAnimationFrame(this.animator)
                clearTimeout(this.animator)

                if (this.previousState === `indeterminate`) {
                    return this.animateToDeterminate()
                }

                if (this.state === `indeterminate`) {
                    this.animate = true
                    this.previousState = this.state
                    this.updateBarPositions()
                    return
                }
            }

            return
        }

        this.animate = true
        this.previousState = this.state
        this.updateBarPositions()
    }

    componentDidLoad() {        
        this.animate = true
        this.previousState = this.state
        this.updateBarPositions()
    }

    render() {
        return (
            <div class="nv-progress">
                {(this.message && this.message.trim() !== ``) || this.showCount ?
                    <div class="nv-progress-text">
                        {this.message && this.message.trim() !== `` ? <div class="nv-progress-message" innerHTML={this.message}></div> : ``}
                        {this.showCount ? <div class="nv-progress-count" ref={(el: HTMLInputElement) => this.countElement = el}></div> : ``}
                    </div>
                    :
                    ``
                }
                <div class="nv-progress-bar">
                    <div class="nv-progress-bar-inner" ref={(el: HTMLInputElement) => this.barElement = el}></div>
                </div>
            </div>
        )
    }
}
