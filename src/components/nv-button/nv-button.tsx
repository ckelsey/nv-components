import { Component, Prop, Method, Event, EventEmitter } from '@stencil/core'

/** 
 * @desc renders a styled button 
 * @yield slot
 */

@Component({
    tag: 'nv-button',
    styleUrl: 'nv-button.scss',
    shadow: true
})
export class NvButton {
    /** @desc the button element */
    button: HTMLElement

    /** @desc The type of button, can be text, primary or undefined */
    @Prop() type: string | undefined = undefined

    /** @desc called when the button comes into focus */
    @Event() whenfocus: EventEmitter

    /** @desc called when the button loses focus */
    @Event() whenblur: EventEmitter

    /** @desc called when the button is clicked */
    @Event() whenclick: EventEmitter

    /** @desc called when the button mousedown is triggered */
    @Event() whenmousedown: EventEmitter

    /** @desc called when the button mouseup is triggered */
    @Event() whenmouseup: EventEmitter

    /** @desc called when the button is hovered */
    @Event() whenmouseenter: EventEmitter

    /** @desc called when the button loses hover */
    @Event() whenmouseleave: EventEmitter

    /** @desc triggers hover */
    @Method() doMouseEnter() {
        if (!this.button) {
            return
        }

        this.button.classList.add('hover')
        this.whenmouseenter.emit({ element: this })
    }

    /** @desc triggers the loss of hover */
    @Method() doMouseLeave() {
        if (!this.button) {
            return
        }

        this.doBlur()
        this.whenmouseleave.emit({ element: this })
    }

    /** @desc triggers click */
    @Method() doClick() {
        if (!this.button) {
            return
        }

        this.button.classList.add('pressed')
        this.whenclick.emit({ element: this })
        this.doBlur()
    }

    /** @desc triggers focus */
    @Method() doFocus() {
        if (!this.button) {
            return
        }

        this.button.classList.add('focus')
        this.whenfocus.emit({ element: this })
    }

    /** @desc triggers the loss of focus */
    @Method() doBlur() {
        if (!this.button) {
            return
        }

        this.button.classList.remove('focus')
        this.button.classList.remove('pressed')
        this.button.classList.remove('hover')
        this.whenblur.emit({ element: this })
    }

    /** @desc triggers mousedown */
    @Method() doMouseDown() {
        if (!this.button) {
            return
        }

        this.button.classList.add('pressed')
        this.whenmousedown.emit({ element: this })
    }

    /** @desc triggers mouseup */
    @Method() doMouseUp() {
        if (!this.button) {
            return
        }

        this.doBlur()
        this.whenmouseup.emit({ element: this })
    }

    /** @desc lifecycle hook for when component is updated */
    componentDidUpdate() {
        this.button.classList.add(this.type || `btn`)
    }

    /** @desc lifecycle hook for when component is ready */
    componentDidLoad() {
        this.button.classList.add(this.type || `btn`)
    }

    /** @desc lifecycle hook for when component is rendered */
    render() {
        return (
            <button
                tabIndex={0}
                onClick={() => this.doClick()}
                onMouseEnter={() => this.doMouseEnter()}
                onMouseLeave={() => this.doMouseLeave()}
                onMouseDown={() => this.doMouseDown()}
                onMouseUp={() => this.doMouseUp()}
                onFocus={() => this.doFocus()}
                onBlur={() => this.doBlur()}
                ref={(el: HTMLElement) => this.button = el}
            ><slot></slot><span class="overlay"></span></button>
        );
    }

}
