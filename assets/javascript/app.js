//JavaScript

//global variables
var clockRunning = false;
var timer;
var duration = 120;

//click event to call start
window.onload = function () {
    $("#start").on("click", start);
}

//start timer
function start() {
    $("#start").hide();
    $("#questions").show();
    $("#trackTime").show();

    if (!clockRunning) {
        timer = setInterval(onInterval, 1000);
        clockRunning = true;
    }

}

//timer running until out of time and not speeding up
function onInterval() {
    duration--;
    $("#counterDisplay").text(duration);

    if (duration === 0) {
        clearInterval(timer);
        clockRunning = false;
        checkAnswers();
    }
}

//track answers and show results 1-correct answers, 2-incorrect answers, 3-unanswered
function checkAnswers() {
    var correctAnswer = 0;
    var incorrectAnswer = 0;
    var noAnswer = 0;
    var arr = $(".triviaQuestions");
    for (var i = 0; i < arr.length; i++) {
        var questionDiv = $(arr[i]);
        var answer = questionDiv.find("input").filter(":checked");
        if (answer.length != 1) {
            noAnswer++;

        }
        else {
            var isCorrect = $(answer[0]).data("answer");
            if (isCorrect === true) {
                correctAnswer++;
            }
            else {
                incorrectAnswer++;
            }
        }
    }

    //print answer scores
    $("#correctAnswers").text(correctAnswer);
    $("#incorrectAnswers").text(incorrectAnswer);
    $("#noAnswers").text(noAnswer);

    //hide start, questions, and timer on final score screen
    $("#start").hide();
    $("#questions").hide();
    $("#trackTime").hide();

    //show score on final screen
    $("#score").show();
}
