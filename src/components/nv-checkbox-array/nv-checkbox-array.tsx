import { Component, Prop, Element, Event, EventEmitter } from '@stencil/core'

@Component({
    tag: 'nv-checkbox-array',
    styleUrl: 'nv-checkbox-array.scss',
    shadow: true
})
export class NvCheckboxArray {
    lastToggleState: boolean = false

    @Prop() values: any[]
    @Prop() label: string
    @Prop() disabled: boolean
    @Prop() parentDisabled: boolean
    @Prop() whenUpdate: Function

    @Element() element: HTMLElement

    @Event() change: EventEmitter

    get isDisabled() {
        return this.parentDisabled || this.disabled
    }

    get groupState() {
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

    setGroupState(val: boolean, arr: any[]) {
        return arr.map(element => {
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

    componentDidLoad(){
        this.lastToggleState = !!this.groupState
    }

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
