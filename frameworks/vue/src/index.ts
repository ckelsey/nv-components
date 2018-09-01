import Vue from 'vue'
import App from './components/app/app'
import { defineCustomElements } from '../nv-components/esm/es5/nvcomponents.define.js'

Vue.config.ignoredElements = [
	'nv-checkbox'
]

new Vue({
	el: '#app',
	components: {
		'app-entry': App
	},
	template: '<app-entry></app-entry>'
})

defineCustomElements(window)