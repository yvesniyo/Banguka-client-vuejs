
import AdminHome from '../../../views/dashboard/admin/home';
import customers_view from '../../../views/dashboard/admin/customers/view';
import examinations_view from '../../../views/dashboard/admin/examninations/view';
import examinations_create from '../../../views/dashboard/admin/examninations/create';
import commissions_view from '../../../views/dashboard/admin/commissions/view';

import customers_create from '../../../views/dashboard/admin/customers/create';
import questions from './questions';

import students_view from '../../../views/dashboard/admin/students/view';
import students_create from '../../../views/dashboard/admin/students/create';
import store from "../../../store";
import axios from 'axios'
import NProgress from 'nprogress';

export default {
    children:[
        {
          path:'',
          component: AdminHome,
          name: 'dashboard.admin'
        },
        {
          path:'questions/',
          component: {
            render (c) { return c('router-view') }
          },
          children: questions.children
        },
        {
          path:'customers/',
          component: {
            render (c) { return c('router-view') }
          },
          children:[
            {
              path:'',
              component: customers_view,
              name: 'customers.view'
            },
            {
              path:'create/',
              component: customers_create,
              name: 'customers.create'
            },
          ]
        },
        {
          path:'commissions/',
          component: {
            render (c) { return c('router-view') }
          },
          children:[
            {
              path:'',
              component: commissions_view,
              name: 'commissions.view'
            },
            {
              path:'create/',
              component: commissions_view,
              name: 'commissions.create'
            },
          ]
        },
        {
          path:'students/',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path:'',
              name: 'students_view',
              component: students_view,
              beforeEnter: (to, from, next)=>{
                NProgress.start()
                if(store.state.serverStudents.length > 0){
                  next(true)
                  NProgress.done();
                }else{
                  axios({
                      url: `http://localhost:8000/api/students/list`,
                      method: 'GET',
                      data : null,
                      headers:{
                          Authorization : store.state.token,
                      }
                  }).then((result)=>{
                      store.state.serverStudents = result.data.students;
                      console.log(result.data.students)
                      next();
                  }).catch(error=>{
                      console.log(error);
                      next(false);
                  })
                }
                
                
              }
            },
            {
              path: 'create/',
              name:'student_create',
              component: students_create,
            }
          ]
        },
        {
          path:'examinations/',
          component: {
            render (c) { return c('router-view') }
          },
          children:[
            {
              path:'',
              component: examinations_view,
              name: 'examaninations.view',
              beforeEnter: (to, from, next)=>{
                NProgress.start()
                if(store.state.serverExams.length > 0){
                  next(true)
                  NProgress.done();
                }else{
                  axios({
                      url: `http://localhost:8000/api/exams/list`,
                      method: 'GET',
                      data : null,
                      headers:{
                          Authorization : store.state.token,
                      }
                  }).then((result)=>{
                      store.state.serverExams = result.data.exam;
                      next();
                  }).catch(error=>{
                      console.log(error);
                      next(false);
                  })
                }
                
                
              }
            },
            {
              path:'create/',
              component: examinations_create,
              name: 'examinations.create',
              beforeEnter: (to, from, next)=>{
                NProgress.start()
                if(store.state.serverQuestions.length > 0){
                  next(true)
                  NProgress.done();
                }else{
                  axios({
                      url: `http://localhost:8000/api/questions/`,
                      method: 'GET',
                      data : null,
                      headers:{
                          Authorization : store.state.token,
                      }
                  }).then((result)=>{
                    console.log("done downloading")
                      store.state.serverQuestions = result.data ;
                      next();
                  }).catch(error=>{
                      console.log(error);
                      next(false);
                  })
                }
                
                
              }
            },
          ]
        }
    ]
}