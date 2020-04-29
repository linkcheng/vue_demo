import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Login from '../views/Login'
import UserList from '../views/user/UserList'
import UserProfile from '../views/user/UserProfile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/user/list',
          component: UserList
        }, {
          path: '/user/profile/:id',
          name: 'UserProfile',
          component: UserProfile
        }
      ]
    }, {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
