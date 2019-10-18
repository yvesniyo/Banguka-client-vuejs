<template>
  <div id="app">
      <vue-snotify></vue-snotify>
      <router-view/>
  </div>
</template>
<script>
/* eslint-disable */
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/css/sb-admin-2.min.css';
import './assets/vendor/fontawesome-free/css/all.min.css';
import axios from 'axios';
import "vue-snotify/styles/dark.css";
export default {
  name:'app',
  components:{
  },
  methods:{

  },
  mounted(){
   
  }
}
</script>

<style>
    
    body{
        /* background-image: url("./assets/img/undraw_posting_photo.svg") !important;
        background-position: bottom right; */
        background-repeat: no-repeat;
    }
    .dropdown-item{
      padding: 0.25rem 0.5rem;
    }
    .alertss ul.dropdown-menu {
        /* top: 65px !important; */
        left: -210px !important;
        padding-top:0 !important;
        padding-bottom:0 !important;
        top: 90px !important;
    }
    .dropdown-menu{
      top: 90px !important;
    }
</style>
