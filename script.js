/*timer
 */
var secondsLeft = 5;
countDown.textContent = secondsLeft;

var start = document.getElementById("startButton");

start.addEventListener("click", function() {
  var secondsLeft = 5;
  var timerInterval = setInterval(function() {
    secondsLeft--;
    countDown.textContent = secondsLeft;
    document.getElementById("startButton").style.visibility = "hidden";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      alert("Time has run out.  Game over");
      document.getElementById("startButton").style.visibility = "visible";
    }
  }, 1000);
});

/* questions
 */
var quest = [];
