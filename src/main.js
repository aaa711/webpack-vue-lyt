import Vue from 'vue'
import App from './pages/App.vue'
import router from './router'
new Vue({
  el: '#app',
  router,
  ...App
})

export {app,router}
