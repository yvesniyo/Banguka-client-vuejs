
import axios from 'axios'
export default{
    //commit("SET_COINS",coins);      
    //setTotalQuestionsRows ({commit}){
    setTotalQuestionsRows (){
        //this.state.coins = value;
        axios({
            method:'GET',
            data: null,
            url: this.state.serverAddress +"/questions/max",
            headers:{
            Authorization: this.state.token
            }
        }).then(result=>{
            this.state.totalQuestionsRow = parseInt(result.data)
        }).catch(()=>{
            //console.warn(error);
        })
    }
}