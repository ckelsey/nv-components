import { Component, Element, Prop, Event, EventEmitter, Method } from '@stencil/core'

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

    optionElements: Array<HTMLElement> = []

    /** @desc component options proxy */
    _options: string[] = []

    /** @desc component anchor proxy */
    _anchor: HTMLElement

    /** @desc component position proxy */
    _position: string = `bottom`

    /** @desc component element */
    @Element() element: HTMLElement

    /** @desc component element */
    @Prop({ mutable: true }) focusedOption: number | undefined = undefined

    /** @desc set width of menu */
    @Prop() width: string = ``

    /** 
     * @desc menu options, can be html 
     * @example ''
     */
    @Prop() options: string | Array<string> = []

    /** 
     * @desc position of the menu, bottom, top, left, right 
     * @example ''
     */
    @Prop() position: string = `bottom`

    /** @desc whether or not the menu is open */
    @Prop() isActive: boolean = false

    /** @desc element or css selector string to element to anchor the menu to, defaults to self */
    @Prop() anchor: string | HTMLElement = ``

    /** @desc function called when menu option is clicked */
    @Prop() whenClicked: Function

    /** @desc function called when menu is opened */
    @Prop() whenActivated: Function

    /** @desc function called when menu is closed */
    @Prop() whenDeactivated: Function

    /** @desc object of styles to apply to each option */
    @Prop() optionStyles: string | {} = {}

    /** @desc object of styles to apply to each option on hover */
    @Prop() optionHoverStyles: string | {} = {}

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

        this.selectOption(index)
    }

    /** @desc updates the element properties and proxies */
    update() {
        this._position = this.position || this._position
        this._anchor = (this.anchor ? typeof this.anchor === `string` ? document.querySelector(this.anchor) : this.anchor : null) || this.element;
        this.tooltip.triggerElement = this._anchor

        if (this.isActive) {
            this.container.classList.add(`active`)
        } else {
            this.container.classList.remove(`active`)
        }
    }

    /**
     * @desc handles mouseenter event of an option
     * @param el option element
     */
    mouseEnter(el) {
        el.classList.add(`focused`)

        this.focusedOption = this.optionElements.indexOf(el)

        if (!this.optionHoverStyles) {
            return
        }

        let optionstyles = {}
        if (typeof this.optionHoverStyles === `string`) {
            try {
                optionstyles = JSON.parse(this.optionHoverStyles)
            } catch (error) {}
        }else{
            optionstyles = this.optionHoverStyles
        }

        for (let i in optionstyles) {
            el.style[i] = optionstyles[i]
        }
    }

    /**
     * @desc handles mouseleave event of an option
     * @param el option element
     */
    mouseLeave(el) {
        el.classList.remove(`focused`)

        if (this.focusedOption === this.optionElements.indexOf(el)) {
            this.focusedOption = undefined
        }

        if (!this.optionHoverStyles) {
            return
        }

        let optionstyles = {}
        if (typeof this.optionStyles === `string`) {
            try {
                optionstyles = JSON.parse(this.optionStyles)
            } catch (error) {}
        }else{
            optionstyles = this.optionStyles
        }

        for (let i in optionstyles) {
            if (optionstyles[i]) {
                el.style[i] = optionstyles[i]
            } else {
                el.style.removeProperty(i)
            }
        }
    }

    /**
     * @desc focuses the option at the supplied index
     * @param index index of option
     */
    @Method()
    async focusOption(index: number | string) {
        if (typeof index === `string`) {
            index = parseInt(index)
        }

        console.log(index)

        if (this.optionElements[index]) {
            this.mouseEnter(this.optionElements[index])

            this.optionElements.forEach((el, i) => {
                if (i !== index) {
                    this.mouseLeave(el)
                }
            })
        }
    }

    /** @desc focuses the next option */
    @Method()
    async focusNextOption() {
        this.focusOption(this.focusedOption === undefined ? 0 : this.focusedOption + 1)
    }

    /** @desc focuses the previous option */
    @Method()
    async focusPreviousOption() {
        this.focusOption(this.focusedOption === undefined ? 0 : this.focusedOption - 1)
    }

    /** @desc clicks the option at the supplied index */
    @Method()
    async selectOption(index: number | string) {
        if (typeof index === `string`) {
            index = parseInt(index)
        }

        if (!this.optionElements[index]) {
            return
        }

        this.whenOptionClicked.emit(index)

        if (this.whenClicked && typeof this.whenClicked === `function`) {
            this.whenClicked(index)
        }

        this.whenClosed.emit()
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

        let optionstyles = {}
        if(this.optionStyles){
            if (typeof this.optionStyles === `string`) {
                try {
                    optionstyles = JSON.parse(this.optionStyles)
                } catch (error) {}
            }else{
                optionstyles = this.optionStyles
            }
        }

        return (
            <div class="menu-container" ref={(el: HTMLElement) => this.container = el}>
                <nv-tooltip
                    ref={(el: any) => this.tooltip = el}
                    offset={0}
                    paddingAmount={0}
                    isActive={this.isActive}
                    triggerOn="never"
                    triggerElement={this._anchor}
                    position={this._position}
                    showBoxShadow={true}
                    width={this.width}
                >
                    {
                        this._options.map((option: string, index: number) => option.trim() !== `` ?
                            <div
                                class="menu-option"
                                ref={(el: HTMLElement) => this.optionElements[index] = el}
                                style={optionstyles}
                                onMouseDown={this.optionClick}
                                innerHTML={option}
                                onMouseEnter={() => this.mouseEnter(this.optionElements[index])}
                                onMouseLeave={() => this.mouseLeave(this.optionElements[index])}
                            ></div> : <div class="menu-option-divider"></div>
                        )
                    }
                </nv-tooltip>
            </div>
        );
    }
}
