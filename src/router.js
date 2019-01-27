import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
    },
		{
			path: '/about',
			name: 'about',
			component: () => import('./views/About.vue')
    },
		{
			path: '/videos',
			name: 'videos',
			component: () => import('./views/Videos.vue')
    },
		{
			path: '/quiz',
			name: 'quiz',
			component: () => import('./views/Quiz.vue')
    },
		{
			path: '/guides',
			name: 'guides',
			component: () => import('./views/Guides.vue')
    }
  ]
})
