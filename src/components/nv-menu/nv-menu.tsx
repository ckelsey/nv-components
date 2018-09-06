import { Component, Element, Prop, Event, EventEmitter } from '@stencil/core'

/** @desc renders a popup menu component */

@Component({
    tag: 'nv-menu',
    styleUrl: 'nv-menu.scss',
    shadow: true
})
export class NvMenu {
     /** @desc component container element */
    container: HTMLElement

     /** @desc component tooltip element */
    tooltip: any

     /** @desc component options proxy */
    _options: string[] = []

     /** @desc component anchor proxy */
    _anchor: HTMLElement

    /** @desc component position proxy */
    _position: string = `bottom`

    /** @desc component element */
    @Element() element: HTMLElement

    /** @desc menu options, can be html */
    @Prop() options: string | Array<string> = []

    /** @desc position of the menu, bottom, top, left, right */
    @Prop() position: string = `bottom`

    /** @desc whether or not the menu is open */
    @Prop() active: boolean = false

    /** @desc element or css selector string to element to anchor the menu to, defaults to self */
    @Prop() anchor: string | HTMLElement

    /** @desc function called when menu option is clicked */
    @Prop() whenClicked: Function

    /** @desc function called when menu is opened */
    @Prop() whenActivated: Function

    /** @desc function called when menu is closed */
    @Prop() whenDeactivated: Function

    /** @desc event for when menu option is clicked */
    @Event() whenOptionClicked: EventEmitter

    /** @desc event for when menu is opened */
    @Event() whenOpened: EventEmitter

    /** @desc event for when menu is closed */
    @Event() whenClosed: EventEmitter

    /**
     * @desc handles menu option click event
     * @param e event
     */
    optionClick(e: Event) {
        e.preventDefault()
        e.stopPropagation()

        let index = 0
        const options = this.container.querySelectorAll(`.menu-option`)

        while (index < options.length) {
            if (options[index] === e.target || options[index].contains(e.target as Node)) {
                break
            }

            index = index + 1
        }

        this.whenOptionClicked.emit(index)

        if (this.whenClicked && typeof this.whenClicked === `function`) {
            this.whenClicked(index)
        }

        this.whenClosed.emit()
    }

    /** @desc updates the element properties and proxies */
    update() {
        this._position = this.position || this._position
        this._anchor = (this.anchor ? typeof this.anchor === `string` ? document.querySelector(this.anchor) : this.anchor : null) || this.element;
        this.tooltip.triggerElement = this._anchor
    }

    /** @desc lifecycle hook for when component is updated */
    componentDidUpdate() {
        this.update()
    }

    /** @desc lifecycle hook for when component is ready */
    componentDidLoad() {
        this.update()

        this.tooltip.addEventListener(`whenOpened`, () => {
            if (this.whenActivated && typeof this.whenActivated === `function`) {
                this.whenActivated()
            }
        })

        this.tooltip.addEventListener(`whenClosed`, () => {
            if (this.whenDeactivated && typeof this.whenDeactivated === `function`) {
                this.whenDeactivated()
            }
        })
    }

    /** @desc lifecycle hook for when component is rendered */
    render() {
        this.optionClick = this.optionClick.bind(this)

        if (this.options) {
            if (typeof this.options === `string`) {
                try {
                    this._options = JSON.parse(this.options)
                } catch (error) {
                    this._options = this.options.split(',').map(option => option.trim())
                }
            } else if (Array.isArray(this.options)) {
                this._options = this.options
            } else {
                this._options = []
            }
        } else {
            this._options = []
        }

        return (
            <div class="menu-container" ref={(el: HTMLElement) => this.container = el}>
                <nv-tooltip ref={(el: any) => this.tooltip = el} padding={0} active={this.active} triggerOn="never" triggerElement={this._anchor} position={this._position} boxShadow={true}>
                    {this._options.map((option: string) => option !== `` ? <div class="menu-option" onClick={this.optionClick} innerHTML={option}></div> : <div class="menu-option-divider"></div>)}
                </nv-tooltip>
            </div>
        );
    }
}
