var input1 = document.getElementById("buttonOne");
var input2 = document.getElementById("buttonTwo");
var input3 = document.getElementById("buttonThree");
var input4 = document.getElementById("buttonFour");
var start = document.getElementById("startButton");
var submit = document.getElementById("submitButton");
var displayEl = document.getElementById("display");
var i = 0;
var score = 0;
var selected = 0;

function populate() {
  document.getElementById("currentQuestion").textContent = questions[i].q;
  document.getElementById("buttonOne").textContent = questions[i].a[0];
  document.getElementById("buttonTwo").textContent = questions[i].a[1];
  document.getElementById("buttonThree").textContent = questions[i].a[2];
  document.getElementById("buttonFour").textContent = questions[i].a[3];
}

start.addEventListener("click", function() {
  i = 0;
  score = 0;
  var secondsLeft = 60;
  var timerInterval = setInterval(function() {
    secondsLeft--;
    countDown.textContent = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      alert("Time has run out.  Game over");
      return;
      document.getElementById("startButton").style.visibility = "visible";
    }
  }, 1000);

  populate();
  input1.addEventListener("click", function() {
    selected = 1;
  });

  input2.addEventListener("click", function() {
    selected = 2;
  });
  input3.addEventListener("click", function() {
    selected = 3;
  });

  input4.addEventListener("click", function() {
    selected = 4;
  });

  submit.addEventListener("click", function() {
    if (selected === questions[i].c) {
      score++;
      secondsLeft = secondsLeft + 3;
      //displayEl.textContent = "Correct: " + score;
    } else {
      secondsLeft = secondsLeft - 3;
      //displayEl.textContent = "Wrong: " + score;
    }
    i = i + 1;

    if (i == 7) {
      clearInterval(timerInterval);
      var finalScore = secondsLeft * score;

      var player = prompt(
        "You have finished the quiz!  Please enter your name to record your high score.  " +
          finalScore
      );
    }

    populate();
  });
});

var questions = [
  {
    q: "Who created Marvel Comics.",
    a: ["Jim Lee", "Stan Lee", "Donald Trump", "Steve Jobs"],
    c: 2
  },
  {
    q: "Who is the leader of Shield?",
    a: ["Captain America", "Nick Fury", "Tony Stark", "Black Widow"],
    c: 2
  },
  {
    q: "Where is Thor From?",
    a: ["the moon", "Midgar", "Asgard", "Valhalla"],
    c: 3
  },
  {
    q: "What is Spider-man's real identity?",
    a: ["Bruce Banner", "Bruce Wayne", "Steve Rogers", "Peter Parker"],
    c: 4
  },
  {
    q: "Who founded the X-men?",
    a: ["Magneto", "Jean Grey", "Charles Xavier", "William Task"],
    c: 3
  },
  {
    q: "What planet is Super-man from?",
    a: ["Klingon", "Krypton", "Jupiter", "Earth"],
    c: 2
  },
  {
    q: "What is Green Arrow's real name?",
    a: [
      "Wilson Fisk",
      "Rupert Murdoch",
      "Oliver Jonas Queen",
      "Billie Jean King"
    ],
    c: 3
  },
  {
    q: " ",
    a: [" ", " ", " ", " "],
    c: 1
  }
];
