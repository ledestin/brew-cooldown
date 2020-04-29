import VueRouter from 'vue-router'
import About from "./About"
import Brewer from "./Brewer"

const routes = [
  { path: '/', component: Brewer },
  { path: '/about', component: About }
]

const router = new VueRouter({
  routes
})

export default router
