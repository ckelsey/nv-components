import { Component, Prop, Element } from '@stencil/core'

@Component({
    tag: 'nv-tabs',
    styleUrl: 'nv-tabs.scss',
    shadow: false
})
export class NvTabs {
    container: HTMLElement
    activeIndicator: HTMLElement
    activeTimer: any

    @Prop()
    initial: number

    @Element() element: HTMLElement

    doActivating(tab: HTMLElement, index: number) {
        if (!tab || !tab.parentElement) {
            return false
        }

        clearTimeout(this.activeTimer)
        this.stopPulsing()

        const id = this.element.getAttribute(`tab-id`)
        const tabs = tab.parentElement.children
        const tabContent = document.body.querySelector(`nv-tab-content[tab-id="${id}"] .nv-tabs-content`)

        if (!tabContent) {
            return false
        }

        const activeContent = tabContent.children[index]
        const box = tab.getBoundingClientRect()
        const parentBox = this.element.getBoundingClientRect()

        if (!activeContent) {
            return
        }

        for (let i = 0; i < tabContent.children.length; i++) {
            if (activeContent && activeContent === tabContent.children[i]) {
                tabContent.children[i].classList.add(`nv-tab-activating`)
            } else {
                tabContent.children[i].classList.remove(`nv-tab-activating`)
                tabContent.children[i].classList.remove(`nv-tab-active`)
            }
        }

        for (let i = 0; i < tabs.length; i++) {
            if (tab === tabs[i]) {
                tabs[i].classList.add(`nv-tab-activating`)
            } else {
                tabs[i].classList.remove(`nv-tab-activating`)
                tabs[i].classList.remove(`nv-tab-active`)
            }
        }

        tab.classList.add(`nv-tab-activating`)
        this.container.classList.add(`nv-tabs-activating`)

        this.activeIndicator.classList.add('nv-tabs-activating')
        this.activeIndicator.style.width = `${box.width}px`
        this.activeIndicator.style.left = `${box.left - parentBox.left}px`;

        this.activeTimer = setTimeout(() => {
            clearTimeout(this.activeTimer)
            this.activeIndicator.classList.remove('nv-tabs-activating')
            this.container.classList.remove(`nv-tabs-activating`)
            tab.classList.remove(`nv-tab-activating`)
            tab.classList.add(`nv-tab-active`)
            activeContent.classList.remove(`nv-tab-activating`)
            activeContent.classList.add(`nv-tab-active`)
        }, 3000)
    }

    doRipple(tab: HTMLElement, e?: MouseEvent) {
        const box = tab.getBoundingClientRect()
        const ripple = tab.querySelector(`.nv-tabs-active-ripple`) as HTMLElement
        const ripple2 = tab.querySelector(`.nv-tabs-active-ripple2`) as HTMLElement

        if (ripple && ripple2) {
            if (!e) {
                ripple.style.removeProperty(`top`)
                ripple.style.removeProperty(`left`)
            } else {
                const left = ((e.pageX - box.left) / box.width) * 100
                const top = ((e.pageY - box.top) / box.height) * 100
                ripple.style.top = `${top}%`
                ripple.style.left = `${left}%`
                ripple2.style.top = `${top}%`
                ripple2.style.left = `${left}%`
            }
        }

        tab.classList.add(`nv-tab-rippling`)

        setTimeout(() => {
            tab.classList.remove(`nv-tab-rippling`)
        }, 300)
    }

    doPulsing(tab: HTMLElement) {
        tab.classList.add(`nv-tab-pulsing-start`)
        setTimeout(() => {
            tab.classList.add(`nv-tab-pulsing`)
        }, 300)
    }

    stopPulsing() {
        const pulsing = this.container.querySelectorAll(`.nv-tab-pulsing`)

        for (let i = 0; i < pulsing.length; i++) {
            const tab = pulsing[i]
            tab.classList.remove(`nv-tab-pulsing`)
            setTimeout(() => {
                tab.classList.remove(`nv-tab-pulsing-start`)
            }, 300)
        }
    }

    openTab(tab: HTMLElement, e?: MouseEvent) {
        if (!tab || !tab.parentElement) {
            return false
        }

        const index = Array.prototype.indexOf.call(tab.parentElement.children, tab)

        this.doActivating(tab, index)
        this.doRipple(tab, e)
    }

    initTabs() {
        const children = this.container.children

        for (let i = 0; i < children.length; i++) {

            const child = children[i] as HTMLElement

            if (!child.classList.contains(`nv-tab`)) {
                child.classList.add(`nv-tab`)

                const activeTabIndicator = document.createElement(`div`)
                activeTabIndicator.classList.add(`nv-tabs-active-tab-indicator`)
                child.appendChild(activeTabIndicator)

                const ripple = document.createElement(`div`)
                ripple.classList.add(`nv-tabs-active-ripple`)
                child.appendChild(ripple)

                const ripple2 = document.createElement(`div`)
                ripple2.classList.add(`nv-tabs-active-ripple2`)
                child.appendChild(ripple2)

                child.setAttribute(`tabindex`, `0`)
                child.classList.add(`nv-tab`)

                child.addEventListener(`mousedown`, (e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    this.openTab(child, e)
                })

                child.addEventListener(`focus`, () => {
                    this.doPulsing(child)

                    const listenForEnter = (e: KeyboardEvent) => {
                        if (e.key === `Enter`) {
                            this.stopPulsing()
                            this.openTab(child)
                        }
                    }

                    const blur = () => {
                        this.stopPulsing()
                        child.removeEventListener(`keypress`, listenForEnter)
                        child.removeEventListener(`blur`, blur)
                    }

                    listenForEnter.bind(this)

                    window.addEventListener(`click`, blur)

                    child.addEventListener(`keypress`, listenForEnter)

                    child.addEventListener(`blur`, blur)
                })
            }
        }
    }

    init() {
        let initial = this.initial
        const children = this.container.children

        if (!initial || !children[initial]) {
            initial = 0
        }

        this.container.classList.add(`nv-tabs-ready`)
        this.container.classList.add(`nv-tabs-tabs`)

        this.openTab(children[this.initial || 0] as HTMLElement)
    }

    setClasses() {
        if (this.element && this.element.getAttribute(`center`)) {
            this.container.classList.add(`nv-tabs-center`)
        } else {
            this.container.classList.remove(`nv-tabs-center`)
        }
    }

    componentDidUpdate() {
        this.setClasses()
        this.initTabs()
    }

    componentDidLoad() {
        this.setClasses()
        this.initTabs()
        requestAnimationFrame(() => {
            this.init()
        })

    }

    render() {
        return (
            <div class="nv-tabs-wrapper">
                <div class="nv-tabs" ref={(el: HTMLInputElement) => this.container = el}>
                    <slot />
                </div>
                <div ref={(el: HTMLInputElement) => this.activeIndicator = el} class="active-indicator"></div></div>
        )
    }
}
