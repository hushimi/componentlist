import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/_root.css'
import router from './router'
import { FontAwesome } from '@/plugins/FontAwesome'
import Vue3StarRatings from 'vue3-star-ratings'

const clickOutside = {
	beforeMount: (el, binding) => {
		el.clickOutsideEvent = event => {
			if (!(el == event.target || el.contains(event.target))) {
				binding.instance.clickOutside()
			}
		}
		document.addEventListener('click', el.clickOutsideEvent)
	},
	unmounted: el => {
		document.removeEventListener('click', el.clickOutsideEvent)
	}
}

createApp(App)
	.use(router)
	.component('fa', FontAwesome)
	.component('vue3-star-ratings', Vue3StarRatings)
	.directive('click-outside', clickOutside)
	.mount('#app')
