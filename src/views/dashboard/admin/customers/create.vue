<template>
    <div>
          <!-- Page Wrapper -->
        <div id="wrapper">
            <!-- Sidebar -->
            <sideBarNav>
            </sideBarNav>
            <!-- End of Sidebar -->
            <!-- Content Wrapper -->
            <div id="content-wrapper" class="d-flex flex-column">
                <!-- Main Content -->
                <div id="content">
                    <!-- Topbar -->
                    <headerNav>
                    </headerNav>
                    <!-- End of Topbar -->
                    <!-- Begin Page Content -->
                    <div class="container-fluid">
                        <!-- Page Heading -->
                        <div class="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 class="h4 mb-0 text-gray-800"></h1>
                            <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                                <i class="fas fa-download fa-sm text-white-50"></i>
                                Back To Manage Customers
                            </a>
                        </div>
                        <div class="row bg-white" style="padding: 13px;margin-bottom:50px;">
                            <span class="small">Customers/Register</span>
                            <div class="container my-4">
                                <div class="col-md-6">
                                    <label>Name</label>
                                    <base-input alternative placeholder="Enter Name"></base-input>
                                </div>
                                <div class="col-md-6">
                                    <label>Email</label>
                                    <base-input alternative placeholder="name@example.com" ></base-input>
                                </div>
                            </div>
                            <div class="container">
                                <div class="col-md-6">
                                    <label>Province</label>
                                    <base-input alternative placeholder="Province"></base-input>
                                </div>
                                <div class="col-md-6">
                                    <label>District</label>
                                    <base-input alternative placeholder="District" ></base-input>
                                </div>
                            </div>
                            
                            <div class="container">
                                <div class="col-md-6">
                                    <base-button type="default">Save</base-button>
                                </div>
                                
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
export default {
    name:'Blank',
    components:{
        headerNav,
        vueFooter,
        sideBarNav
    }
}
</script>