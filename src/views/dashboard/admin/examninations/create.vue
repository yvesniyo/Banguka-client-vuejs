<template>
    <div>
          <!-- Page Wrapper -->
        <div id="wrapper">
            <!-- Sidebar -->
            <sideBarNav>
            </sideBarNav>
            <!-- End of Sidebar -->
            <!-- Content Wrapper -->
            <div id="content-wrapper" class="d-flex flex-column" style="position:relative">
                <!-- Main Content -->
                <div style="position:fixed;bottom:0px;height:80px;width:150px;background:#f55242;z-index:99999;text-align:center;padding-top:10px;">
                   <p style="color:white;font-size:14px;text-align:center;margin:auto 2px;">{{checkedQuestions.length}} Question In exam</p>
                   <base-button type="default" size="sm" @click="modals.modal0 = true">
                        VIEW OR SUBMIT
                    </base-button>
                    <modal :show.sync="modals.modal0" >
                        <template slot="header">
                            <h5 class="modal-title" id="exampleModalLabel">Exam Questions</h5>
                        </template>
                        <div style="max-height: 350px;overflow-y:scroll;">
                            <base-alert type="warning" v-if="checkedQuestions.length <= 10">
                                <strong>Warning!</strong> There are no more than 10 Questions in your Examination!!
                            </base-alert>
                            <ol >
                                <li v-for="checkedQuestion in checkedQuestions" v-bind:key="checkedQuestion">{{serverQuestions[checkedQuestion-1].title}}</li>
                            </ol>
                        </div>
                        <template slot="footer">
                            <base-button type="secondary" @click="modals.modal0 = false">Close</base-button>

                            <base-button type="default" v-if="checkedQuestions.length > 10" @click="submitTheExam">Submit this exam</base-button>
                            <base-button type="default" v-if="checkedQuestions.length <= 10" disabled style="cursor: not-allowed;">Submit this exam</base-button>
                        
                        </template>
                    </modal>
                </div>

                <div id="content">
                    <!-- Topbar -->
                    <headerNav>
                    </headerNav>
                    <!-- End of Topbar -->
                    <!-- Begin Page Content -->
                    <div class="container-fluid">
                        <!-- Page Heading -->
                        <div class="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 class="h3 mb-0 text-gray-800">Create Exams</h1>
                            <router-link to="/dashboard/admin/examinations" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm" ><i class="fas fa-list"></i> Exams List</router-link>
                        </div>  
                        
                        <div class="row bg-white shadow-lg" style="padding: 13px;position:relative;">
                            <div class="col-md-12" style="margin-bottom: -17px;">
                                <table class="table table-striped table-dark" style="width:100%;">
                                    <thead>
                                        <tr>
                                            <th style="width:110px !important;">Options</th>
                                            <th scope="col">#</th>
                                            <th scope="col">Question Title</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                            <div class="col-md-12" style="height:400px;overflow-y:scroll;">
                                <table class="table table-striped"  style="max-height:500px;overflow-y:scroll;width:100%;">
                                    <tbody>
                                        <tr v-for="serverQuestion in serverQuestions" v-bind:key="serverQuestion.id">
                                            
                                            <td style="width:110px !important;">
                                                <b-form-checkbox :value="serverQuestion.id" v-model="checkedQuestions">Add</b-form-checkbox>
                                                <!-- <input type="checkbox" :value="serverQuestion.id" v-model="checkedQuestions" name="name" style="display:inline"/>
                                                <a href="#" class="btn btn-link btn-sm" style="margin-left:0px;"> <i class="fa fa-plus"></i> Add</a> -->
                                            </td>
                                            <th scope="row">{{serverQuestion.id}}</th>
                                            <td>{{serverQuestion.title}}</td>
                                        </tr>
                                        
                                    </tbody>
                                </table>
                                
                            </div>
                            <div class="col-md-12 my-4">
                                    
                                    <!-- <div class="col-md-3" style="display:inline;">
                                        <input type="checkbox" /> Check all
                                    </div> -->
                                    <!-- <div class="col-md-3" style="display:inline;">
                                        <button class="btn btn-default btn-sm" @click="addQuestionsToExam">Add all checked</button>
                                    </div> -->
                            </div>
                        </div>                 
                    </div>
                    <!-- /.container-fluid -->
                    
                </div>
                <!-- End of Main Content -->
                <!-- Footer -->
                <vue-footer>
                </vue-footer>
                <!-- End of Footer -->
            </div>
            <!-- End of Content Wrapper -->
        </div>
        <!-- End of Page Wrapper -->
        <!-- Scroll to Top Button-->
        <a class="scroll-to-top rounded" href="#page-top">
            <i class="fas fa-angle-up"></i>
        </a>
        
    </div>
</template>
<script>
import headerNav from '../includes/topNav.vue'
import vueFooter from '../includes/vue_footer.vue'
import sideBarNav from '../includes/sidebarNav'
import modal from '../../../../components/Modal'
import axios from 'axios'

export default {
    name:'Blank',
    components:{
        headerNav,
        vueFooter,
        sideBarNav,
        modal
    },
    data(){
        return {
            serverQuestions : this.$store.state.serverQuestions,
            questionNum : 0,
            checkedQuestions : [],
            modals:{
                modal0: false,
            }
        }
    },
    methods:{
        addQuestionsToExam(questionId){
            //console.log(questionId);
            console.log(this.checkedQuestions)
        },
        submitTheExam(){
            this.modals.modal0 = false;
            this.$snotify.async('Please while we examine the exam', 'Uploading', () => new Promise((resolve, reject) => {
                
                axios({
                    url: 'http://localhost:8000/api/exams/store',
                    data: {
                        questions: this.checkedQuestions,
                    },
                    method:'POST',
                    headers:{
                        Authorization: this.$store.state.token,
                        "Content-type": "application/json"
                    }
                })
                .then(response => {
                    resolve({
                        title: 'Success',
                        body: 'The exam successfully uploaded',
                        timeout: 2000,
                        config: {
                            closeOnClick: true,
                            timeout: 2000,
                        }
                    });
                }).catch(error =>{
                    reject({
                        title: 'Error!!',
                        body: 'Sorry We could not recieve the exam propery please try again later!',
                        timeout: 2000,
                        config: {
                            closeOnClick: true,
                            timeout: 2000,
                        }
                    });
                });
            }));            
        }
    }
}
</script>