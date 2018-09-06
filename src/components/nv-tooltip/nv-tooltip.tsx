// fix bottom position if too big

import { Component, Element, Prop, Event, EventEmitter } from '@stencil/core'

/** @desc renders a tooltip */

@Component({
    tag: 'nv-tooltip',
    styleUrl: 'nv-tooltip.scss',
    shadow: true
})
export class NvTootltip {
    /** @desc parent element */
    parent: HTMLElement

    /** @desc container element */
    container: HTMLElement

    /** @desc content element */
    content: HTMLElement

    /** @desc content inner element */
    contentInner: HTMLElement

    /** @desc content inner inner element */
    contentInnerInner: HTMLElement

    /** @desc timer used to check dimensions */
    checkDimensionsTimer: any

    /** @desc timer used when opening the tooltip */
    openTimer: any

    /** @desc proxy reference to the trigger element */
    _triggerElement: HTMLElement

    /** @desc proxy reference to the active property */
    _active: boolean = false

    /** @desc available position keywords */
    positions = [
        'bottom',
        'top',
        'left',
        'right'
    ]

    /** @desc component element */
    @Element() element: HTMLElement

    /** @desc padding to give the tooltip */
    @Prop() padding: number = 8

    /** @desc position of the tooltip */
    @Prop() position: string = ``

    /** @desc whether or not the tooltip is shown */
    @Prop({ mutable: true }) active: boolean = false

    /** @desc what event to trigger the tooltip on, when 'never' the tooltip relies on the active property to be updated */
    @Prop() triggerOn: string = `mouseenter`

    /** @desc element to anchor the tooltip as well as what to set the tigger events to */
    @Prop() triggerElement: HTMLElement | string = ''

    /** @desc duration to hide the tooltip after */
    @Prop() hideAfter: number = 0

    /** @desc duration to delay showing the tooltip */
    @Prop() delay: number = 0

    /** @desc whether or not to show a css box-shadow */
    @Prop() boxShadow: boolean = false

    /** @desc event when tooltip opens */
    @Event() whenOpened: EventEmitter

    /** @desc event when tooltip closes */
    @Event() whenClosed: EventEmitter

    /** @desc sets the dimensions of the tooltip */
    setDimensions() {
        const parentBox = this._triggerElement.getBoundingClientRect()

        this.container.style.width = `${this._triggerElement.offsetWidth}px`
        this.container.style.height = `${this._triggerElement.offsetHeight}px`
        this.container.style.top = `${parentBox.top}px`
        this.container.style.left = `${parentBox.left}px`

        if (window.innerWidth <= 768) {
            this.container.setAttribute('device', `mobile`)
        } else {
            this.container.setAttribute('device', `browser`)
        }
    }

