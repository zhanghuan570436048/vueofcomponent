import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import tableBase from '@/components/table-base/table'
import Scrool from '@/components/scrool-text/scrool'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/tableBase',
      name: 'table-base',
      component: tableBase
    },
    {
      path: '/scrool',
      name: 'scrool',
      component: Scrool
    },
    {
      path: '/table',
      name: 'table-test',
      component: () => import('../components/table-four/tableTest.vue')
    },
    {
      path: '/form',
      name: 'form-test',
      component: () => import('../components/form-basic/formTest.vue')
    }
  ]
})
