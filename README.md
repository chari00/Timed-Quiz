# Timed Quiz

## Table of Content

1. Description
2. Visual
3. Built with:
4. What I learned
5. Links
6. Resources
7. License

## 1. Description

This is a timed quiz project that allows the user to answer each questions with multiple - choices for a limited time. The user gets points for each correct answer, and gets ten seconds time deduction from each incorrect answer.

## 2. Visual

### Image of the project in console view.

- <img src="/assets/images/quizdone.png">

- <img src="/assets/images/highscore.png">

### Image of the project in Webpage view.

#### When Start Quiz button is clicked, timer starts counting.

- <img src="/assets/images/beforequiz.png">

- <img src="/assets/images/startquiz.png">

#### When answer clicked was incorrect the timer will decrement 10s for every incorrect answer.

- <img src="/assets/images/correct.png">

- <img src="/assets/images/wrong.png">

#### The user can view the score when the game end.

- <img src="/assets/images/score.png">

## 3. Built with:

- javascript
- local storage
- html
- css

## 4. What I learned

To see how you can add code functions, see below:
```
themeSwitcher.addEventListener("click", function (event) {
startContainer.classList.add("hide");
timeLeft = 100;
renderQuestion();
});
```
```
function highScore() {
let highscoreEl = document.querySelector("#highscores");
highscoreEl.textContent =
localStorage.getItem("Initials") +
" " +
localStorage.getItem("Final Score ");
```

## 5. Links

### Source code location

https://github.com/chari00/Timed-Quiz

### Deployed website URL

https://chari00.github.io/Timed-Quiz/

## 6. Resources

### URL for resources

- https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

- https://www.w3schools.com/js/js_quiz.asp

- https://www.geeksforgeeks.org/html-dom-button-object/

- https://developer.mozilla.org/en-US/docs/Web/API/setInterval

- https://stackoverflow.com/questions/3842614/how-do-i-call-a-javascript-function-on-page-load

## 7. License

This project is licensed by MIT.
