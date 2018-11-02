import { Component, Method, Prop, Element } from '@stencil/core'

/** @desc renders a wave effect component */

@Component({
    tag: 'nv-wave',
    styleUrl: 'nv-wave.scss',
    shadow: true
})
export class NvWave {
    /** @desc component element */
    @Element() element: HTMLElement

    /** @desc element that displays wave effect */
    waveBox: HTMLElement

    /** @desc timer for wave effect animation */
    waveTimer: any

    @Prop()
    highlight: boolean = false

    @Method()
    reset() {
        clearTimeout(this.waveTimer)
        this.waveBox.classList.add(`reset`)
        this.waveBox.classList.remove(`highlighted`)
        this.waveBox.classList.remove(`waving`)
        this.waveBox.classList.remove(`waveIn`)
        this.waveBox.classList.remove(`waveMiddle`)
        this.waveBox.classList.remove(`waveOut`)
        this.waveBox.classList.remove(`waveGrow`)
        this.waveBox.classList.remove(`wavePulseIn`)
        this.waveBox.classList.remove(`wavePulseOut`)

        requestAnimationFrame(() => {
            this.waveBox.classList.remove(`reset`)
        })
    }

    @Method()
    doWave(e?: any) {
        clearTimeout(this.waveTimer)

        if (!this.waveBox) {
            return
        }

        return this.startWave(e)
            .then(() => {
                return this.stopWave(e)
            })
    }

    @Method()
    doPulse() {
        clearTimeout(this.waveTimer)

        this.waveBox.classList.add(`waving`)
        this.waveBox.classList.add(`waveGrow`)
        this.waveBox.classList.remove(`waveMiddle`)
        this.waveBox.classList.add(`wavePulseOut`)

        this.waveTimer = setTimeout(() => {
            if (!this.waveBox) {
                return
            }

            this.waveBox.classList.remove(`wavePulseOut`)
            this.waveBox.classList.add(`wavePulseIn`)

            this.waveTimer = setTimeout(() => {
                if (!this.waveBox) {
                    return
                }

                this.waveBox.classList.remove(`wavePulseIn`)
                this.doPulse()
            }, 1200)
        }, 1200)
    }

    @Method()
    startWave(e?: any) {
        if (!this.waveBox) {
            return
        }

        clearTimeout(this.waveTimer)

        return new Promise((resolve) => {
            const dimension = Math.max(this.element.offsetWidth, this.element.offsetHeight)
            const centerX = (this.element.offsetWidth / 2) - (dimension / 2)
            const centerY = (this.element.offsetHeight / 2) - (dimension / 2)

            this.waveBox.style.width = `${dimension}px`
            this.waveBox.style.height = `${dimension}px`
            this.waveBox.style.top = `${e ? (e.pageY - this.element.getBoundingClientRect().top) - (dimension / 2) : centerY}px`
            this.waveBox.style.left = `${e ? (e.pageX - this.element.getBoundingClientRect().left) - (dimension / 2) : centerX}px`

            if (this.highlight) {
                this.waveBox.classList.add(`highlighted`)
            } else {
                this.waveBox.classList.remove(`highlighted`)
            }

            this.waveBox.classList.add(`waving`)
            this.waveBox.classList.add(`waveIn`)

            this.waveTimer = setTimeout(() => {

                this.waveBox.classList.add(`waveGrow`)
                this.waveBox.classList.add(`waveMiddle`)
                this.waveBox.classList.remove(`waveIn`)

                this.waveTimer = setTimeout(() => {
                    this.doPulse()
                    return resolve()
                }, 200)
            }, 10)
        })
    }

    @Method()
    stopWave(e?: any) {
        if (!this.waveBox) {
            return
        }

        clearTimeout(this.waveTimer)

        return new Promise((resolve) => {
            const dimension = Math.max(this.element.offsetWidth, this.element.offsetHeight)
            const centerX = (this.element.offsetWidth / 2) - (dimension / 2)
            const centerY = (this.element.offsetHeight / 2) - (dimension / 2)

            this.waveBox.style.width = `${dimension}px`
            this.waveBox.style.height = `${dimension}px`
            this.waveBox.style.top = `${e ? (e.pageY - this.element.getBoundingClientRect().top) - (dimension / 2) : centerY}px`
            this.waveBox.style.left = `${e ? (e.pageX - this.element.getBoundingClientRect().left) - (dimension / 2) : centerX}px`

            if (this.highlight) {
                this.waveBox.classList.add(`highlighted`)
            } else {
                this.waveBox.classList.remove(`highlighted`)
            }

            const cleanUp = () => {
                clearTimeout(this.waveTimer)
                this.waveBox.classList.remove(`waving`)
                this.waveBox.classList.remove(`waveIn`)
                this.waveBox.classList.remove(`waveMiddle`)
                this.waveBox.classList.remove(`waveOut`)
                this.waveBox.classList.remove(`waveGrow`)

                return resolve()
            }

            this.waveBox.classList.remove(`wavePulseOut`)
            this.waveBox.classList.remove(`wavePulseIn`)

            this.waveBox.classList.add(`waving`)
            this.waveBox.classList.remove(`waveIn`)
            this.waveBox.classList.remove(`waveMiddle`)

            this.waveTimer = setTimeout(() => {
                cleanUp()
            }, 300)
        })
    }

    /** @desc renders the element */
    render() {
        return (
            <div class="nv-wave" ref={(el: HTMLElement) => this.waveBox = el}></div>
        );
    }
}
