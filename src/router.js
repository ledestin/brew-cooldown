import VueRouter from 'vue-router'
import Home from "./Home"
import Brewer from "./Brewer"

const routes = [
  { path: '/', component: Home},
  { path: '/brew-it', component: Brewer}
]

const router = new VueRouter({
  routes,
  linkActiveClass: "is-active"
})

export default router
