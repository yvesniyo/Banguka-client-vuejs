<template>
    <div class="container" id="quiz">
    <div class="row">
        <div class="col-xs-12">
        <h1 class="title">Futurama Quiz</h1>
        </div>
    </div>
    <div class="row">
        <div class="col-md-4">
        <div id="userInfo">
            <h2 id="userName">Hello, {{userInfo.userName}}!</h2>
            <p id="userScore">You have answered {{userScore}} of {{questions.length}} correctly</p>
        </div>
        </div>
        <div class="col-md-8">
        <div id="questionBlock">
            <h2>Question</h2>
            <div id="questionArea">
                <p id="questionDisplay">{{questions[index].question}}</p>
                <div class="clearfix" id="possibleAnswersDisplay">
                    <label class="col-xs-6" v-for="pa in questions[index].possibleAnswers" :key="pa.index" >
                        <input type="radio" name="answers" v-model="userAnswer" v-bind:value="pa"/><span>{{pa}}</span>
                    </label>
                </div>
            </div><a class="btn btn-block btn-primary" id="finalAnswer" @click="checkAnswer">Final Answer</a>
        </div>
        </div>
    </div>
    </div>
</template>
<script>
var baseUrl = "https://sampleapis.com/futurama";
export default {
  data(){
      return {
        message: "",
        userInfo: { userName: "Jermbo" },
        userScore: 0,
        questions: [],
        index: 0,
        userAnswer: ""
      }
    
  },
  ready: function() {
    console.log("ready");
  },
  created: function() {
    this.fetchData();
  },
  methods: {
    fetchData: function() {
      fetch(`${baseUrl}/questions?_limit=20`)
        .then(resp => resp.json())
        .then(json => this.questions.push(...json));
    },
    checkAnswer: function() {
      if (this.userAnswer == this.questions[this.index].correctAnswer) {
        this.userScore++;
      }
      this.updateIndex();
    },
    updateIndex: function() {
      if (this.index < this.questions.length - 1) {
        this.index++;
      } else {
        this.displayResults();
      }
    },
    displayResults: function() {
      if (parseInt(this.userScore) / this.questions.length > 0.7) {
        alert(`You got ${this.userScore} answers correct, you pass!`);
      } else {
        alert(`You got only ${this.userScore} answers correct, you need to rewatch all episodes. NOW!`);
      }
      this.restartQuiz();
    },
    restartQuiz: function() {
      this.userScore = 0;
      this.index = 0;
    }
  }
}
</script>
<style  scoped>
    * {
    box-sizing: border-box;
    }

    body {
    background-color: #f2f2f2 !important;
    font-family: "Lato";
    font-weight: 300;
    font-size: 16px;
    color: #555;
    padding-top: 50px;
    -webkit-font-smoothing: antialiased;
    -webkit-overflow-scrolling: touch;
    }

    /* Titles */
    h1, h2, h3, h4, h5, h6 {
    font-family: "Raleway";
    font-weight: 300;
    color: #333;
    }

    /* Paragraph & Typographic */
    p {
    line-height: 28px;
    margin-bottom: 25px;
    }

    .centered {
    text-align: center;
    }

    /* Links */
    a {
    color: #3bc492;
    word-wrap: break-word;
    transition: color 0.1s ease-in, background 0.1s ease-in;
    }

    a:hover,
    a:focus {
    color: #c0392b;
    text-decoration: none;
    outline: 0;
    }

    a:before,
    a:after {
    transition: color 0.1s ease-in, background 0.1s ease-in;
    }

    hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #ccc;
    margin: 1em 0;
    padding: 0;
    }

    /* ==========================================================================
    Wrap Sections
    ========================================================================== */
    #headerwrap {
    background-color: #34495e;
    padding-top: 60px;
    }

    #headerwrap h1 {
    margin-top: 30px;
    color: white;
    font-size: 70px;
    }

    #headerwrap h3 {
    color: white;
    font-size: 30px;
    }

    #headerwrap h5 {
    color: white;
    font-weight: 700;
    text-align: left;
    }

    #headerwrap p {
    text-align: left;
    color: white;
    }

    /* intro Wrap */
    #intro {
    padding-top: 50px;
    border-top: #bdc3c7 solid 5px;
    }

    #features {
    padding-top: 50px;
    padding-bottom: 50px;
    }

    #features .ac a {
    font-size: 20px;
    }

    /* Showcase Wrap */
    #showcase {
    display: block;
    background-color: #34495e;
    padding-top: 50px;
    padding-bottom: 50px;
    }

    #showcase h1 {
    color: white;
    }

    #footerwrap {
    background-color: #2f2f2f;
    color: white;
    padding-top: 40px;
    padding-bottom: 60px;
    text-align: left;
    }

    #footerwrap h3 {
    font-size: 28px;
    color: white;
    }

    #footerwrap p {
    color: white;
    font-size: 18px;
    }

    .title {
    text-align: center;
    margin: 10px auto 25px;
    }

    #userInfo,
    #questionBlock {
    padding: 15px;
    background: white;
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.25);
    margin-bottom: 15px;
    }

    #userInfo h2,
    #questionBlock h2 {
    margin: 0;
    }

    .option {
    display: block;
    }

    .btn {
    margin-top: 15px;
    }

</style>