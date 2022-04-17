import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Common from '@/views/Common.vue'
import Form from '@/views/Form.vue'
import Tables from '@/views/Tables.vue'
import Animation from '@/views/Animation.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/common',
		name: 'Commaon',
		component: Common
	},
	{
		path: '/form',
		name: 'Form',
		component: Form
	},
	{
		path: '/tables',
		name: 'Tables',
		component: Tables
	},
	{
		path: '/animation',
		name: 'Animation',
		component: Animation
	},
]

const router = createRouter({
	history: createWebHistory('/componentlist'),
	routes
})

export default router
