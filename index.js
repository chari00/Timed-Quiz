let questions = [
  {
    question: "1. How do you write 'Hello World' in an alert box? ",
    choices: [
      'alertBox("Hello World");',
      'alert("Hello World");',
      'msg("Hello World");',
      'msgBox("Hello World");',
    ],
    correctAnswer: 1,
  },
  {
    question: "2. How do you create a function in JavaScript? ",
    choices: [
      "function myFunction()",
      "function:myFunction()",
      "function = myFunction()",
      "function <= myFunction()",
    ],
    correctAnswer: 0,
  },
  {
    question: "3. How do you call a function named 'myFunction'?",
    choices: [
      "myFunction(){}",
      "call myFunction()",
      "call function myFunction()",
      "myFunction()",
    ],
    correctAnswer: 3,
  },
  {
    question: "4. How to write an IF statement in JavaScript? ",
    choices: ["if i == 5 then", "if (i == 5)", "if i = 5 then", "if i = 5"],
    correctAnswer: 1,
  },
  {
    question:
      "5. How to write an IF statement for executing some code if 'i' is NOT equal to 5? ",
    choices: ["if (i != 5)", "if (i <> 5)", "if i <> 5", "if i =! 5 then"],
    correctAnswer: 0,
  },
  {
    question: "6. How does a FOR loop start? ",
    choices: [
      "for (i <= 5; i++)",
      "for i = 1 to 5",
      "for (i = 0; i <= 5; i++) ",
      "for (i = 0; i <= 5)",
    ],
    correctAnswer: 2,
  },
  {
    question: "7. How can you add a comment in a JavaScript? ",
    choices: [
      "//This is a comment  ",
      "\\This is a comment  ",
      "<!--This is a comment-->",
      "'This is a comment",
    ],
    correctAnswer: 0,
  },
  {
    question: "8. What is the correct way to write a JavaScript array? ",
    choices: [
      'var colors = ["red", "green", "blue"]  ',
      'var colors = "red", "green", "blue"',
      'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
      'var colors = (1:"red", 2:"green", 3:"blue")',
    ],
    correctAnswer: 0,
  },
  {
    question: "9. How do you round the number 7.25, to the nearest integer? ",
    choices: [
      "round(7.25)",
      "rnd(7.25)",
      "Math.rnd(7.25)",
      "Math.round(7.25) ",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "10. Which event occurs when the user clicks on an HTML element? ",
    choices: ["onmouseclick", "onmouseover", "onchange", "onclick"],
    correctAnswer: 3,
  },
];

let time = document.querySelector("#time");
let choicesContainer = document.querySelector("#choices");
let questionsContainer = document.querySelector("#questions");
let startContainer = document.querySelector("#start-screen");
let endContainer = document.querySelector("#end-screen");
let themeSwitcher = document.querySelector("#start");
let wrapper = document.querySelector(".wrapper");
let startbtn = document.querySelector("#start");
let feedbackContainer = document.querySelector("#feedbackText");

let questionIndex = 0;
let correctAnswer = 0;
let timeLeft = 100;

themeSwitcher.addEventListener("click", function () {
  startContainer.classList.add("hide");
  timeLeft = 100;
  renderQuestion();
});

function renderQuestion() {
  choicesContainer.innerHTML = "";

  // display question
  document.querySelector("#question-title").textContent =
    questions[questionIndex].question;

  // my array of choices for every question
  const choices = questions[questionIndex].choices;

  for (let i = 0; i < choices.length; i++) {
    // create the choices buttons
    const choiceButton = document.createElement("button");
    choiceButton.textContent = choices[i];
    choicesContainer.appendChild(choiceButton);

    choiceButton.addEventListener("click", function () {
      checkAnswer(i, questions[questionIndex].correctAnswer);
    });
  }
}

function checkAnswer(currentChoiceIndex, expectedIndex) {
  questionIndex++;
  renderQuestion();

  if (currentChoiceIndex === expectedIndex) {
    // correct answer
    feedbackContainer.textContent = "Correct!";

    // console.log("CORRECT ANSWER");
  } else {
    feedbackContainer.textContent = "Wrong!";
    if (timeLeft > 10) {
      // subtract time from timer
      timeLeft -= 10;
    } else {
      timeLeft = 1;
    }
    // console.log("WRONG ANSWER");
  }
}

function endQuiz() {
  questionsContainer.classList.add("hide");
  endContainer.classList.remove("hide");

  finalScore();
  feedbackContainer.textContent = "";
}

// set time interval
function timer() {
  let timeInterval = setInterval(function () {
    timeLeft--;
    time.textContent = timeLeft;

    if (timeLeft === 0 || questionIndex === questions.length) {
      clearInterval(timeInterval);

      endQuiz();
    }
  }, 1000);
}
timer();

// collect the timer value
function finalScore() {
  let finalScoreEl = document.querySelector("#final-score");
  finalScoreEl.textContent = timeLeft;
  // console.log("timecount " + timeLeft);
}

//add event listener for submit button

let submitBtn = document.querySelector("#submit");
submitBtn.addEventListener("click", function (event) {
  let initialsE1 = document.querySelector("#initials");
  initialsE1.setAttribute("Initials", initialsE1.textContent);
  //Save data to localStorage.
  // console.log("initi " + initialsE1.value + "  score " + timeLeft);
  localStorage.setItem("Initials", initialsE1.value);
  localStorage.setItem("Final Score ", timeLeft);
});
function highScore() {
  let highscoreEl = document.querySelector("#highscores");
  //console.log("local  " + localStorage.getItem("Final Score "));
  highscoreEl.textContent =
    localStorage.getItem("Initials") +
    "  " +
    localStorage.getItem("Final Score ");
}
