 var codingQuiz = document.getElementById("#start");
 var highscoresPage = document.getElementsById("#highscores");
 var timerElement = document.getElementById("timer");
 
 
 function (startQuiz){

    var codingQuiz = document.getElementById("#start");
    var quizQuestions = [
        {
            question: "Commonly used data types DO NOT Include:",
            answers: {
                1: "Strings",
                2: "Booleans",
                3: "Alerts",
                4: "Numbers"
            },
            correctAnswer: "3",
        },
    
        {
            question: "The condition in an If / else statement is enclosed within_________.",
            answers: {
                1: "quotes",
                2: "curly brackets",
                3: "parentheses",
                4: "square brackets",
            },
            correctAnswer: "2"
        },

        {
            question: "Arrays in JavaScript can be used to store________.",
            answers: {
                1: "numbers and strings",
                2: "other arrays",
                3: "booleans",
                4: "all of te above",
            },
            correctAnswer: "4",
        },

        {
            question: "String values must be enclosed within _______ when being assigned to variables.",
            answers: {
                1: "commas",
                2: "curly brackets",
                3: "quotes",
                4: "parentheses",
            },
            correctAnswer: "3",
        },

        {
            question: "A very useful tool used during development and debugging for printing content to the debugger is:",
            answers: {
                1: "JavaScript",
                2: "terminal/bash",
                3: "for loops",
                4: "console log",
            },
            correctAnswer: "3",
        }
    ];
    document.getElementById("#start").addEventListener("click", startQuiz);
 }
