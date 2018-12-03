$(document).ready(function(){
   //declare variables
    var answerChoices=[];
    //variable for correct and incorrect count
    var correct=0;
    var incorrect=0;
    var questionNumber=0;
    var answerChoices=[];
    var question="";
    //variable for questions
    var questions=[
        {
            question: "What is Harry Potter's Birthday?",
            answerChoices: {
                a: "June 30",
                b: "July 31",
                c: "July 30",
                d: "August 30"
            },
            correctAnswer: "b"
        },
        {
            question: "?",
            answerChoices: {
                a: "",
                b: "",
                c: "",
                d: ""
            },
            correctAnswer: ""
        },
        
    ]
    //create on click function for displaying question card on begin game
    $(".begin-button").on("click", function(){
        $(".card").animate({opacity:1});
        $(".card-header").html("<h2>" + questions(question) +"</h2>")
    })

})