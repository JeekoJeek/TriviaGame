$(document).ready(function () {
    //declare variables
    //variable for correct and incorrect count
    var correct = 0;
    var incorrect = 0;
    //declaring variables to use within the questions

    //initial amount of time for the quiz
    var count = 120;
    //variable for questions
    var questions = [
        {
            question: "What is Harry Potter's Birthday?",
            answerChoices: [
                "June 30",
                "July 31",
                "July 30",
                "August 30"
            ],
            correctAnswer: "b"
        },
        {
            question: "?",
            answerChoices: [
                "a",
                "b",
                "c",
                "d"
            ],
            correctAnswer: "d"
        },
        {
            question: "?",
            answerChoices: [
                "a",
                "b",
                "c",
                "d"
            ],
            correctAnswer: "d"
        },
        {
            question: "?",
            answerChoices: [
                "a",
                "b",
                "c",
                "d"
            ],
            correctAnswer: "d"
        },
        {
            question: "?",
            answerChoices: [
                "a",
                "b",
                "c",
                "d"
            ],
            correctAnswer: "d"
        },
        {
            question: "?",
            answerChoices: [
                "a",
                "b",
                "c",
                "d"
            ],
            correctAnswer: "d"
        },
    ]
    //create the timer function
    var timer = function () {
        setInterval(countdown, 1000);
        
    }
    //countdown function (referred to timer assignment in class to display the countdown within the function)
    var countdown = function(){
        count--;
        $(".timer").html("<h2>Time Left: " +count + "</h2>");
        if (count===0){
            $(".card").html("<h1>Time's up!</h2>");
            $(".card").append("<p>correct: " + correct + "</p>");
            $(".card").append("<p> incorrect: " + incorrect + "</p>");
            $(".card").append("<br><br><button>Try Again?</button>")
        }
    }
    //create on click function for displaying question card on begin game
    $(".begin-button").on("click", function () {
        $(".card").animate({ opacity: 1 });

        $(".card").prepend("<div class='card-header timer'></div>")

        timer()

        //places the first question in div q1
        $(".q1").append("<h2>" + questions[0].question + "</h2>");

        // for loop to create answer buttons
        for(i=0;i<questions[0].answerChoices.length;i++){
            var a= $("<button>");
            a.addClass("answers-1");
            a.attr("answer",questions[0].answerChoices[i]);
            a.text(questions[0].answerChoices[i])
            $(".a1").append(a);

        }
        // creates divs for the second question
         $(".card").append("<div class='card-header q2'></div>");
         $(".card").append("<div class='card-body a2'></div>");

        //adds the second question
        $(".q2").html("<h2>" + questions[1].question + "</h2>");

        // for loop to create answer buttons for q2
        for(i=0;i<questions[1].answerChoices.length;i++){
            var b= $("<button>");
            b.addClass("answers-2");
            b.attr("answer",questions[1].answerChoices[i]);
            b.text(questions[1].answerChoices[i])
            $(".a2").append(b);
        }
        // divs for q3
        $(".card").append("<div class='card-header q3'></div>");
        $(".card").append("<div class='card-body a3'></div>");

        // adds q3
        $(".q3").html("<h2>" + questions[2].question + "</h2>");

        //for loop to make buttons for q3
        for(i=0;i<questions[2].answerChoices.length;i++){
            var c= $("<button>");
            c.addClass("answers-3");
            c.attr("answer",questions[2].answerChoices[i]);
            c.text(questions[2].answerChoices[i])
            $(".a3").append(c);
        }
        //create the card divs for q4
        $(".card").append("<div class='card-header q4'></div>");
        $(".card").append("<div class='card-body a4'></div>");

        //add q4
        $(".q4").append("<h2>" + questions[3].question + "</h2>");

        //add the answer buttons for q4
        for(i=0;i<questions[3].answerChoices.length;i++){
            var d= $("<button>");
            d.addClass("answers-4");
            d.attr("answer",questions[3].answerChoices[i]);
            d.text(questions[3].answerChoices[i])
            $(".a4").append(d);
        }

        //create the card divs for q5
        $(".card").append("<div class='card-header q5'></div>");
        $(".card").append("<div class='card-body a5'></div>");

        //add q5
        $(".q5").append("<h2>" + questions[4].question + "</h2>");

        //add the buttons for q5
        for(i=0;i<questions[4].answerChoices.length;i++){
            var e= $("<button>");
            e.addClass("answers-5");
            e.attr("answer",questions[4].answerChoices[i]);
            e.text(questions[4].answerChoices[i])
            $(".a5").append(e);
        }
    });

    //click function for question answers
    $(document).on("click", ".answers-1",function(){
        var answer1 = $(".answers-1").attr("answers");
        var userChoice = answer1;
        console.log(answer1);
        $(".a1").append("<p> Your Choice is: " + answer1 + "</p>");
        if(userChoice===questions[0].correctAnswer){
            correct++;
        }
        else {
            incorrect++;
        }
    });

    $(document).on("click", ".answers-2",function(){
        var answer2 = $(".answers-2").attr("answer");
        var userChoice=answer2;
        console.log(answer2);
        $(".a2").append("<p> Your Choice is: " + answer2 + "</p>");
        if(userChoice===questions[1].correctAnswer){
            correct++;
        }
        else {
            incorrect++;
        }
    });

    $(document).on("click", ".answers-3",function(){
        var answer3 = $(".answers-3").attr("answer");
        var userChoice=answer3;
        console.log(answer3);
        $(".a3").append("<p> Your Choice is: " + answer3 + "</p>");
        if(userChoice===questions[2].correctAnswer){
            correct++;
        }
        else {
            incorrect++;
        }
    });

    $(document).on("click", ".answers-4",function(){
        var answer4 = $(".answers-4").attr("answer");
        var userChoice=answer4;
        console.log(answer4);
        $(".a4").append("<p> Your Choice is: " + answer4 + "</p>");
        if(userChoice===questions[3].correctAnswer){
            correct++;
        }
        else {
            incorrect++;
        }
    });

    $(document).on("click", ".answers-5",function(){
        var answer5 = $(".answers-5").attr("answer");
        var userChoice=answer5;
        console.log(answer5);
        $(".a5").append("<p> Your Choice is: " + answer5 + "</p>");
        if(userChoice===questions[4].correctAnswer){
            correct++;
        }
        else {
            incorrect--
        }
    });



var reset= function(){
    $(".begin-button").on("click", function () {
        $(".card").animate({ opacity: 1 });

        $(".card").prepend("<div class='card-header timer'></div>")

        timer()

        //places the first question in div q1
        $(".q1").append("<h2>" + questions[0].question + "</h2>");

        // for loop to create answer buttons
        for(i=0;i<questions[0].answerChoices.length;i++){
            var a= $("<button>");
            a.addClass("answers-1");
            a.attr("answer",questions[0].answerChoices[i]);
            a.text(questions[0].answerChoices[i])
            $(".a1").append(a);

        }
        // creates divs for the second question
         $(".card").append("<div class='card-header q2'></div>");
         $(".card").append("<div class='card-body a2'></div>");

        //adds the second question
        $(".q2").html("<h2>" + questions[1].question + "</h2>");

        // for loop to create answer buttons for q2
        for(i=0;i<questions[1].answerChoices.length;i++){
            var b= $("<button>");
            b.addClass("answers-2");
            b.attr("answer",questions[1].answerChoices[i]);
            b.text(questions[1].answerChoices[i])
            $(".a2").append(b);
        }
        // divs for q3
        $(".card").append("<div class='card-header q3'></div>");
        $(".card").append("<div class='card-body a3'></div>");

        // adds q3
        $(".q3").html("<h2>" + questions[2].question + "</h2>");

        //for loop to make buttons for q3
        for(i=0;i<questions[2].answerChoices.length;i++){
            var c= $("<button>");
            c.addClass("answers-3");
            c.attr("answer",questions[2].answerChoices[i]);
            c.text(questions[2].answerChoices[i])
            $(".a3").append(c);
        }
        //create the card divs for q4
        $(".card").append("<div class='card-header q4'></div>");
        $(".card").append("<div class='card-body a4'></div>");

        //add q4
        $(".q4").append("<h2>" + questions[3].question + "</h2>");

        //add the answer buttons for q4
        for(i=0;i<questions[3].answerChoices.length;i++){
            var d= $("<button>");
            d.addClass("answers-4");
            d.attr("answer",questions[3].answerChoices[i]);
            d.text(questions[3].answerChoices[i])
            $(".a4").append(d);
        }

        //create the card divs for q5
        $(".card").append("<div class='card-header q5'></div>");
        $(".card").append("<div class='card-body a5'></div>");

        //add q5
        $(".q5").append("<h2>" + questions[4].question + "</h2>");

        //add the buttons for q5
        for(i=0;i<questions[4].answerChoices.length;i++){
            var e= $("<button>");
            e.addClass("answers-5");
            e.attr("answer",questions[4].answerChoices[i]);
            e.text(questions[4].answerChoices[i])
            $(".a5").append(e);
        }
    });

    //click function for question answers
    $(document).on("click", ".answers-1",function(){
        var answer1 = $(".answers-1").attr("answers");
        var userChoice = answer1;
        console.log(answer1);
        $(".a1").append("<p> Your Choice is: " + answer1 + "</p>");
        if(userChoice===questions[0].correctAnswer){
            correct++;
        }
        else {
            incorrect++;
        }
    });

    $(document).on("click", ".answers-2",function(){
        var answer2 = $(".answers-2").attr("answer");
        var userChoice=answer2;
        console.log(answer2);
        $(".a2").append("<p> Your Choice is: " + answer2 + "</p>");
        if(userChoice===questions[1].correctAnswer){
            correct++;
        }
        else {
            incorrect++;
        }
    });

    $(document).on("click", ".answers-3",function(){
        var answer3 = $(".answers-3").attr("answer");
        var userChoice=answer3;
        console.log(answer3);
        $(".a3").append("<p> Your Choice is: " + answer3 + "</p>");
        if(userChoice===questions[2].correctAnswer){
            correct++;
        }
        else {
            incorrect++;
        }
    });

    $(document).on("click", ".answers-4",function(){
        var answer4 = $(".answers-4").attr("answer");
        var userChoice=answer4;
        console.log(answer4);
        $(".a4").append("<p> Your Choice is: " + answer4 + "</p>");
        if(userChoice===questions[3].correctAnswer){
            correct++;
        }
        else {
            incorrect++;
        }
    });

    $(document).on("click", ".answers-5",function(){
        var answer5 = $(".answers-5").attr("answer");
        var userChoice=answer5;
        console.log(answer5);
        $(".a5").append("<p> Your Choice is: " + answer5 + "</p>");
        if(userChoice===questions[4].correctAnswer){
            correct++;
        }
        else {
            incorrect--
        }
    });




}


})
