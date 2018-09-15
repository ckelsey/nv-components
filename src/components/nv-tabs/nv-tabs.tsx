import { Component, Prop, Element, Method } from '@stencil/core'

/**
 * @desc renders tabs to be used with nv-tab-content
 * @example <div><nv-tabs tab-id="demo-tabs"><div>tab 1</div><div>tab 2</div><div>tab 3</div></nv-tabs></div><div><nv-tab-content tab-id="demo-tabs"><div>tab 1 content</div><div>tab 2 content</div><div>tab 3 content</div></nv-tab-content></div>
 * @yield slot
 */

@Component({
    tag: 'nv-tabs',
    styleUrl: 'nv-tabs.scss',
    shadow: false
})
export class NvTabs {

    /** @desc active bar element */
    activeIndicator: HTMLElement
    wave: any

    /** @desc animation timer */
    activeTimer: any

    /** @desc initial tab to open */
    @Prop()
    initial: number = 0

    /** @desc component element */
    @Element() element: HTMLElement

    @Method()
    doOpen(index: number, e?: Event) {
        this.checkActiveIndicator()
        this.checkWave()
        this.wave.stopWave()

        const id = this.element.getAttribute(`tab-id`)
        const tabs = this.element.querySelectorAll(`[nv-tab]`)
        const tabContent = document.body.querySelector(`nv-tab-content[tab-id="${id}"]`)
        let tab

        if (!tabContent) {
            return false
        }

        const activeContent = tabContent.children[index]

        if (!activeContent) {
            return
        }

        for (let i = 0; i < tabContent.children.length; i++) {
            if (tabContent.children[i]) {
                if (activeContent && activeContent === tabContent.children[i]) {
                    tabContent.children[i].setAttribute(`nv-tab-active`, `true`)
                } else {
                    tabContent.children[i].setAttribute(`nv-tab-active`, `false`)
                }
            }
        }

        for (let i = 0; i < tabs.length; i++) {
            if (tabs[i]) {
                if (i === index) {
                    tab = tabs[i]
                    tabs[i].setAttribute(`nv-tab-active`, `activating`)
                } else {
                    tabs[i].setAttribute(`nv-tab-active`, `false`)
                }
            }
        }

        if (!tab) {
            return
        }

        const box = tab.getBoundingClientRect()
        const parentBox = this.element.getBoundingClientRect()

        this.activeIndicator.classList.add('nv-tabs-activating')
        this.activeIndicator.style.width = `${box.width}px`
        this.activeIndicator.style.left = `${box.left - parentBox.left}px`;

        if (e) {
            this.setWave(tab)
            this.wave.highlight = true
            this.wave.doWave(e)
        }

        this.activeTimer = setTimeout(() => {
            clearTimeout(this.activeTimer)

            if (!activeContent || !tab || !this.activeIndicator) {
                return
            }

            tab.setAttribute(`nv-tab-active`, `true`)
            this.activeIndicator.classList.remove('nv-tabs-activating')
        }, 310)
    }

    checkWave() {
        this.wave = this.element.querySelector(`nv-wave`)

        if (!this.wave) {
            this.wave = document.createElement(`nv-wave`)
            this.element.appendChild(this.wave)
        }
    }

    setWave(tab) {
        const box = tab.getBoundingClientRect()
        const parentBox = this.element.getBoundingClientRect()
        this.wave.style.position = `absolute`
        this.wave.style.width = `${box.width}px`
        this.wave.style.height = `${box.height}px`
        this.wave.style.pointerEvents = `none`
        this.wave.style.left = `${box.left - parentBox.left}px`;
    }

    checkActiveIndicator() {
        this.activeIndicator = this.element.querySelector(`.active-indicator`)

        if (!this.activeIndicator) {
            this.activeIndicator = document.createElement(`div`)
            this.activeIndicator.className = `active-indicator`
            this.element.appendChild(this.activeIndicator)
        }
    }

    openTab(tab, e?) {
        if (!tab || !tab.parentElement) {
            return false
        }

        const children = this.element.children
        let index = 0


        for (let i = 0; i < children.length; i++) {
            if (children[i] !== this.wave && children[i] !== this.activeIndicator) {
                if (children[i] === tab) {
                    break
                }

                index++
            }
        }

        this.doOpen(index, e)
    }

    setTabs() {
        const activeTab = this.element.querySelector(`[nv-tab-active="true"]`)
        let children = this.element.children

        this.checkActiveIndicator()
        this.checkWave()

        for (let i = 0; i < children.length; i++) {
            const child = children[i]

            if (!child.getAttribute(`nv-tab`) && child !== this.activeIndicator && child !== this.wave) {
                child.setAttribute(`nv-tab`, i.toString())

                child.setAttribute(`tabindex`, `0`)
                child.classList.add(`nv-tab`)

                child.addEventListener(`mousedown`, (e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    this.openTab(child, e)
                })

                child.addEventListener(`focus`, () => {
                    this.wave.reset()
                    requestAnimationFrame(() => {
                        this.setWave(child)
                        this.wave.startWave()
                        this.wave.highlight = false

                        const listenForEnter = (e: KeyboardEvent) => {
                            if (e.key === `Enter`) {
                                this.openTab(child)
                            }
                        }

                        const blur = () => {
                            this.wave.stopWave()
                            child.removeEventListener(`keypress`, listenForEnter)
                            child.removeEventListener(`blur`, blur)
                            window.removeEventListener(`click`, blur)
                        }

                        listenForEnter.bind(this)
                        blur.bind(this)

                        window.addEventListener(`click`, blur)

                        child.addEventListener(`keypress`, listenForEnter)

                        child.addEventListener(`blur`, blur)
                    })
                })
            }
        }

        if (!activeTab) {
            children = this.element.children

            this.doOpen(this.initial || 0)
        }

        this.element.classList.add(`ready`)
    }

    /** @desc lifecycle hook for when component is updated */
    componentDidUpdate() {
        this.setTabs()
    }

    /** @desc lifecycle hook for when component is ready */
    componentDidLoad() {
        this.setTabs()

        const mutationObserver = new MutationObserver((mutations: Array<MutationRecord>) => {
            for (let i = 0; i < mutations.length; i++) {
                if (mutations[i].type === `childList`) {
                    this.setTabs()
                    break;
                }
            }
        })

        mutationObserver.observe(this.element, {
            attributes: true,
            childList: true,
            characterData: true
        })
    }

    /** @desc lifecycle hook for when component is rendered */
    render() {
        return (<slot />)
    }
}
