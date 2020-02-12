/*timer
 */
var secondsLeft = 60;
countDown.textContent = secondsLeft;

var start = document.getElementById("startButton");
var next = document.getElementById("submitButton");
var x = 0;

//Start Quiz
start.addEventListener("click", function() {
  document.getElementById("startButton").style.visibility = "hidden";
  document.getElementById("submitButton").style.visibility = "visible";

  var secondsLeft = 60;
  var timerInterval = setInterval(function() {
    secondsLeft--;
    countDown.textContent = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      alert("Time has run out.  Game over");
      document.getElementById("startButton").style.visibility = "visible";
    }
  }, 1000);
  document.getElementById("questNum").innerHTML = "1";
  document.getElementById("questAsk").innerHTML = myQuestions[0].question;
  document.getElementById("one").innerHTML = myQuestions[0].answers;
  document.getElementById("two").innerHTML = myQuestions[0].answers;
  document.getElementById("three").innerHTML = myQuestions[0].answers;
  document.getElementById("four").innerHTML = myQuestions[0].answers;
  next.addEventListener("click", function() {
    x++;
    if (x == myQuestions.length) {
      var finalScore = secondsLeft;
      clearInterval(timerInterval);
      document.getElementById("scoreCard").innerHTML = finalScore;
    }
    document.getElementById("questNum").innerHTML = x + 1;
    document.getElementById("questAsk").innerHTML = myQuestions[x].question;

    console.log(x);
  });

  //original
});

/* questions
 */
const myQuestions = [
  {
    question: "Who created Marvel Comics?",
    answers: [
      { a: "Steve Jobs", correct: false },
      { b: "Jim Lee", correct: false },
      { c: "Stan Lee", correct: true },
      { d: "John Smith", correct: false }
    ]
  },
  {
    question: "Who is the leader of Shield?",
    answers: [
      { a: "Captain America", correct: false },
      { b: "Tony Stark", correct: false },
      { c: "Hawk Eye", correct: false },
      { d: "Nick Fury", correct: true }
    ]
  },
  {
    question: "Where is Thor from?",
    answers: [
      { a: "the moon", correct: false },
      { b: "Midgar", correct: false },
      { c: "Valhalla", correct: false },
      { d: "Asgard", correct: true }
    ]
  }
];
