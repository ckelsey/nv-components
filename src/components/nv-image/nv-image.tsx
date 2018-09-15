import { Component, Prop, Event, EventEmitter } from '@stencil/core'

/** @desc gracefully renders an image with an optional placeholder */

@Component({
    tag: 'nv-image',
    styleUrl: 'nv-image.scss',
    shadow: true
})
export class NvImage {
    /** @desc image container element */
    imageContainer: HTMLElement

    /** @desc image element */
    img: HTMLImageElement

    /** @desc proxy for source url */
    _src: string

    /** @desc image width */
    width: number

    /** @desc image height */
    height: number

    /** @desc timer for getting image dimensions */
    timer: any

    /** @desc called when image is loaded */
    @Event() whenload: EventEmitter

    /** @desc called when image meta is loaded */
    @Event() whenmeta: EventEmitter

    /** @desc called when an error occurs loading the image */
    @Event() whenerror: EventEmitter

    /** @desc called when an error occurs loading the image */
    @Prop() whenError: Function | undefined

    /** @desc called when an error occurs loading the image */
    @Prop() whenMeta: Function | undefined

    /** @desc called when image is loaded */
    @Prop() whenLoad: Function | undefined

    /** @desc whether or not the image should act like css background size cover */
    @Prop() cover: boolean = false

    /** @desc url to the image */
    @Prop() url: string = ''

    /** @desc url to the placeholder image */
    @Prop() placeholder: string = ''

    /** @desc handles image error */
    imageError() {
        cancelAnimationFrame(this.timer)
        this.imageContainer.removeChild(this.img)
        this.img = null
        this.whenerror.emit({ element: this })

        if(this.whenError && typeof this.whenError === `function`){
            this.whenError({ element: this })
        }
    }

    /** @desc handles image loaded */
    imageLoaded() {
        if (this.imageContainer) {
            this.imageContainer.classList.add(`loaded`)
        }

        this.whenload.emit({ element: this })

        if(this.whenLoad && typeof this.whenLoad === `function`){
            this.whenLoad({ element: this })
        }
    }

    /** @desc checks to see if image dimensions are available and if so set them */
    setDimensions() {
        return new Promise((resolve) => {
            const getDimensions = () => {
                cancelAnimationFrame(this.timer)

                if (!!this.img.width && !!this.img.height) {
                    const aspect = this.img.height / this.img.width

                    this.imageContainer.style.padding = `${aspect * 100}% 0px 0px`

                    if (this.cover) {
                        if (this.imageContainer.offsetHeight / this.imageContainer.offsetWidth > aspect) {
                            this.img.classList.add('scaleHeight')
                        } else {
                            this.img.classList.remove('scaleHeight')
                        }
                    }

                    this.whenmeta.emit({ element: this })

                    if(this.whenMeta && typeof this.whenMeta === `function`){
                        this.whenMeta({ element: this })
                    }

                    return resolve({
                        width: this.img.width,
                        height: this.img.height
                    })
                } else {
                    this.timer = requestAnimationFrame(() => {
                        getDimensions()
                    })
                }
            }

            getDimensions()
        })
    }

    /** @desc loads the image */
    loadImage() {
        if (!this.url || this.url === '') {
            return
        }

        this.imageLoaded = this.imageLoaded.bind(this)
        this.imageError = this.imageError.bind(this)

        if (!this.img) {
            this.img = new Image()
            this.imageContainer.appendChild(this.img)
        }

        this.img.onload = this.imageLoaded
        this.img.onerror = this.imageError

        if (this.url && this.url !== this._src) {
            this.img.src = this._src = this.url

            this.setDimensions()
        }
    }

    /** @desc sets the cover class */
    setFit() {
        if (this.cover) {
            this.imageContainer.classList.add(`cover`)
        } else {
            this.imageContainer.classList.remove(`cover`)
        }
    }

    /** @desc lifecycle hook for when component is updated */
    componentDidUpdate() {
        if (this.placeholder && this.placeholder !== '') {
            this.imageContainer.style.backgroundImage = `url('${this.placeholder}')`
        }

        if (this.url && this.url !== this._src) {
            this.loadImage()
        }

        this.setFit()
    }

    /** @desc lifecycle hook for when component is ready */
    componentDidLoad() {
        if (this.placeholder && this.placeholder !== '') {
            this.imageContainer.style.backgroundImage = `url('${this.placeholder}')`
        }
        this.loadImage()
        this.setFit()
    }

    /** @desc lifecycle hook for when component is rendered */
    render() {
        return (
            <div class="outer"><div id="nv-image" ref={(el: HTMLElement) => this.imageContainer = el}></div></div>
        );
    }

}
