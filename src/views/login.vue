<template>
    <div>
        <section class="section section-shaped section-lg my-0">
            
            <div class="shape shape-style-1 bg-gradient-default">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="container pt-lg-md">
                <div class="row justify-content-center">
                    <div class="col-lg-5">
                        <card type="secondary" shadow
                            header-classes="bg-white pb-5"
                            body-classes="px-lg-5 py-lg-5"
                            class="border-0">
                            <template>
                                <div class="text-center text-muted mb-4">
                                    <small>Or sign in with credentials</small>
                                </div>
                                <form role="form" :submit="submit">
                                    <base-input 
                                                :valid="emailValid"
                                                class="mb-3"
                                                placeholder="Email"
                                                v-model="email"
                                                addon-left-icon="ni ni-email-83">
                                    </base-input>
                                    <base-input 
                                                :valid="passwordValid"
                                                type="password"
                                                placeholder="Password"
                                                v-model="password"
                                                addon-left-icon="ni ni-lock-circle-open">
                                    </base-input>
                                    <base-checkbox>
                                        Remember me
                                    </base-checkbox>
                                    <div class="text-center">
                                        <base-button type="primary"
                                            
                                        
                                          @click="submit" class="my-4">Sign In</base-button>
                                    </div>
                                    <div v-if="error=='incorrect'">
                                        <base-alert type="warning" dismissible class="text-center">
                                            <strong>Warning!</strong> Email/Password are incorrect!
                                        </base-alert>
                                    </div>
                                </form>
                            </template>
                        </card>
                        <div class="row mt-3">
                            <div class="col-6">
                                <a href="#" class="text-light">
                                    <small>Forgot password?</small>
                                </a>
                            </div>
                            <div class="col-6 text-right">
                                <a href="#" class="text-light">
                                    <small>Create new account</small>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
/* eslint-disable */
import axios from 'axios';
export default {
  components:{
  },
  name:'login',
  data(){
      return {
          email : '',
          password : '',
          error: '',
          emailValid: null,
          passwordValid: null,
      }
  },
  created(){
    
  },
  methods:{
      submit : function(ele){
          this.error = "";
          if(this.email.length < 1){
              this.emailValid = false;
          }else{
              this.emailValid = true;
          }

          if(this.password.length < 1){
              this.passwordValid = false;
          }else{
              this.passwordValid = true;
          }
          let credentials = {
              email : this.email,
              password : this.password
          }
          if(!this.passwordValid || ! this.emailValid){
              return;
          }
          let loader = this.$loading.show({
                // Optional parameters
                container: null,
                canCancel: false,
                loader: "dots",
                
            });
          axios({
                method:'POST',
                data: credentials,
                url: this.$store.state.serverAddress +"/login",
            }).then(result=>{
                let data = result.data;
                if(data.status == "ok"){
                    let token = data.token;
                    localStorage.setItem("token", token);
                    this.$store.state.token = token;
                    this.$router.push("/dashboard/admin");
                }else{
                    this.error = "incorrect";
                }
                loader.hide()
            }).catch(error=>{
                loader.hide()
                console.warn(error);
            })
      }
  }
}
</script>
<style  scoped>
    .bg-login-image{
        background:transparent;
    }
    
</style>
