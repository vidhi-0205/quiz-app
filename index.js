const quizData=[
    {
        question:"What does HTML stands for?",
        options:[
            "Hyper Text Markup Language",
            "Home Tool Markup Language",
            "Hyperlinks and Text Markup Language",
            "Hyper Trainer Marking Language"
        ],
        correct:"Hyper Text Markup Language"
    },
    {
        question:"Which HTML tag is used for largest heading?",
        options:[
            "<head></head>",
            "<h1></h1>",
            "<h6></h6>",
            "<heading></heading>"
        ],
        correct:"<h1></h1>"
    },
    {
        question:"What does CSS stand for?",
        options:[
            "Creative Style Sheet",
            "Computer Style Sheet",
            "Colorful Style Sheet",
            "Cascading Style Sheet",
        ],
        correct:"Cascading Style Sheet"
    },{
    question: "Which property is used to change text color in CSS?",
    options: ["font-color", "text-color", "color", "text-style"],
    correct: "color"
    },
    {
    question: "Inside which HTML tag do we put the JavaScript?",
    options: ["<js>", "<javascript>", "<script>", "<code>"],
    correct: "<script>"
  }

];
let skip=0;
let score=0;
let currentIndex=0;
const optionButtons=document.querySelectorAll(".option")
const nextButton=document.querySelector(".next")
const progressBar=document.querySelector(".progress-bar")
let totalQuestions=5;
const progressText=document.querySelector(".progress")
let previousButton=document.querySelector(".previous")
let skipButton=document.querySelector(".skip")
let question=document.getElementsByClassName("innerest-container")
let popup=document.querySelector(".popup")
let finalScore=document.querySelector(".final-score")
const restartbutton=document.querySelector(".restart")
const resultImage=document.querySelector(".result-image")

function loadQuestion(){
    //display current question
    document.querySelector(".question").innerText=quizData[currentIndex].question;
    
    //reset button
    nextButton.disabled=true;
    nextButton.classList.add("disabled")
    for(let i=0;i<optionButtons.length;i++){
        optionButtons[i].innerText=quizData[currentIndex].options[i];
        optionButtons[i].disabled=false;
        for(let j=0;j<optionButtons.length;j++){
                optionButtons[j].classList.remove("correct","incorrect")
            }
    }
    updateProgress()
}
function select(){
for(let i=0;i<optionButtons.length;i++){
        optionButtons[i].addEventListener("click",function(){
            if(optionButtons[i].innerText===quizData[currentIndex].correct){
                optionButtons[i].classList.add("correct")
                confetti()
                score++
            }else{
                optionButtons[i].classList.add("incorrect")
            }
                for(let j=0;j<optionButtons.length;j++){
                optionButtons[j].disabled=true;
                }
            nextButton.disabled=false;
            nextButton.classList.remove("disabled")
            skipButton.disabled=true;
        })
    }
}

function updateProgress(){
    progressBar.style.width=((currentIndex+1)/totalQuestions)*100+"%"
    progressText.innerText=" Question "+(currentIndex+1)+" of "+totalQuestions
}

loadQuestion()
select()
nextButton.addEventListener("click",function(){
        if(currentIndex+1==quizData.length){
        confetti()
        question[0].style.display="none"
        popup.style.display="block"
        finalScore.innerText="Your Score is : "+score+" out of "+quizData.length+", Total numbers of questions skipped are : "+skip
        if(score>=3){
            resultImage.src="correct-removebg-preview.png"
        }else{
            resultImage.src="incorrect-removebg-preview.png"
        }
    }
    currentIndex++;
    loadQuestion();
    previousButton.disabled=false;
    skipButton.disabled=false;
})
previousButton.addEventListener("click",function(){
    currentIndex--;
    loadQuestion();
})
if(currentIndex==0){
    previousButton.disabled=true;
}
skipButton.addEventListener("click",function(){
    if(currentIndex+1===quizData.length){
        confetti()
        question[0].style.display="none"
        popup.style.display="block"
        finalScore.innerText="Your Score is : "+score+" out of "+quizData.length+",  Total numbers of questions skipped are : "+skip
                if(score>=3){
            resultImage.src="correct-removebg-preview.png"
        }else{
            resultImage.src="incorrect-removebg-preview.png"
        }
    }
    currentIndex++;
    loadQuestion();
    skip++

})
restartbutton.addEventListener("click",function(){
    location.reload();
})