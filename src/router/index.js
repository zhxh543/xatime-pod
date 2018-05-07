import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import userContent from '@/components/content/user'
import reportContent from '@/components/content/report'
import reportIndex from '@/components/report/index'
import reportData from '@/components/report/dataSet'
import reportControl from '@/components/report/control'
import reportEdit from '@/components/report/report'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'linkActive',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      redirect: '/userContent'
    }, {
      path: '/userContent',
      name: 'userContent',
      component: userContent
    }, {
      path: '/reportContent',
      component: reportContent,
      children: [{
        path: '/',
        name: 'index',
        redirect: '/reportContent/index',
        component: reportIndex
      }, {
        path: '/reportContent/index',
        name: 'view',
        component: reportIndex
      }, {
        path: '/reportContent/dataSet',
        name: 'data',
        component: reportData
      }, {
        path: '/reportContent/control',
        name: 'control',
        component: reportControl
      }, {
        path: '/reportContent/report',
        name: 'edit',
        component: reportEdit
      }]
    }
  ]
})
