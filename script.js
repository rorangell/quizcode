var counter = 100;
var endgame = false;
const startbtn=document.getElementById("start-btn");
const question=document.getElementById("question");
const saves=document.getElementById("end-game");
const span = document.getElementById("timer");
var numberQuestion = 0;
const actualQuestion = document.getElementById("actual-question");
const answer1 = document.getElementById("answer-1");
const answer2 = document.getElementById("answer-2");
const answer3 = document.getElementById("answer-3");
const answer4 = document.getElementById("answer-4");
const player = document.getElementById("player-name")
const listScore = []
var score = 0;
function renderQuestion () {
    actualQuestion.innerHTML= questions[numberQuestion].question
    answer1.innerHTML= questions[numberQuestion].answers[0].option
    answer2.innerHTML= questions[numberQuestion].answers[1].option
    answer3.innerHTML= questions[numberQuestion].answers[2].option
    answer4.innerHTML= questions[numberQuestion].answers[3].option
}

function response(numberAnswer) {
    const correct = questions[numberQuestion].answers[numberAnswer].answer
    if (correct) {
        score++
        alert("Correct!")
    } else {
        counter=counter-10
        alert("Wrong!")
    }
    numberQuestion++
    document.getElementById("highscore").innerHTML=score
    if (numberQuestion==questions.length) {
        question.style.display="none"
        saves.style.display="initial"
        endgame=true
        alert("End of Quiz");
    } else {
        renderQuestion()        
    }
    
}

function startTimer() {
    const counterFunction= setInterval(function () {
        counter--;
        if (counter >= 0) {
            span.innerHTML = `Time:${counter}`;
        }
        if (counter === 0 && !endgame) {
            alert("End of Quiz");
            clearInterval(counterFunction);
        }
        if(endgame) {
            clearInterval(counterFunction);
        }
    }, 1000);
}

function start() {
    startTimer();    
    startbtn.style.display="none"
    question.style.display="initial"
    renderQuestion()
}

function save() {
    listScore.push({name:player.value,score:score})
    saves.style.display="none"
    startbtn.style.display="initial"
    score=0
    counter=75
    numberQuestion=0
    document.getElementById("score-list").innerHTML=JSON.stringify(listScore)    
}

// Variables to store quiz questions
const questions = [
    {
        question: "Question 01",
        answers: [
            { option: "A", answer: true },
            { option: "B", answer: false },
            { option: "C", answer: false },
            { option: "D", answer: false },
        ],
    },
    {
        question: "Question 02",
        answers: [
            { option: "A", answer: true },
            { option: "B", answer: false },
            { option: "C", answer: false },
            { option: "D", answer: false },
        ],
    },
    {
        question: "Question 03",
        answers: [
            { option: "A", answer: true },
            { option: "B", answer: false },
            { option: "C", answer: false },
            { option: "D", answer: false },
        ],
    },
    {
        question: "Question 04",
        answers: [
            { option: "A", answer: true },
            { option: "B", answer: false },
            { option: "C", answer: false },
            { option: "D", answer: false },
        ],
    },
];
