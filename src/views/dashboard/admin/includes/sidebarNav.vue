<template>
    <!-- Sidebar -->
    <ul class="navbar-nav bg-default sidebar sidebar-dark accordion" style="padding:1px;padding-right:30px;" id="accordionSidebar">
        <div style="position:fixed;">
            <!-- Sidebar - Brand -->
            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fas fa-car-alt"></i>
                </div>
                <div class="sidebar-brand-text mx-3">BangukaP<sup>2</sup></div>
            </a>

            <!-- Divider -->
            <hr class="sidebar-divider my-0">

            <!-- Nav Item - Dashboard -->
            <li class="nav-item active">
                <router-link to="/dashboard/admin" class="nav-link">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                </router-link>

            </li>

            <!-- Divider -->
            <!-- <hr class="sidebar-divider"> -->

            <!-- Heading -->
            <!-- <div class="sidebar-heading">
                Interface
            </div> -->

            <!-- Divider -->
            <hr class="sidebar-divider">        

            <div class="sidebar-heading">
                Management
            </div>
            <!-- Nav Item - Tables -->
            <!-- <li class="nav-item">
                <a class="nav-link collapsed" v-b-toggle.collapse-Questions href="#" data-toggle="collapse" data-target="#collapseQuestions" aria-expanded="true" aria-controls="collapseTwo">
                    <i class="fas fa-fw fa-table"></i>
                    <span>Manage Questions</span>
                </a>
                <b-collapse id="collapse-Questions" style="padding:0 !important;">
                    <div id="collapseQuestions"  class="collapse">
                        <div class="collapse-inner" style="padding:0 !important;display:block;width:100% !important;">
                            <router-link to="/dashboard/admin/questions" class="nav-link">
                                <span>View Questions</span>
                            </router-link>
                            <router-link to="/dashboard/admin/questions/create" class="nav-link">
                                <span>Create Questions</span>
                            </router-link>
                        </div>
                    </div>
                </b-collapse>
                
            </li> -->
            <li class="nav-item">
                <router-link to="/dashboard/admin/questions" class="nav-link">
                    <i class="fas fa-fw fa-table"></i>
                    <span>Manage Questions</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/dashboard/admin/examinations" class="nav-link">
                    <i class="fas fa-clipboard-list"></i>
                    <span>Manage Examinations</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{name:'students_view'}" class="nav-link">
                    <i class="fas fa-fw fa-users"></i>
                    <span>Manage Students</span>
                </router-link>
            </li>

            <!-- <li class="nav-item">
                <router-link to="/dashboard/admin/customers" class="nav-link">
                    <i class="fas fa-fw fa-users"></i>
                    <span>Manage Customers</span>
                </router-link>
            </li> -->

            

            <li class="nav-item">
                <router-link to="/dashboard/admin/commissions" class="nav-link">
                    <i class="fas fa-dollar-sign"></i>
                    <span>Manage Commissions</span>
                </router-link>
            </li>





            <!-- Divider -->
            <hr class="sidebar-divider d-none d-md-block">

            <!-- Sidebar Toggler (Sidebar) -->
            <!-- <div class="text-center d-none d-md-inline">
                <button class="rounded-circle border-0" id="sidebarToggle"></button>
            </div> -->
        </div>


    </ul>
    <!-- End of Sidebar -->
</template>
<script>
export default {
    components:{

    },
    data(){
        return {
            seen: true,
        }
    }
}
</script>
<style scoped>
        .collapse{
            display:block;
            width:100% !important;
        }
        @media (min-width: 768px) {

            .sidebar .nav-item .collapse, .sidebar .nav-item .collapsing {
                margin:0 !important;
            }
        }
        .collapse-inner a{
            color: white !important;
            opacity: 0.7;
        }
        .collapse-inner a:hover{
            background: transparent !important;
            opacity: 1;
        }
        .nav-item span{
            padding-left: 10px;
        }
</style>