    /** @desc sets the position of the tooltip */
    setPositions() {
        let position = `bottom`

        if (this.position && this.positions.indexOf(this.position) > -1) {
            position = this.position
        }

        this.container.setAttribute(`position`, position)

        const offset = 10
        const containerBox = this.container.getBoundingClientRect()
        let width = this.contentInner.offsetWidth
        let height = this.contentInner.offsetHeight
        let x = 0
        let y = 0

        if (width > window.innerWidth) {
            this.contentInner.style.width = `${window.innerWidth - (offset * 2)}px`
            width = this.contentInner.offsetWidth
        }

        if (height > window.innerHeight) {
            this.contentInner.style.height = `${(window.innerHeight - (offset * 2)) * 0.8}px`
            height = this.contentInner.offsetHeight
        }

        const setY = () => {
            if (containerBox.top > window.innerHeight - containerBox.bottom) {
                return -((height / 2) + (containerBox.height / 2) + offset)
            } else {
                return (height / 2) + (containerBox.height / 2) + offset
            }
        }

        const adjustTopBottom = () => {
            const needsTopAdjustment = containerBox.top - (height / 2) < 0
            const needsBottomAdjustment = containerBox.bottom + (height / 2) > window.innerHeight
            const amountToShiftDown = ((height / 2) - containerBox.top) + offset
            const amountToShiftUp = window.innerHeight - ((height / 2) + containerBox.bottom + offset)

            if (needsTopAdjustment) {
                y = amountToShiftDown
            } else if (needsBottomAdjustment) {
                y = amountToShiftUp
            }
        }

        switch (position) {
            case `left`:
                if (containerBox.left - (width + offset) < 0) {
                    if (containerBox.right + (width + offset) < window.innerWidth) {
                        x = width + (offset * 2) + containerBox.width

                        adjustTopBottom()
                    } else {
                        y = setY()
                        x = (width + offset) + ((containerBox.width / 2) - (width / 2))
                    }
                } else {
                    adjustTopBottom()
                }

                break

            case `right`:
                if (containerBox.right + (width + offset) > window.innerWidth) {
                    if (containerBox.left - (width + offset) > 0) {
                        x = -(width + (offset * 2) + containerBox.width)

                        adjustTopBottom()
                    } else {
                        y = setY()
                        x = -((width + offset) + ((containerBox.width / 2) - (width / 2)))
                    }
                } else {
                    adjustTopBottom()
                }

                break

            case `top`:
                if (containerBox.top - height - offset + window.pageYOffset < 0) {
                    y = height + (offset * 2) + containerBox.height
                }

                break

            default:
                y = height + offset

                if (containerBox.bottom + height + offset > window.innerHeight) {

                    if ((containerBox.top + window.pageYOffset) - (height - (offset * 2)) > 0) {
                        y = -(containerBox.height + offset)
                    } else {
                        this.contentInner.style.height = `${(window.innerHeight - (offset * 2)) * 0.8}px`
                        height = this.contentInner.offsetHeight

                        if (containerBox.top > window.innerHeight - containerBox.bottom) {
                            this.contentInner.style.height = `${containerBox.top - (offset * 2)}px`
                            height = this.contentInner.offsetHeight

                            y = -((height / 2) + (containerBox.height / 2) + offset)
                        } else {
                            this.contentInner.style.height = `${(window.innerHeight - containerBox.bottom) - (offset * 2)}px`
                            height = this.contentInner.offsetHeight
                            y = (height / 2) + (containerBox.height / 2) + offset
                        }
                    }
                }
                break
        }

        this.content.style.transform = `scale(1,1) translate(${x}px, ${y}px)`

        const box = this.content.getBoundingClientRect()

        if (box.left < 0) {
            x = -(box.left) + offset
            this.content.style.transform = `scale(1,1) translate(${x}px, ${y}px)`
        } else if (box.right > window.innerWidth) {
            x = window.innerWidth - box.right - offset
            this.content.style.transform = `scale(1,1) translate(${x}px, ${y}px)`
        }
    }

    /** @desc timer function that checks the dimensions/positions of the tooltip when active */
    checkDimensions() {
        clearTimeout(this.checkDimensionsTimer)

        if (!this.active) {
            return
        }

        this.setDimensions()

        setTimeout(() => {
            this.setPositions()
        }, 1)

        this.checkDimensionsTimer = setTimeout(() => {
            this.checkDimensions()
        }, 16)
    }

    /** @desc opens the tooltip */
    open() {
        clearTimeout(this.openTimer)

        this.container.style.removeProperty(`transform-origin`)
        this.contentInner.style.width = this.contentInner.style.height = `auto`

        this.openTimer = setTimeout(() => {
            if (this.triggerOn === `never`) {
                if (!this.active) {
                    return
                }
            } else {
                this.active = true
            }

            if (this.active) {
                this.container.classList.add(`open`)
                this.checkDimensions()
                this.whenOpened.emit()

                if (this.hideAfter) {
                    setTimeout(() => {
                        this.close()
                    }, this.hideAfter)
                }
            }
        }, this.delay || 0)
    }

