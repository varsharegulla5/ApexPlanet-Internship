const quiz = [

{
    question:"Which HTML tag is used to create a hyperlink?",
    answers:["<link>","<a>","<href>","<url>"],
    correct:1
},

{
    question:"Which CSS property changes the text color?",
    answers:["font-color","text-color","color","background-color"],
    correct:2
},

{
    question:"Which keyword declares a variable in JavaScript?",
    answers:["define","var","let()","value"],
    correct:1
},

{
    question:"Which HTML tag is used to insert an image?",
    answers:["<picture>","<img>","<image>","<src>"],
    correct:1
},

{
    question:"Which JavaScript function displays a popup message?",
    answers:["popup()","display()","alert()","message()"],
    correct:2
}

];

let currentQuestion = 0;
let score = 0;
let answered = false;

function loadQuestion(){

answered=false;

const q=quiz[currentQuestion];

document.getElementById("question").innerText=q.question;

const answers=document.getElementById("answers");

answers.innerHTML="";

q.answers.forEach((answer,index)=>{

const btn=document.createElement("button");

btn.innerText=answer;

btn.classList.add("answer-btn");

btn.onclick=function(){

if(answered) return;

answered=true;

const allButtons=document.querySelectorAll(".answer-btn");

allButtons.forEach(button=>button.disabled=true);

if(index===q.correct){

btn.style.background="#22c55e";

score++;

}else{

btn.style.background="#ef4444";

allButtons[q.correct].style.background="#22c55e";

}

};

answers.appendChild(btn);

});

if(currentQuestion===quiz.length-1){

document.getElementById("nextBtn").innerText="Finish";

}else{

document.getElementById("nextBtn").innerText="Next";

}

}

function nextQuestion(){

if(!answered){

alert("Please select an answer first.");

return;

}

currentQuestion++;

if(currentQuestion<quiz.length){

loadQuestion();

}else{

document.getElementById("quiz").innerHTML=`

<h2>Quiz Completed!</h2>

<h3>Your Score: ${score}/${quiz.length}</h3>

<button onclick="restartQuiz()">Restart Quiz</button>

`;

}

}

function restartQuiz(){

currentQuestion=0;

score=0;

document.getElementById("quiz").innerHTML=`

<h3 id="question"></h3>

<div id="answers"></div>

<button id="nextBtn" onclick="nextQuestion()">Next</button>

`;

loadQuestion();

}

loadQuestion();


// ---------------- JOKE API ----------------

async function getJoke(){

const joke=document.getElementById("joke");

const btn=document.getElementById("jokeBtn");

joke.innerHTML="⏳ Loading joke... Please wait.";

btn.disabled=true;

btn.innerText="Loading...";

try{

const response=await fetch("https://official-joke-api.appspot.com/random_joke");

const data=await response.json();

joke.innerHTML=`<strong>${data.setup}</strong><br><br>${data.punchline}`;

}

catch(error){

joke.innerHTML="❌ Unable to fetch joke. Please try again.";

}

finally{

btn.disabled=false;

btn.innerText="Get Joke";

}

}