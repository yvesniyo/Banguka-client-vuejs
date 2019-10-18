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
                            <h1 class="h3 mb-0 text-gray-800">Customers</h1>
                            <router-link to="/dashboard/admin/customers/create">
                                <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-user text-white-50"></i> Add Customer</a>
                            </router-link>
                        </div>
                        <!-- Enter Content here -->
                        <div class="row bg-white shadow-lg" style="padding: 13px;margin-bottom:50px;">
                        

                            
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
    name:'ManageCustomers',
    components:{
        headerNav,
        vueFooter,
        sideBarNav
    },
    data(){
        return {

        }
    },
    mounted(){

        
    },
    methods:{
        
    }
}
</script>
<style scoped>

</style>