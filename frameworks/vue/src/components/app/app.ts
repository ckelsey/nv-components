import Vue from "vue"
import Component from "vue-class-component"
import template from './app.html'

@Component({
    template,
    components: {},
    propsData: {}
})

export default class App extends Vue {
    name = `app-entry`

    checkbox = {
        label: `Test checkbox`,
        value: true,
        disabled: false,
        whenUpdate: (data:any)=>{
            this.checkbox.value = data.detail.newValue.toString()
        }
    }
}