import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress';

import Login from './views/login.vue'

//Dashboard Admin Components


import dashboard_admin from './routes/dashboard/admin/index';

//End Dashboard Admin Components


import AppHeader from "./views/portifolio/includes/header";
import AppFooter from "./views/portifolio/includes/header";
import Landing from "./views/portifolio/includes/header";
import pageNotFound from './views/portifolio/404.vue';
import store from './store'
import Auth from './auth';
Vue.use(Router)

const requireAuth = function(to, from, next){
  Auth.isAuthenticated().then(()=>{
    next();
  }).catch(()=>{
    next("/login");
  })  
}
const noAuth = function(to, from, next){
  if(to.path =="/login"){
    Auth.isAuthenticated().then(()=>{
      next("/dashboard/admin/");
    }).catch(()=>{
      next();
    })  
  }else{
    next();
  }
}


export default new Router({
  linkExactActiveClass: "active",
  mode:"history",
  routes: [
    {
      path: '/',
      component: {
        render (c) { return c('router-view') }
      },
      beforeEnter : requireAuth,
      children: [
        {
          path:'',
          components: {
            header: AppHeader,
            default: Landing,
            footer: AppFooter
          },
        },
        {
          path:'about/',
          component:  Login,
          name: 'about'
        },
        {
          path:'contact/',
          component:  Login,
          name: 'contact'
        },
      ]
    },
    {
      path: '/dashboard/admin',
      component: {
        render (c) { return c('router-view') }
      },
      beforeEnter:requireAuth,
      children: dashboard_admin.children,

    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      beforeEnter: noAuth,
    },
    {
      path: '/logout',
      name: 'logout',
      component: Login,
      beforeEnter:(to, from, next)=>{
        store.state.token = null;
        localStorage.removeItem("token");
        next("/login");
      }
    },
    {
      path:"*",
      name: '404',
      component: pageNotFound
    }
  ]
})
