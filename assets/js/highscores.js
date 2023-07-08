var list = document.querySelector("#highscores-list");
var finalmente;

function displayScores() {
  list.innerHTML = "";
  finalmente = JSON.parse(localStorage.getItem("Scores"));

  for (var index = 0; index < finalmente.length; index++) {
    let newItem = document.createElement("li");

    let newerItem = document.createElement("h4");
    newerItem.textContent = finalmente[index].initials;

    let newerScore = document.createElement("li");
    newerScore.textContent = finalmente[index].score;

    newItem.setAttribute("class", "item");
    newItem.appendChild(newerItem);
    newItem.appendChild(newerScore);

    list.appendChild(newItem);
  }
}

var form = document.querySelector("form");
var formInput = document.querySelector("#uppercase");

function finishQuiz() {
  var resultsPage = document.getElementById("finito");
  resultsPage.removeAttribute("class");

  var resultsQuiz = document.getElementById("resultados");
  let newScore = JSON.parse(localStorage.getItem("Score"));
  resultsQuiz.textContent = newScore;
}
finishQuiz();

form.addEventListener("submit", function (event) {
  event.preventDefault();
  finalmente = JSON.parse(localStorage.getItem("Scores"));
  if (finalmente === null) {
    finalmente = [];
  }
  let newScore = JSON.parse(localStorage.getItem("Score"));
  let newerScore = {
    initials: formInput.value.trim(),
    score: newScore,
  };

  finalmente.push(newerScore);

  localStorage.setItem("Scores", JSON.stringify(finalmente));
  displayScores();
});

var clearButt = document.querySelector("#clear");

clearButt.addEventListener("click", function () {
    localStorage.setItem("Scores", JSON.stringify([]));
    displayScores();
})