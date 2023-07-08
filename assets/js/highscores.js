function finishQuiz() {
    clearInterval(timerInterval);

    var resultsPage = document.getElementById("finito");
    resultsPage.removeAttribute("hide");

    var resultsQuiz = document.getElementById("resultados");
    resultsQuiz.textContent = secondsLeft
}