import Vue from 'vue'
import VueRouter from 'vue-router'
import "./styles.scss"
import "bulma-helpers/css/bulma-helpers.min.css"
import router from './router'
import App from './App.vue'

Vue.use(VueRouter)

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
