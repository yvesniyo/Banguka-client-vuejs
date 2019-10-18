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
                            <h1 class="h3 mb-0 text-gray-800" v-if="!updatingMode">Create Question</h1>
                            <h1 class="h3 mb-0 text-gray-800" v-if="updatingMode">Update Question</h1>
                            <router-link to="/dashboard/admin/questions">
                                <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-fw fa-table text-white-50"></i> Go back to manage questions</a>
                            </router-link>
                        </div>
                        <!-- Enter Content here -->
                        <div class="row bg-white shadow-lg" style="padding: 13px;margin-bottom:50px;">
                            <div class="col-lg-4 mb-5" >
                                <b-form>
                                    <b-form-group
                                        id="input-group-1"
                                        label="Question Title:"
                                        label-for="questionNameId"
                                    >
                                        <b-form-textarea
                                            id="questionNameId"
                                            v-model="question.title"
                                            type="text"
                                            required
                                            placeholder="Enter Question Title"
                                            style="height:240px;"
                                            :autofocus= true
                                            spellcheck="false" 
                                        >
                                        </b-form-textarea>
                                    </b-form-group>
                                </b-form>
                                <b-form v-if="question.title.length >= 1">
                                    <b-form-group
                                        id="input-group-1"
                                        label="Question Choice:"
                                        label-for="questionChoiceId"
                                        style="width:100%"
                                    >
                                        <b-form-input
                                            id="questionChoiceId"
                                            v-model="incomingChoice"
                                            type="text"
                                            required
                                            placeholder="Enter Question Choice"
                                        >
                                        </b-form-input>
                                        <b-form-file
                                        v-model="incomingChoiceImage"
                                        :state="Boolean(incomingChoiceImage)"
                                        placeholder="Choose a file or drop it here..."
                                        drop-placeholder="Drop file here..."
                                        style="margin-top:5px;"
                                        accept="image/jpeg, image/png"
                                        @change="onFileChange"
                                        ></b-form-file>
                                    </b-form-group>
                                    <b-button variant="outline-primary" @click="saveChoice"><i class="fa fa-plus" ></i> Add Choice</b-button>
                                </b-form>
                            </div>
                            <div class="col-lg-8 " style="background-color:#f0f8ff;border: 1px solid lightblue;">
                                <div class="container " style="padding-top:10px;">
                                    <b-alert show dismissible v-if="showAlertMessage == 'uploadSuccess' && !updatingMode" variant="success">Question Successfuly Created</b-alert>
                                    <b-alert show dismissible  v-if="showAlertMessage == 'uploadFail' && !updatingMode" variant="warning">Sorry The Question Could not be created, try again later.</b-alert>
                                    <b-alert show dismissible v-if="showAlertMessage == 'uploadSuccess' && updatingMode" variant="success">Question Successfuly Updated</b-alert>
                                    <b-alert show dismissible  v-if="showAlertMessage == 'uploadFail' && updatingMode" variant="warning">Sorry The Question Could not be Updated, try again later.</b-alert>
                                </div>
                                
                                <div class="  border-bottom-warnig p-2" v-if="resultsPanel">
                                    <h2 class="text-center">Question Structure</h2> <br />
                                    <h4 style="font-weight:bold;font-size:13px;color:black;">1. {{ question.title}}</h4>
                                    <div>
                                        <b-form-group>
                                            <ol style="list-style:''">
                                            <div  v-for="choice in choices" style="font-weight:bold;font-size:13px;color:black;opacity:0.9;" :key="choice.id">
                                                <div style="padding-left:1px;margin-bottom:1px;background:;" class="choiceSelect">
                                                    <b-form-radio 
                                                        v-model="correctChoice"
                                                        name="some-radios" 
                                                        :value= "choice.id"
                                                        style="padding-top:4px;"
                                                    
                                                    >
                                                    
                                                    </b-form-radio>
                                                    <li style="margin-left:20px;padding-top:5px;padding-bottom:5px;width:95% !important;margin-top:-25px;margin-bottom: 5px;background-color:;" class="choiceOption">
                                                        <span v-if="choice.answer.indexOf('<img') == -1"> <span>{{ letters[choice.id] }})</span>  {{ choice.answer}} </span>
                                                        <span v-if="choice.answer.indexOf('<img') !== -1"><span>{{ letters[choice.id] }})</span> <span v-html="choice.answer"></span></span>
                                                        <div style="display:none;">
                                                            <a 
                                                            v-b-popover.hover.left="'Move up this choice so that the other one top of it comes below this by double clicking this icon.'"
                                                                title="Move Up this choice"
                                                                @click="moveUpChoice(choice.id)"   class='text-primary' style="margin-left:10px;cursor:pointer;" ><i class="fas fa-chevron-up"></i></a>
                                                            <a 
                                                            v-b-popover.hover.left="'If you don\'t want this choice you can remove by Double clicking this icon '"
                                                                title="Remove this choice"
                                                                @dblclick="removeChoice(choice.id)" class='text-danger' style="margin-left:30px;cursor:pointer;" ><i class='far fa-trash-alt' ></i></a>
                                                            <a 
                                                            v-b-popover.hover.left="'If you wish to update this choice who might want to edit it, just double click this icon and it will appear in the text box left and edit it after then add the updated choice.'"
                                                                title="Update this choice"
                                                                @dblclick="updateChoice(choice.id)" class='text-default' style="margin-left:30px;cursor:pointer;"><i class='fas fa-pen-alt'></i></a>
                                                        </div>
                                                    </li>
                                                </div>
                                            </div>
                                            </ol>
                                        </b-form-group>
                                        <label class="text-warning" v-if="choices.length > 1"> Correct Answer is <span class="text-success" style="font-weight:bold;"> {{ letters[correctChoice] }} </span></label>
                                        <br />
                                        <div v-if="updatingMode">
                                            <b-button variant="outline-default" v-if="choices.length > 1" @click="uploadQuestion" style=""> <i class="fa fa-save"></i> Update Question</b-button>
                                        </div>
                                        <div v-if="!updatingMode">
                                            <b-button variant="outline-primary" v-if="choices.length > 1" @click="uploadQuestion" style=""> <i class="fa fa-save"></i> Save Question</b-button>
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
    </div>
