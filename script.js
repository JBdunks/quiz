/*timer
 */
var secondsLeft = 60;
countDown.textContent = secondsLeft;

var start = document.getElementById("startButton");

start.addEventListener("click", function() {
  var secondsLeft = 61;
  var timerInterval = setInterval(function() {
    secondsLeft--;
    countDown.textContent = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      alert("Time has run out.  Game over");
    }
  }, 1000);
});
