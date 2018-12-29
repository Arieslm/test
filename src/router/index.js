import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import registe from '@/views/registe'
import login from '@/views/login'
import xunjiabiao from '@/views/xunjiabiao'
import pingtaifankui from '@/views/pingtaifankui'
import faburenwu from '@/views/faburenwu'
import xunjiamobanxuanze from '@/views/xunjiamobanxuanze'
import bijia from '@/views/bijia'
import dingdangai from '@/views/dingdangai'
import jcb_xunjiabiao from '@/views/jcb_xunjiabiao'
import gongyingshang from '@/views/gongyingshang'
import quotation_reference_inquiry from '@/views/quotation_reference_inquiry'
Vue.use(Router)
export default new Router({
 mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      meta: {
          title: '首页'
      }
    },{
      path: '/home',
      name: '首页',
      component: home,
      meta: {
          title: '首页'
      }
    },{
      path: '/login',
      name: '登陆',
      component: login,
      meta: {
          title: '登陆'
      }
    },{
      path: '/registe',
      name: '注册',
      component: registe,
      meta: {
          title: '注册'
      }
    },{
      path: '/xunjiabiao',
      name: '询价表',
      component: xunjiabiao,
      meta: {
          title: '询价表'
      }
    },{
      path: '/pingtaifankui',
      name: '平台反馈专区',
      component: pingtaifankui,
      meta: {
          title: '平台反馈专区'
      }
    },{
      path: '/faburenwu',
      name: '发布任务',
      component: faburenwu,
      meta: {
          title: '发布任务'
      }
    },{
      path: '/xunjiamobanxuanze',
      name: '询价单模板选择',
      component: xunjiamobanxuanze,
      meta: {
          title: '询价单模板选择'
      }
    },{
      path: '/bijia',
      name: '比价',
      component: bijia,
      meta: {
          title: '比价'
      }
    },{
      path: '/dingdangai',
      name: '订单-改',
      component: dingdangai,
      meta: {
          title: '订单-改'
      }
    },{
      path: '/jcb_xunjiabiao',
      name: '降成本-询价表',
      component: jcb_xunjiabiao,
      meta: {
          title: '降成本-询价表'
      }
    },{
      path: '/gongyingshang',
      name: '供应商专区',
      component: gongyingshang,
      meta: {
          title: '供应商专区'
      }
    },{
      path: '/quotation_reference_inquiry',
      name: 'quotation_reference_inquiry',
      component: quotation_reference_inquiry
    }
  ]
})
