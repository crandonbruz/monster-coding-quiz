var beginQuiz = document.getElementById("beginning");
var codingQuiz = document.getElementById("question");
var timeElement = document.getElementById("timer");
var answersElement = document.getElementById("answers");
var startButton = document.getElementById("start");

var quizQuestions = [
  {
    question: "Commonly used data types DO NOT Include:",
    answers: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: 2,
  },

  {
    question:
      "The condition in an If / else statement is enclosed within_________.",
    answers: ["quotes", "curly brackets", "parentheses", "square brackets"],
    correctAnswer: 2,
  },

  {
    question: "Arrays in JavaScript can be used to store________.",
    answers: [
      "numbers and strings",
      "other arrays",
      "boolean",
      "all of the above",
    ],
    correctAnswer: 3,
  },

  {
    question:
      "String values must be enclosed within _______ when being assigned to variables.",
    answers: ["commas", "curly brackets", "quotes", "parentheses"],
    correctAnswer: 2,
  },

  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: ["JavaScript", "terminal/bash", "for loops", "console log"],
    correctAnswer: 3,
  },
];

var specificQuestion = 0;
var secondsLeft = 100;
var timerInterval;

function setTime() {
  // Sets interval in variable
  timerInterval = setInterval(function () {
    secondsLeft--;
    document.getElementById("timer").innerHTML = secondsLeft;
    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      showResults("You Lose, Try again.");
    }
  }, 1000);
}

function displayQuestion() {
  codingQuiz.innerHTML = "";
  // get first question
  let currentQuestion = quizQuestions[specificQuestion];
  // post text
  let questionTitle = document.createElement("h2");
  questionTitle.textContent = currentQuestion.question;
  // make answer list
  let answerLi = document.createElement("ul");
  // add answers to list
  for (let index = 0; index < currentQuestion.answers.length; index++) {
    let answersElement = document.createElement("button");

    answersElement.textContent = currentQuestion.answers[index];

    answerLi.appendChild(answersElement);
  }

  codingQuiz.appendChild(questionTitle);
  codingQuiz.appendChild(answerLi);
}

function startQuiz() {
  beginQuiz.style.display = "none";
  setTime();
  displayQuestion();
}

function toHighscores() {
  localStorage.setItem("Score", secondsLeft);
  window.location.href = "highscores.html";
}

startButton.addEventListener("click", startQuiz);
codingQuiz.addEventListener("click", function (event) {
  //get clicked element
  let element = event.target;
  //check for clicked button
  if (element.matches("button")) {
    let correctIndex = quizQuestions[specificQuestion].correctAnswer;
    if (
      element.textContent !==
      quizQuestions[specificQuestion].answers[correctIndex]
    ) {
      secondsLeft -= 10;
    }
    specificQuestion++;
    if (specificQuestion < quizQuestions.length) {
      displayQuestion();
    } else {
      toHighscores();
    }
  }
});

