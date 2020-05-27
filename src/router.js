import VueRouter from 'vue-router'
import About from "./About"
import Brewer from "./Brewer"

const routes = [
  { path: '/', component: About},
  { path: '/brew-it', component: Brewer}
]

const router = new VueRouter({
  routes,
  linkActiveClass: "is-active"
})

export default router
