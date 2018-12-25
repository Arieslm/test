import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import registe from '@/views/registe'
import login from '@/views/login'
import quotation_reference_inquiry from '@/views/quotation_reference_inquiry'
Vue.use(Router)

export default new Router({
 mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },{
      path: '/home',
      name: 'home',
      component: home
    },{
      path: '/login',
      name: 'login',
      component: login
    },{
      path: '/registe',
      name: 'registe',
      component: registe
    },{
      path: '/quotation_reference_inquiry',
      name: 'quotation_reference_inquiry',
      component: quotation_reference_inquiry
    }
  ]
})
