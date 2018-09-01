export default (function () {
    let frameTime = 0
    let now = performance.now()

    const _fps = () => {
        now = performance.now()

        requestAnimationFrame(() => {
            frameTime = 1000 / (performance.now() - now)

            _fps()
        })
    }

    _fps()

    const matrixToArray = (str) => {
        const match = str.match(/(-?[0-9\.]+)/g)

        if (!match) {
            return []
        }

        return match.map(v => parseFloat(v))
    }

    const getTransform = (element: HTMLElement) => {
        const transform = matrixToArray(window.getComputedStyle(element).getPropertyValue(`transform`) || element.style.transform)

        if (!transform || transform.length === 0) {
            return {
                scale: 1,
                rotate: 0,
                translateX: 0,
                translateY: 0
            }
        }

        return {
            scale: Math.sqrt(transform[0] * transform[0] + transform[1] * transform[1]),
            rotate: Math.round(Math.atan2(transform[1], transform[0]) * (180 / Math.PI)),
            translateX: (transform[4] / element.offsetWidth) * 100,
            translateY: (transform[5] / element.offsetHeight) * 100
        }
    }

    const Animations = {
        fps: frameTime,
        size: (element: HTMLElement, amount: number, time?: number, backwards?: boolean, callback?: Function) => {
            time = time || 1000

            // let iterations = frameTime / (time / 1000)
            let iterations = time / 60
            const transforms = getTransform(element)
            const endScale = backwards ? transforms.scale / amount : transforms.scale * amount
            const iterationAmount = (endScale - transforms.scale) / iterations

            iterations = Math.round(iterations)

            const animate = () => {
                if (iterations) {
                    iterations = iterations - 1
                    transforms.scale += iterationAmount
                    const _t = `translateX(${transforms.translateX}) translateY(${transforms.translateY}) scale(${transforms.scale}) rotate(${transforms.rotate})`
                    
                    element.style.transform = _t

                    setTimeout(() => {
                        animate()
                    }, time / 60)
                } else if (callback && typeof callback) {
                    callback()
                }
            }

            animate()
        },

        pulse: (element: HTMLElement, amount: number, time?: number) => {
            time = time || 1000

            // const interval setInterval(() => {
            //     Animations.size(element, amount, time * 0.62, () => {
            //         // Animations.size(element, -amount, time * 0.38)
            //     })
            // }, time)

            Animations.size(element, amount, time * 0.5, false, () => {
                Animations.size(element, amount, time * 0.5, true)
            })
        }
    }

    Object.defineProperty(Animations, 'fps', {
        get: ()=>{
            return frameTime
        }
    })

    return Animations
})();