</template>

<script>
import headerNav from '../includes/topNav.vue'
import vueFooter from '../includes/vue_footer.vue'
import sideBarNav from '../includes/sidebarNav'
import axios from 'axios';
/* eslint-disable */
export default {
    name:'ManageCustomers',
    components:{
        headerNav,
        vueFooter,
        sideBarNav
    },
    data(){
        return {
            question:{title:""},
            incomingChoice:"",
            choices:[],
            correctChoice: "",
            letters:["","A","B","C","D","E","F","G","H","I","J"],
            resultsPanel: true,
            showAlertMessage:'none', 
            updatingMode: false,
            incomingChoiceImage:null,
            imageUrl: null,
            image: '',
        }
    },
    mounted(){
        if(this.$route.params.id !== undefined){
            this.updatingMode = true;
            let idOfEdit = this.$route.params.id;
            let editQuestion = this.$store.state.serverQuestions.find((q, index)=>{
                return q.id == idOfEdit;
            });
            let ttl = editQuestion.title;
            let answr = parseInt(editQuestion.answer);
            let chcs = JSON.parse(editQuestion.choices);
            let html_choices=[];
            chcs.forEach((choice,indexChoice)=>{
                html_choices.push({answer:choice.answer,id:choice.id,img: choice.img});
            })
            this.choices = html_choices;
            this.correctChoice = answr;
            this.question.title = ttl;
        }
    },
    methods:{
        onFileChange(e) {
            const file = e.target.files[0];
            this.imageUrl = URL.createObjectURL(file);
            console.log(this.imageUrl)

            let files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            this.createImage(files[0]);
        },
        createImage(file) {
                let reader = new FileReader();
                let vm = this;
                reader.onload = (e) => {
                    vm.image = e.target.result;
                };
                reader.readAsDataURL(file);
        },
        uploadImage(){
            axios({
                url: 'http://localhost:8000/api/image/store',
                data: {
                    image: this.image,
                },
                method:'POST',
                headers:{
                    Authorization: this.$store.state.token,
                    "Content-type": "application/json"
                }
            })
            .then(response => {
                console.log(response);
            }).catch(error =>{
                console.log(error)
            });
            
        },
        moveUpChoice: function(id){
            let active = id-1;
            let upperIndex = active-1;
            if(upperIndex >= 0){
                let activeData = this.choices.find((data)=>{ return data.id === active+1 ;});
                let activeAnswer = activeData.answer;
                let upperData = this.choices.find((data)=>{ return data.id === active ;});
                let upperAnswer = upperData.answer;
                this.choices[active-1].answer = activeAnswer;
                this.choices[active].answer = upperAnswer;
            }
            
        },
        uploadQuestion: function(){
            let url = this.$store.state.serverAddress+"/questions/create";
            if(this.updatingMode){
                 url = this.$store.state.serverAddress+"/questions/update/"+this.$route.params.id;
            }
            let questionToServer = {
                title: this.question.title, 
                choices: JSON.stringify(this.choices), 
                answer: this.correctChoice,
                added_by: this.$store.state.user_id,
                questionImage: null,
            }
            axios({
                method: 'POST',
                url: url,
                data: questionToServer,
                headers: {
                    Authorization: this.$store.state.token,
                    "Content-type": "application/json"
                }
            }).then((result)=>{
                let data = result.data;
                console.log(data)
                if(data.status == 200){
                    this.showAlertMessage = "uploadSuccess";
                }else{
                    this.showAlertMessage = "uploadFail";
                }
                this.hideAlerts();
                // this.question.title = "";
                // this.choices = [];
                this.$store.state.serverQuestions = [];
                
            }).catch((error)=>{
                console.log(error);
            })

        },
        saveChoice: function(){
            let id = this.choices.length+1;
            
            if(this.incomingChoiceImage !== null){
                let image = `<img src='${this.imageUrl}' width='50px' height='50px' />`;
                this.choices.push({answer: image,id:id,img: this.image});
                this.incomingChoiceImage = null;
            }else{
                if(this.incomingChoice == "" || id > 6){    return;   }
                this.choices.push({answer:this.incomingChoice,id:id,img:''});
            }
            this.incomingChoice = "";
        },
        removeChoice:function(id){
            this.choices = this.choices.filter((choice)=>{ return choice.id !== id ;  })
            this.correctChoice = 1;
            this.orderChoices();
        },
        orderChoices:function(){
            for(let i=0; i < this.choices.length; i++){
                this.choices[i].id = i+1;
            }
        },
        updateChoice: function(id){
            let choice = this.choices.find((single)=> {  return single.id == id ; });
            this.incomingChoice = choice.answer;
            this.removeChoice(id);
        },
        hideAlerts:function(){
            setTimeout(function(){
                this.showAlertMessage = "none";
            },3000)
        }
    }
}
</script>
<style scoped>
ol {
    counter-reset: list;
    margin: 0;
}

ol >  div div .b-form-radio  li {
    list-style: none;
    position: relative;
}

ol > div div .b-form-radio li:before {
    counter-increment: list;
    content: counter(list, lower-alpha) ") ";
    position: absolute;
    left: -1.4em;
}
.choiceSelect:hover div{
    display:block !important;
}
</style>