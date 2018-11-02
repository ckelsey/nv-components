import { Component, Method, Prop, Element } from '@stencil/core'

/** 
 * @desc renders a pulse effect component 
 */

@Component({
    tag: 'nv-pulse',
    styleUrl: 'nv-pulse.scss',
    shadow: true
})
export class NvPulse {

    /** @desc element that displays pulse effect */
    pulseBox: HTMLElement

    /** @desc timer for pulse effect animation */
    pulseTimer: any

    /** @desc the component element */
    @Element() element: HTMLElement

    /** @desc whether or not the color be the highlight color or gray */
    @Prop() highlight: boolean = false

    /** @desc starts the pulse animation */
    @Method()
    async startPulse() {
        clearInterval(this.pulseTimer)
        
        if (!this.pulseBox) {
            return
        }

        const dimension = Math.min(this.element.offsetWidth, this.element.offsetHeight)
        this.pulseBox.style.width = `${dimension}px`
        this.pulseBox.style.height = `${dimension}px`
        this.pulseBox.style.top = `${(this.element.offsetHeight / 2) - (dimension / 2)}px`
        this.pulseBox.style.left = `${(this.element.offsetWidth / 2) - (dimension / 2)}px`

        if (this.highlight) {
            this.pulseBox.classList.add(`highlighted`)
        } else {
            this.pulseBox.classList.remove(`highlighted`)
        }

        this.pulseBox.classList.add(`pulseIn`)
        this.pulseBox.classList.add(`pulseOut`)

        this.pulseTimer = setInterval(() => {
            if (!this.pulseBox) {
                return
            }

            this.pulseBox.classList.toggle(`pulseOut`)
        }, 1200)
    }

    /** @desc stops the pulse animation */
    @Method()
    async stopPulse() {
        clearInterval(this.pulseTimer)

        if (!this.pulseBox) {
            return
        }

        const dimension = Math.min(this.element.offsetWidth, this.element.offsetHeight)
        this.pulseBox.style.width = `${dimension}px`
        this.pulseBox.style.height = `${dimension}px`
        this.pulseBox.style.top = `${(this.element.offsetHeight / 2) - (dimension / 2)}px`
        this.pulseBox.style.left = `${(this.element.offsetWidth / 2) - (dimension / 2)}px`

        if (this.highlight) {
            this.pulseBox.classList.add(`highlighted`)
        } else {
            this.pulseBox.classList.remove(`highlighted`)
        }

        this.pulseBox.classList.remove(`pulseIn`)
        this.pulseBox.classList.remove(`pulseOut`)
    }

    /** @desc lifecycle hook, renders the element */
    render() {
        return (
            <div class="nv-pulse" ref={(el: HTMLElement) => this.pulseBox = el}></div>
        );
    }
}
