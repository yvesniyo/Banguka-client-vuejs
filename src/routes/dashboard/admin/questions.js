import questions_create from '../../../views/dashboard/admin/questions/create';
import questions_view from '../../../views/dashboard/admin/questions/view';
import store from "../../../store";
import axios from 'axios'
import NProgress from 'nprogress';



export default {
    children: [
        {
          path:'',
          component: questions_view,
          name: 'questions.view',
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
        {
          path:'create/',
          component: questions_create,
          name: 'questions.create'
        },
    ]
}