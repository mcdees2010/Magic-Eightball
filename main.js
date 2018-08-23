console.log("JS Loaded");


var form = document.getElementById("myForm").addEventListener("submit", myFunction);

var generateAnswer = document.querySelector(".answer");

var answerQuestions =
    ["yes, definitely!",
    "Outlook Good",
    "Sorry, Try Again",
    "My reply is no",
    "Most Likely",
    "Ask again later"]

function myFunction(e) {
    e.preventDefault(); // prevents the behavior of forms to defaul pages
    console.log("Your answer was submitted");
    var responses = answerQuestions[Math.floor(Math.random() * answerQuestions.length)];
    generateAnswer.innerText = responses;
    e.target[0].value = ""; //makes the space clear after
}