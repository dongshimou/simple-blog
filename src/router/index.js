import Vue from 'vue'
import Router from 'vue-router'
import resource from 'vue-resource'


import Hello from '@/components/Hello'
import Posts from '@/components/Posts'
import Post from '@/components/Post'
import Home from '@/components/Home'

Vue.use(resource)
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path:'/',
      name:'Home',
      component:Home,
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path:'/static/posts',
      name:'Posts',
      component:Posts
    },
    {
      path:'/static/posts/:id',
      name:'Post',
      component:Post
    }
  ]
})
