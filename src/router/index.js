import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import IndexView from '../pages/IndexView.vue'
import Webchat from '../pages/Webchat.vue'
import Friends from '../pages/MyFriends.vue'
import FindNews from '../pages/FindNews.vue'
import Profile from '../pages/Profile.vue'



const router = new Router({
	routes: [
		{ path:'/', component:IndexView},
		{ path:'/lyt/index', component:IndexView},
		{ path: '/lyt/webchat', component: Webchat },
	    { path: '/lyt/friends', component: Friends },
	    { path: '/lyt/finds', component: FindNews },
	    { path: '/lyt/profile', component: Profile }
	]
})

// const app = new Vue({
// 	router
// }).$mount('#app')

export default router