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
                            <h1 class="h3 mb-0 text-gray-800">Exams</h1>
                            <router-link to="/dashboard/admin/examinations/create" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-plus"></i> Create New Exam</router-link>
                        </div>
                        <!-- Enter Content here -->
                        <div class="row bg-white shadow-lg" style="padding: 13px;position:relative;">
                            <div class="col-md-4 " style="margin-bottom:10px;" v-for="exam in exams" :key="exam.id">
                                <div class="card">
                                    <div class="card-header bg-default text-white">
                                        {{ exam.title }}
                                    </div>
                                    <div class="card-body text-center">
                                        <h6 class="card-title text-center">STUDENTS</h6>
                                        <badge tag="a" href="#" type="primary">
                                            <span>PASSED  <badge pill type="primary">2</badge></span>
                                        </badge>
                                        <badge tag="a" href="#" type="warning">
                                            <span>FAILED  <badge pill type="warning">2</badge></span>
                                        </badge>
                                        <badge tag="a" href="#" type="info">
                                            <span>TOTAL  <badge pill type="info">2</badge></span>
                                        </badge>
                                        <badge tag="a" href="#" type="primary" style="margin-top:5px;">
                                            <span>COMMENTS  <badge pill type="primary">2</badge></span>
                                        </badge>
                                        <badge tag="a" href="#" type="primary" style="margin-top:5px;">
                                            <span>ACTIVE STUDENTS  <badge pill type="primary">21</badge></span>
                                        </badge>
                                        
                                    </div>
                                </div>

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
export default {
    name:'ManageExams',
    components:{
        headerNav,
        vueFooter,
        sideBarNav
    },
    data(){
        return {
            exams: this.$store.state.serverExams.reverse(),
        }
    },
    created(){
        console.log(this.$store.state.serverExams)
    }
}
</script>