    /** @desc closes the tooltip */
    close() {

        if (this.triggerOn === `never`) {
            if (this.active) {
                this.whenClosed.emit()
                return
            }
        } else {
            this.whenClosed.emit()
            this.active = false
        }

        clearTimeout(this.openTimer)

        if (this.container.classList.contains(`open`)) {
            this.container.classList.remove(`open`)
            this.content.removeAttribute(`style`)

            setTimeout(() => {
                this.container.style.removeProperty(`transform-origin`)
            }, 300)
        }
    }

    /** @desc closes the tooltip if scrolled out of view */
    handleIntersect(entries: any) {
        if (this.active && !entries[0].isIntersecting) {
            this.close()
        }
    }

    /** @desc triggers open */
    doOpen() {
        if (this.active) {
            this.close()
        } else {
            this.open()
        }
    }

    /** @desc triggers close */
    doClose() {
        if (!this.active) {
            this.close()
        }
    }

    /** @desc handles click outside of tooltip */
    doBodyClick(e: Event) {
        const wasOnParent = e.target === this._triggerElement || this._triggerElement.contains((e.target as Node));
        const wasOnSelf = e.target === this.container || e.target === this.element || this.container.contains((e.target as Node)) || this.element.contains((e.target as Node));

        if (this.active && !wasOnParent && !wasOnSelf) {
            this.close()
        }
    }

    /** @desc sets tooltip events */
    setEvents() {
        if (this.triggerOn !== `never`) {
            this._triggerElement.addEventListener(this.triggerOn || `mouseenter`, this.doOpen)

            if (!this.triggerOn || this.triggerOn === `mouseenter`) {
                this._triggerElement.addEventListener(`mouseleave`, this.doClose)
            }
        }
    }

    /** @desc removes tooltip events */
    removeEvents() {
        if (this._triggerElement) {
            this._triggerElement.removeEventListener(this.triggerOn || `mouseenter`, this.doOpen)

            if (!this.triggerOn || this.triggerOn === `mouseenter`) {
                this._triggerElement.removeEventListener(`mouseleave`, this.doClose)
            }
        }
    }

    /** @desc updates the tooltip */
    update() {
        this.removeEvents()

        this.parent = this.element.parentElement
        this._triggerElement = (this.triggerElement ? typeof this.triggerElement === `string` ? document.querySelector(this.triggerElement) : this.triggerElement : null) || this.parent

        this.setEvents()

        if (this.boxShadow) {
            this.content.classList.add(`boxShadow`)
        } else {
            this.content.classList.remove(`boxShadow`)
        }

        if (this.active === this._active) {
            return
        }

        this._active = this.active

        if (this.active) {
            this.open()
        } else {
            this.close()
        }
    }

    /** @desc lifecycle hook for when component is updated */
    componentDidUpdate() {
        this.update()
    }

    /** @desc lifecycle hook for when component is ready */
    componentDidLoad() {
        this.doBodyClick = this.doBodyClick.bind(this)
        this.doClose = this.doClose.bind(this)
        this.doOpen = this.doOpen.bind(this)
        this.handleIntersect = this.handleIntersect.bind(this)
        this.setPositions = this.setPositions.bind(this)

        const observer = new IntersectionObserver(this.handleIntersect, {
            root: null,
            rootMargin: "0px",
            threshold: [0, 0.01, 0.99, 1]
        })

        observer.observe(this.contentInnerInner)

        this.update()

        window.document.body.addEventListener(`click`, this.doBodyClick)
    }

    /** @desc lifecycle hook for when component is rendered */
    render() {
        return (
            <div class="tooltip-container" ref={(el: HTMLElement) => this.container = el}>
                <div class="tooltip-content" ref={(el: HTMLElement) => this.content = el}>
                    <div class="tooltip-content-inner" style={{ padding: `0px ${this.padding}px` }} ref={(el: HTMLElement) => this.contentInner = el}>
                        <div class="tooltip-content-inner-inner" ref={(el: HTMLElement) => this.contentInnerInner = el}>
                            <slot></slot>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
