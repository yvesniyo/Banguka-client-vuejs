<template>
    <div>
        <div id="wrapper">
            <sideBarNav>
            </sideBarNav>
            <div id="content-wrapper" class="d-flex flex-column">
                <div id="content">
                    <headerNav>
                    </headerNav>
                    <div class="container-fluid">
                        <div class="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 class="h3 mb-0 text-gray-800">CREATE STUDENT</h1>
                            <router-link :to="{name : 'students_view'}" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-list"></i> Student List</router-link>
                        </div>
                        <!-- Enter Content here -->
                        <div class="row bg-white shadow-lg" style="padding: 13px;position:relative;">
                            <div class="col-lg-12">
                                <form>
                                   <div class="row">
                                       <div class="col-md-6">
                                            <p>Names</p>
                                            <base-input alternative v-model="name" placeholder="Muha jeannn"></base-input>
                                        </div>
                                        <div class="col-md-6">
                                            <p>E-Mail</p>
                                            <base-input alternative v-model="email" placeholder="name@example.com"></base-input>
                                        </div>
                                        <div class="col-md-6">
                                            <p >Teacher Code</p>
                                            <base-input alternative v-model="code" placeholder="" disabled></base-input>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <p >Phone</p>
                                            <base-input alternative v-model="phone" placeholder="Telephone" addon-left-icon="ni ni-zoom-split-in"></base-input>
                                        </div>
                                        <div class="col-md-6">
                                            <p >Whatsapp Number</p>
                                            <base-input alternative v-model="whatsapp" placeholder="Whatsapp" addon-right-icon="ni ni-zoom-split-in"></base-input>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <base-button outline type="default" @click="saveStudent">SAVE STUDENT</base-button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <vue-footer>
                </vue-footer>
            </div>
        </div>
    </div>
</template>

<script>
import headerNav from '../includes/topNav.vue'
import vueFooter from '../includes/vue_footer.vue'
import sideBarNav from '../includes/sidebarNav'
import axios from 'axios'

export default {
    name:'ManageStudents',
    components:{
        headerNav,
        vueFooter,
        sideBarNav
    },
    data(){
        return {
            email:'',
            phone: '',
            whatsapp: '',
            name: '',
            code: this.$store.state.activeUser.code
        }
    },
    methods:{
        saveStudent:function(){
            this.$snotify.async('Please while we examine the student', 'Registering', () => new Promise((resolve, reject) => {
                axios({
                    url: this.$store.state.serverAddress+'/students/store',
                    method: 'POST',
                    data : {
                        email: this.email,
                        name: this.name,
                        whatsapp: this.whatsapp,
                        phone: this.phone
                    },
                    headers: {
                        Authorization: this.$store.state.token,
                        "Content-type": "application/json"
                    }
                }).then(result=>{
                    resolve({
                        title: 'Success',
                        body: 'The Student successfully Registerd',
                        timeout: 2000,
                        config: {
                            closeOnClick: true,
                            timeout: 2000,
                        }
                    });
                }).catch(error=>{
                    reject({
                        title: 'Error!!',
                        body: 'Check Student Details if he/she is not registerd before!',
                        timeout: 2000,
                        config: {
                            closeOnClick: true,
                            timeout: 2000,
                        }
                    });
                })
            })
            )
            axios({
                url: this.$store.state.serverAddress+'/students/store',
                method: 'POST',
                data : {
                    email: this.email,
                    name: this.name,
                    whatsapp: this.whatsapp,
                    phone: this.phone
                },
                headers: {
                    Authorization: this.$store.state.token,
                    "Content-type": "application/json"
                }
            }).then(result=>{
                console.log(result.data)
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>