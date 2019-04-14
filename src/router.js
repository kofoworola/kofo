import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Work from './views/Works'
import About from './views/About'
import PortfolioItem from "./views/PortfolioItem";

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/works',
      name: 'works',
      component: Work
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/work/:slug',
      name: 'work',
      component: PortfolioItem,
    }
  ]
})
