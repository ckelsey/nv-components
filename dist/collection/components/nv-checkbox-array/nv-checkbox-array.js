/** @desc renders an array of styled checkbox components */
export class NvCheckboxArray {
    constructor() {
        /** @desc last toggle state of this array */
        this.lastToggleState = false;
        /** @desc an array of objects {values/value, label, disabled} to populate checkboxes with */
        this.values = [];
        /** @desc label for parent checkbox */
        this.label = '';
        /** @desc whether or not the array is disabled */
        this.disabled = false;
        /** @desc if part of a checkbox array, whether or not the parent checkbox is disabled */
        this.parentDisabled = false;
        /** @desc function that is called when the checkbox state changes */
        this.whenUpdate = () => { };
    }
    /** @desc determines whether or not this array is didabled */
    get isDisabled() {
        return this.parentDisabled || this.disabled;
    }
    /** @desc determines the groups state based on child checkbox states */
    get groupState() {
        const getValues = (arr) => {
            let _isTrue = [];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].values) {
                    _isTrue.push(getValues(arr[i].values));
                }
                else {
                    _isTrue.push(arr[i].value);
                }
            }
            const hasFalse = _isTrue.indexOf(false) > -1;
            const hasTrue = _isTrue.indexOf(true) > -1;
            const hasMixed = _isTrue.indexOf(`mixed`) > -1;
            if (hasMixed) {
                return `mixed`;
            }
            return hasTrue && !hasFalse ? true : !hasTrue && hasFalse ? false : `mixed`;
        };
        if (!Array.isArray(this.values)) {
            return false;
        }
        return getValues(this.values);
    }
    /**
     * @desc sets all the childrens states
     * @param val value to set
     * @param children array of children
     */
    setGroupState(val, children) {
        return children.map(element => {
            if (element.disabled || element.parentDisabled) {
                return element;
            }
            if (element.values) {
                element.values = this.setGroupState(val, element.values);
            }
            else {
                element.value = val;
            }
            return element;
        });
    }
    /** @desc updates the parent array */
    updateParent() {
        const state = this.groupState;
        const oldValue = this.values;
        let newValue;
        this.lastToggleState = !this.lastToggleState;
        if (state === true) {
            newValue = this.setGroupState(false, this.values);
        }
        else if (state === `mixed`) {
            newValue = this.setGroupState(this.lastToggleState, this.values);
        }
        else {
            newValue = this.setGroupState(true, this.values);
        }
        const updateData = { oldValue, newValue, element: this };
        if (this.whenUpdate && typeof this.whenUpdate === `function`) {
            this.whenUpdate(updateData);
        }
        this.change.emit(updateData);
    }
    /**
     * @desc update from a child checkbox
     * @param data data from child
     */
    updateChild(data) {
        const el = data.element.element;
        const oldValue = this.values;
        let newValue = JSON.parse(JSON.stringify(this.values));
        var parent = el.parentNode.parentNode;
        var index = Array.prototype.indexOf.call(parent.children, el.parentNode);
        if (newValue[index].values) {
            newValue[index].values = data.newValue;
        }
        else {
            newValue[index].value = data.newValue;
        }
        const updateData = { oldValue, newValue, element: this };
        if (this.whenUpdate && typeof this.whenUpdate === `function`) {
            this.whenUpdate(updateData);
        }
        this.change.emit(updateData);
    }
    /** @desc lifecycle hook for when component is ready */
    componentDidLoad() {
        this.lastToggleState = !!this.groupState;
    }
    /** @desc lifecycle hook for when component is rendered */
    render() {
        if (!this.values) {
            return (h("div", null));
        }
        return (h("div", { class: "nv-checkbox-array" },
            h("div", { class: "nv-checkbox-array-container" },
                h("div", { class: "nv-checkbox-array-parent" },
                    h("nv-checkbox", { class: "nv-checkbox-array-parent-checkbox", label: this.label, value: this.groupState, disabled: this.isDisabled, whenUpdate: this.updateParent.bind(this) })),
                h("div", { class: "nv-checkbox-array-children" }, this.values.map((checkbox) => h("div", null, !checkbox.values ?
                    h("nv-checkbox", { label: checkbox.label, value: checkbox.value, disabled: this.isDisabled || checkbox.disabled, whenUpdate: this.updateChild.bind(this) })
                    :
                        h("nv-checkbox-array", { label: checkbox.label, values: checkbox.values, disabled: this.isDisabled || checkbox.disabled, whenUpdate: this.updateChild.bind(this) })))))));
    }
    static get is() { return "nv-checkbox-array"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "disabled": {
            "type": Boolean,
            "attr": "disabled"
        },
        "element": {
            "elementRef": true
        },
        "label": {
            "type": String,
            "attr": "label"
        },
        "parentDisabled": {
            "type": Boolean,
            "attr": "parent-disabled"
        },
        "values": {
            "type": "Any",
            "attr": "values"
        },
        "whenUpdate": {
            "type": "Any",
            "attr": "when-update"
        }
    }; }
    static get events() { return [{
            "name": "change",
            "method": "change",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:nv-checkbox-array:**/"; }
}
