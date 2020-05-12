import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import packages from '../package'

Vue.use(VueRouter)
  const routes: Array<RouteConfig> = [];
  for (const key in Object(packages)) {
    routes.push.apply(routes, Object(packages)[key].routes);
  }

const router = new VueRouter({
  routes
})

export default router
