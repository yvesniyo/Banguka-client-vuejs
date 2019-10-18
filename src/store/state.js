export default{
    coins: [],
    user_id: 2,
    totalQuestionsRow: 0,
    serverAddress:'http://localhost:8000/api',
    token : localStorage.getItem("token") == null ? null :  localStorage.getItem("token"),
    serverQuestions : [],
    activeUser : {},
    serverExams : [],
    serverStudents : []
}