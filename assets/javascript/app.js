//JavaScript

//create start button for timer

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



function onInterval() {
    duration--;
    $("#counterDisplay").text(duration);

    if (duration === 0) {
        clearInterval(timer);
        clockRunning = false;
    }
}

//create way to track answers and show results 1-correct answers, 2-incorrect answers, 3-unanswered

