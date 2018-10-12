import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Todolist from '@/components/Todolist'
import Sildows from '@/components/Sildows'
import Ffzzj from '@/components/Ffzjzj/Ffzzj'

import GitHome from '@/components/gitcz/GitHome'
import GitList from '@/components/gitcz/GitList'
import GitNuws from '@/components/gitcz/GitNuws'
import Content from '@/components/gitcz/Content'


import Login from '@/components/loginRoute/Login'
import Infinitescrool from '@/components/Infinitescrool/Infinitescrool'
Vue.use(Router)

export default new Router({
  // mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Todolist',
      name: 'Todolist',
      component: Todolist
    },
    {
      path: '/Ffzzj',
      name: 'Ffzzj',
      component: Ffzzj
    },
    {
      path: '/Sildows',
      name: 'Sildows',
      component: Sildows
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Infinitescrool',
      name: 'Infinitescrool',
      component: Infinitescrool
    },
    {
      path:'/GitHome',
      name:'GitHome',
      component:GitHome,
      redirect:'/gitcz/GitList',
      children:[
        {
          path: '/GitList',
          name: 'GitList',
          component: GitList
        },
        {
          path: '/GitNuws',
          name: 'GitNuws',
          component: GitNuws
        },
        {
          path:'/Content/:aid',
          // path:'/Content',
          name:'Content',
          component:Content
        },
      ]
    }

  ]
})
