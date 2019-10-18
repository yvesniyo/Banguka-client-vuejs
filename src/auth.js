import store from './store';
import axios from 'axios';


export default {
    isAuthenticated : ()=>{ 
        const tokenStore = !! store.state.token;
        return new Promise((resolve, reject)=>{
            if(tokenStore){
                let token = store.state.token;
                axios({
                method:'GET',
                data: null,
                url: store.state.serverAddress +"/details",
                headers:{
                    Authorization: token
                }
                }).then(result=>{
                    let data = result.data;
                    store.state.activeUser = data;
                    resolve(true);
        
                }).catch(error=>{
                    localStorage.removeItem("token")
                    reject(error)
                })
            }else{
                let token = localStorage.getItem("token") == null ? null :  localStorage.getItem("token");
                axios({
                method:'GET',
                data: null,
                url: store.state.serverAddress +"/details",
                headers:{
                    Authorization: token
                }
                }).then(result=>{
                    let data = result.data;
                    store.state.activeUser = data;
                    resolve(true)
                }).catch(error=>{
                    localStorage.removeItem("token")
                    reject(error)
                })
            }
        });
    }
}