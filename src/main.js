import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSimpleMarkdown from 'vue-simple-markdown'
import './assets/style.css';
import './assets/ggmarkdown.css'

Vue.use(VueSimpleMarkdown)


Vue.config.productionTip = false
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
