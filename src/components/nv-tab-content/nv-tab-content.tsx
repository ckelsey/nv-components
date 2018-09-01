import { Component, Element } from '@stencil/core'

@Component({
    tag: 'nv-tab-content',
    styleUrl: 'nv-tab-content.scss',
    shadow: false
})
export class NvTabContent {
    container: HTMLElement

    @Element() element: HTMLElement

    initTabs() {
        const children = this.container.children

        for (let i = 0; i < children.length; i++) {
            const child = children[i]
            child.classList.add(`nv-tab-content`)
        }

        this.container.classList.add(`nv-tabs-ready`)
    }

    componentDidUpdate() {
        this.initTabs()
    }

    componentDidLoad() {
        this.initTabs()
    }

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
