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
      "function => myFunction()",
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

let start = document.querySelector("#start");
let time = document.querySelector("#time");
let choices = document.querySelector("#choices");
let scores = document.querySelector(".scores");
let finalScore = document.querySelector("#final-score");
let submit = document.querySelector("#submit").textContent;

// if start button (clicked ) {timer start counting}

// start.addEventListener("click");

//loop questionaires to move to next question
let currentQuestion = 0;
let currentChoices = 0;
let correctAnswer = 0;
let timeLeft = 10;

// console.log(choices);

for (let i = 0; i < questions.length; i++) {
  document.querySelector("#question-title").textContent = questions[0].question;
}
choices.textContent = questions[0].choices[0];
choices.textContent = questions[0].choices[1];
choices.textContent = questions[0].choices[2];
choices.textContent = questions[0].choices[3];

// console.log(correctAnswer);

// set time interval
function timer() {
  let timeInterval = setInterval(function () {
    timeLeft--;
    time.textContent = timeLeft;

    if (timeLeft === 0 || questions === questions.length - 1) {
      clearInterval(timeInterval);
      return submit();
    }
  }, 1000);
}
timer();

//create if statement to identify the correct answer.
// let correctAnswer = correctAnswer[i] === choices;
// console.log(correctAnswer);

// let incorrectAnswer = question === false;
// let timePenalty = 10000;

// if (incorrectAnswer === true) {
//   let timeLeft = time - (time.length - timePenalty);
// } else {
//   finalScore += 1;
// }

// Create button to each choices.

// choices.addeventlistener("click", function (event) {
//   if (event.target.matches("button")) {
//     event.target.getAttribute("   ");
//   }
// });

//quiz end when questions < questions.lenght || timeLeft = 0

//add event listener for submit button
