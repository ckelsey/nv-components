import { Component, Element } from '@stencil/core'

/** @desc renders tab content to be used with nv-tabs */

@Component({
    tag: 'nv-tab-content',
    styleUrl: 'nv-tab-content.scss',
    shadow: false
})
export class NvTabContent {
    /** @desc container element */
    container: HTMLElement

    /** @desc component element */
    @Element() element: HTMLElement

    /** @desc sets up the slot content */
    initTabs() {
        const children = this.container.children

        for (let i = 0; i < children.length; i++) {
            const child = children[i]
            child.classList.add(`nv-tab-content`)
        }

        this.container.classList.add(`nv-tabs-ready`)
    }

    /** @desc lifecycle hook for when component is updates */
    componentDidUpdate() {
        this.initTabs()
    }

    /** @desc lifecycle hook for when component is ready */
    componentDidLoad() {
        this.initTabs()
    }

    /** @desc lifecycle hook for when component is rendered */
    render() {
        return (
            <div class="nv-tabs-wrapper">
                <div class="nv-tabs-content" ref={(el: HTMLInputElement) => this.container = el}>
                    <slot />
                </div>
            </div>
        )
    }
}
