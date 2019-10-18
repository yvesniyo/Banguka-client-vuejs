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
                            <h1 class="h3 mb-0 text-gray-800">Questions</h1>
                            <router-link to="/dashboard/admin/questions/create" >
                                <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-plus fa-sm text-white-50"></i> Add Question</a>
                            </router-link>
                        </div>
                        <!-- Enter Content here -->
                        <div class="row bg-white shadow-lg" style="padding: 13px;margin-bottom:50px;">
                            <div class="container">
                                <label>Per page </label>
                                <b-form-select style="width:100px;margin-left:20px;display:inline;"
                                    v-model="perpage"
                                    id="perpageSelect"
                                    size="sm"
                                    :options="pageOptions"
                                ></b-form-select>
                                <p style="margin-left:20px;display:inline;float:right;">
                                    <b-input-group size="sm" style="width:200px;">
                                        <b-form-input
                                        v-model="filter"
                                        type="search"
                                        id="filterInput"
                                        placeholder="Type to Search"
                                        
                                        ></b-form-input>
                                        <b-input-group-append>
                                        <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
                                        </b-input-group-append>
                                    </b-input-group>
                                </p>
                            </div>
                            
                            
                            <b-table
                            striped
                            hover 
                            :items="items"
                            :current-page="currentpage" 
                            :fields="fields" 
                            :per-page="perpage"   
                            :head-variant="'dark'" 
                            :bordered="true"
                            :busy="true"
                            :filter="filter"
                            >
                            <template v-slot:cell(options)="data">
                                <span v-html="data.value" class="mx-auto"></span>
                            </template>
                            <template v-slot:cell(choices)="data">
                                <span v-html="data.value"></span> 
                            </template>
                            <template v-slot:cell(question_title)="data">
                                <span v-html="data.value"></span> 
                            </template>
                            

                            <template v-slot:table-colgroup="scope">
                                <col
                                v-for="field in scope.fields"
                                :key="field.key"
                                :style="{width: (field.key === 'options' || field.key === 'date_created') ?  '150px' : 'auto'}"
                                >
                            </template>

                            <template v-slot:cell(options)="data" >
                                <a href='#' class='' ><i class='fas fa-eye'></i></a>
                                <label style='margin-left:10px;' ></label>
                                <a href='#' class='text-default' @click='updateQuestion(questions[data.item["#"]-1].id)' ><i class='fas fa-pen-alt'></i></a>
                                <label style='margin-left:10px;' ></label>
                                <a href='#' class='text-danger ' ><i class='far fa-trash-alt'></i></a>

                            </template>
                            </b-table>
                            <div style="text-align:right;">
                                <b-pagination
                                v-model="currentpage"
                                :total-rows="totalRows"
                                :per-page="perpage"
                                align="fill"
                                size="sm"
                                class="my-0"
                                ></b-pagination>
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
import axios from 'axios';
import NProgress from 'nprogress';
/* eslint-disable */
export default {
    name:'ManidQuestions',
    components:{
        headerNav,
        vueFooter,
        sideBarNav
    },
    data(){
        return {
            totalRows: 4,
            perpage: 10,
            currentpage: 1,
            pageOptions:[5,10,25,50,100],
            filter:"",
            optionBtns:"",
            fields: [
                {
                    key: '#',
                    sortable: true
                },
                {
                    key: 'question_title',
                    sortable: true
                },
                {
                    key: 'choices',
                    sortable: true
                },
                "date_created",
                {
                    key:"options",
                    sortable: false,
                    style:{
                        width: "300px"
                    }
                }
            ],
            items: [],
            questions: [],
        }
    },
    beforeMount(){
        this.insertQuestions();
        this.totalRows = this.$store.state.serverQuestions.length;
    },
    
    methods:{
        updateQuestion : function(id){
            this.$router.push({name:'questions.create',params:{id: id}});
        },
        insertQuestions: function(){
            let data = this.$store.state.serverQuestions;
            this.questions = data;
            let len = data.length;
            let listId = this.items.length;
            for(var a=0; a< len; a++){
                let choices = JSON.parse(data[a].choices);
                let html_choices="<ol class='exams'>";
                choices.forEach((choice,indexChoice)=>{
                    if(choice.answer.indexOf("img") !== -1){
                        html_choices += `<li> ${choice.answer} </li>`;
                    }else{
                        html_choices += `<li> ${choice.answer} </li>`;
                    }
                })
                html_choices +="</ol>";
                listId++;
                this.items.push({ '#': listId,
                                question_title: data[a].title,
                                choices: html_choices,
                                date_created: data[a].created_at,
                                rates:data[a].rates,
                                options: "",
                });
            }
            this.items.sort((a, b) => (a.id > b.id) ? 1 : -1);
            this.totalRows = this.items.length;
        }
    }
}
</script>
<style>
 ol.exams li img{
    height: 50px !important;
    width: auto !important;
 }
</style>