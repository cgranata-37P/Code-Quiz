

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question


// WHEN I answer a question
// THEN I am presented with another question


// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock


// WHEN all questions are answered or the timer reaches 0
// THEN the game is over


// WHEN the game is over
// THEN I can save my initials and my score


// Declare global variables
var questionContainer = document.getElementById("question-container");

var startContainer = document.getElementById("start-container");

var startButton = document.getElementById("start");

var time = document.querySelector(".time");



var secondsLeft = 75;

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;
        time.textContent = "Timer: " + secondsLeft + " Seconds";

        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to create and append image

        }

    }, 1000);
}

startButton.onclick = startQuiz;
var questionIndex = 0;
function startQuiz() {
    // Hide start screen
    //variable.setAttribute("class", "hide")
    startContainer.setAttribute("class", "hide")
    questionContainer.setAttribute("class", "show")
    //Unhide Question screen
    // for (let i = 0; i < questions.length; i++) {
        // map question object's data to html #question-box & #choices
        document.getElementById("question-h3").innerHTML = questions[questionIndex].question;
        questions[questionIndex].choices.forEach((choice) => {
        document.getElementById("choices").innerHTML += choice + "<br/>" 
        });
        //pause for loop while awaiting user input/answer

        // if statement checking if user made a selection
        //if selection is correct, then run next loop iteration to change question

    // }


    //removeAttribute


    // Kick off the timer
    setTime()

    // Get a question

    getQuestion();


}

function getQuestion() {
    // get a question from the question array

    // update both question and question choices from array

    // clear out old question

    //loop over the choices of the question

    // click listener for each choice for the correct answer
    //variable.onclick = choosingAnswer;
}


function choosingAnswer() {
    //if statement to check if they choose correct answer

    //if incorrect deduct time from time


    //Display correct or incorrect depending on answer

    //Move onto next question

    //if time runs out, stop quiz

    //if questions run out, stop quiz

}

function quizOver() {

    //final score == final time

    //stop the timer

    // hide the question screen

    //unhide end screen

}


var questions = [
    {
        question: "1. Commonly used data types DO Not include:",
        choices: [
            "Strings", "Booleans", "Alerts", "Numbers"
        ],
        answer: "Alerts",
        isSelected: true // changes to false is user answers question, and the selection matches the answer property inside object
    },

    {
        question: "2. The condition in an if/else statement is enclosed within ____ when being assigned to variables:",
        choices: [
            "Quotes", "Curly brackets", "Parentheses", "Square brackets"
        ],
        answer: "Parentheses",
        isSelected: false // changes to true is user answers question, and the selection matches the answer property inside object
 
    },

    {
        question: "3. Arrays in JavaScript can be used to store ____:",
        choices: [
            "Numbers and Strings", "Other Arrays", "Booleans", "All the above"
        ],
        answer: "All the above"
    },

    {
        question: "4. String values must be enclosed within ____ when being assigned to variables:",
        choices: [
            "Commas", "Curly Brackets", "Quotes", "Parentheses"
        ],
        answer: "Quotes"
    },

    {
        question: "5. A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: [
            "JavaScript", "Terminal/Bash", "for loops", "console.log"
        ],
        answer: "console.log"
    }
]