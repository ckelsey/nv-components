import { Component, Prop, Element, Event, EventEmitter } from '@stencil/core'

/** @desc renders an array of styled checkbox components */

@Component({
    tag: 'nv-checkbox-array',
    styleUrl: 'nv-checkbox-array.scss',
    shadow: true
})
export class NvCheckboxArray {
    /** @desc last toggle state of this array */
    lastToggleState: boolean = false

    /** @desc an array of objects {values/value, label, disabled} to populate checkboxes with */
    @Prop() values: any[] = []

    /** @desc label for parent checkbox */
    @Prop() label: string = ''

    /** @desc whether or not the array is disabled */
    @Prop() disabled: boolean = false

    /** @desc if part of a checkbox array, whether or not the parent checkbox is disabled */
    @Prop() parentDisabled: boolean = false

    /** @desc function that is called when the checkbox state changes */
    @Prop() whenUpdate: Function = () => { }

    /** @desc the component element */
    @Element() element: HTMLElement

    /** @desc an event called when the checkbox state changes */
    @Event() change: EventEmitter

    /** @desc determines whether or not this array is didabled */
    get isDisabled(): boolean {
        return this.parentDisabled || this.disabled
    }

    /** @desc determines the groups state based on child checkbox states */
    get groupState(): boolean | string {
        const getValues = (arr: any[]) => {
            let _isTrue: any[] = []

            for (let i = 0; i < arr.length; i++) {

                if (arr[i].values) {
                    _isTrue.push(getValues(arr[i].values))
                } else {
                    _isTrue.push(arr[i].value)
                }
            }

            const hasFalse = _isTrue.indexOf(false) > -1
            const hasTrue = _isTrue.indexOf(true) > -1
            const hasMixed = _isTrue.indexOf(`mixed`) > -1

            if (hasMixed) {
                return `mixed`
            }

            return hasTrue && !hasFalse ? true : !hasTrue && hasFalse ? false : `mixed`
        }

        if (!Array.isArray(this.values)) {
            return false
        }

        return getValues(this.values)
    }

    /**
     * @desc sets all the childrens states
     * @param val value to set
     * @param children array of children
     */
    setGroupState(val: boolean, children: Array<any>) {
        return children.map(element => {
            if (element.disabled || element.parentDisabled) {
                return element
            }

            if (element.values) {
                element.values = this.setGroupState(val, element.values)
            } else {
                element.value = val
            }

            return element
        })
    }

    /** @desc updates the parent array */
    updateParent() {
        const state = this.groupState
        const oldValue = this.values
        let newValue

        this.lastToggleState = !this.lastToggleState

        if (state === true) {
            newValue = this.setGroupState(false, this.values)
        } else if (state === `mixed`) {
            newValue = this.setGroupState(this.lastToggleState, this.values)
        } else {
            newValue = this.setGroupState(true, this.values)
        }

        const updateData = { oldValue, newValue, element: this }

        if (this.whenUpdate && typeof this.whenUpdate === `function`) {
            this.whenUpdate(updateData)
        }

        this.change.emit(updateData)
    }

     /**
      * @desc update from a child checkbox
      * @param data data from child
      */
    updateChild(data: any) {
        const el = data.element.element
        const oldValue = this.values
        let newValue = JSON.parse(JSON.stringify(this.values))
        var parent = el.parentNode.parentNode
        var index = Array.prototype.indexOf.call(parent.children, el.parentNode);

        if (newValue[index].values) {
            newValue[index].values = data.newValue
        } else {
            newValue[index].value = data.newValue
        }

        const updateData = { oldValue, newValue, element: this }

        if (this.whenUpdate && typeof this.whenUpdate === `function`) {
            this.whenUpdate(updateData)
        }

        this.change.emit(updateData)
    }

    /** @desc lifecycle hook for when component is ready */
    componentDidLoad() {
        this.lastToggleState = !!this.groupState
    }

    /** @desc lifecycle hook for when component is rendered */
    render() {
        if (!this.values) {
            return (<div></div>)
        }

        return (
            <div class="nv-checkbox-array">
                <div class="nv-checkbox-array-container">
                    <div class="nv-checkbox-array-parent">
                        <nv-checkbox class="nv-checkbox-array-parent-checkbox" label={this.label} value={this.groupState} disabled={this.isDisabled} whenUpdate={this.updateParent.bind(this)}></nv-checkbox>
                    </div>
                    <div class="nv-checkbox-array-children">
                        {this.values.map((checkbox) =>
                            <div>
                                {!checkbox.values ?
                                    <nv-checkbox label={checkbox.label} value={checkbox.value} disabled={this.isDisabled || checkbox.disabled} whenUpdate={this.updateChild.bind(this)}></nv-checkbox>
                                    :
                                    <nv-checkbox-array label={checkbox.label} values={checkbox.values} disabled={this.isDisabled || checkbox.disabled} whenUpdate={this.updateChild.bind(this)}></nv-checkbox-array>
                                }
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}
