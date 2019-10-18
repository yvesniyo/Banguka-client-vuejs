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
                            <h1 class="h3 mb-0 text-gray-800">STUDENTS</h1>
                            <router-link :to="{name : 'student_create'}" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-plus"></i> Add New Student</router-link>
                        </div>
                        <!-- Enter Content here -->
                        <div class="row bg-white shadow-lg" style="padding: 13px;position:relative;">
                            <table class="table table-striped" style="width:100%;">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">NAMES</th>
                                        <th scope="col">PHONE</th>
                                        <th scope="col">WHATSAPP</th>
                                        <th scope="col">INTAKE DATE</th>
                                        <th scope="col">EXPIRE DATE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(student,index) in students" v-bind:key="index">
                                        <td>{{ index+1 }}</td>
                                        <td>{{ student.name }}</td>
                                        <td>{{ student.phone }}</td>
                                        <td>{{ student.whatsapp }}</td>
                                        <td>{{ student.intake_date }}</td>
                                        <td>{{ student.expire_date }}</td>
                                    </tr>
                                </tbody>
                            </table>
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
    name:'ManageStudents',
    components:{
        headerNav,
        vueFooter,
        sideBarNav
    },
    data(){
        return {
            num: 0,
            students: this.$store.state.serverStudents,
        }
    },
    created(){
        console.log(this.$store.state.serverStudents)
    }
}
</script>