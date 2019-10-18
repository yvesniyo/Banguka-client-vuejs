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
                            <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                            <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                        </div>
                        <div class="row">
                            <!-- Here is where the cards goes -->
                        </div>   
                        <div class="row  bg-white">
                            <div class="col-md-12">
                                
                            </div>
                            <div class="col-lg-6">
                                <users-chart></users-chart>
                            </div>
                            <div class="col-lg-6">
                                <users-chart></users-chart>
                            </div>
                            <div class="col-lg-6 mb-4">
                                
                                
                                
                                <!-- Project Card Example -->
                                <div class="card shadow mb-4">
                                    <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">Projects</h6>
                                    </div>
                                    <div class="card-body">
                                    <h4 class="small font-weight-bold">Server Migration <span class="float-right">20%</span></h4>
                                    <div class="progress mb-4">
                                        <div class="progress-bar bg-danger" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h4 class="small font-weight-bold">Sales Tracking <span class="float-right">40%</span></h4>
                                    <div class="progress mb-4">
                                        <div class="progress-bar bg-warning" role="progressbar" style="width: 40%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h4 class="small font-weight-bold">Customer Database <span class="float-right">60%</span></h4>
                                    <div class="progress mb-4">
                                        <div class="progress-bar" role="progressbar" style="width: 60%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h4 class="small font-weight-bold">Payout Details <span class="float-right">80%</span></h4>
                                    <div class="progress mb-4">
                                        <div class="progress-bar bg-info" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h4 class="small font-weight-bold">Account Setup <span class="float-right">Complete!</span></h4>
                                    <div class="progress">
                                        <div class="progress-bar bg-success" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    </div>
                                </div>

                                

                            </div>
                            <div class="col-lg-6 mb-4">
                                <!-- Color System -->
                                <div class="row">
                                    <div class="col-lg-6 mb-4">
                                    <div class="card bg-primary text-white shadow">
                                        <div class="card-body">
                                        Primary
                                        <div class="text-white-50 small">#4e73df</div>
                                        </div>
                                    </div>
                                    </div>
                                    <div class="col-lg-6 mb-4">
                                    <div class="card bg-success text-white shadow">
                                        <div class="card-body">
                                        Success
                                        <div class="text-white-50 small">#1cc88a</div>
                                        </div>
                                    </div>
                                    </div>
                                    <div class="col-lg-6 mb-4">
                                    <div class="card bg-info text-white shadow">
                                        <div class="card-body">
                                        Info
                                        <div class="text-white-50 small">#36b9cc</div>
                                        </div>
                                    </div>
                                    </div>
                                    <div class="col-lg-6 mb-4">
                                    <div class="card bg-warning text-white shadow">
                                        <div class="card-body">
                                        Warning
                                        <div class="text-white-50 small">#f6c23e</div>
                                        </div>
                                    </div>
                                    </div>
                                    <div class="col-lg-6 mb-4">
                                    <div class="card bg-danger text-white shadow">
                                        <div class="card-body">
                                        Danger
                                        <div class="text-white-50 small">#e74a3b</div>
                                        </div>
                                    </div>
                                    </div>
                                    <div class="col-lg-6 mb-4">
                                    <div class="card bg-secondary text-white shadow">
                                        <div class="card-body">
                                        Secondary
                                        <div class="text-white-50 small">#858796</div>
                                        </div>
                                    </div>
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
        <a class="scroll-to-top rounded" href="#page-top">
            <i class="fas fa-angle-up"></i>
        </a>
    </div>
</template>
<script>
import headerNav from './includes/topNav.vue'
import vueFooter from './includes/vue_footer.vue'
import sideBarNav from './includes/sidebarNav'
import UsersChart from './usersChart'
export default {
    name:'Admin',
    components:{
        headerNav,
        vueFooter,
        sideBarNav,
        UsersChart
    }
}
</script>
<style scoped>

</style>