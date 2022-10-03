const quizDB = [
    {
    question: "Q1: What is the full form of HTML?",  
    a: "Hello To My Land",
    b: "HeyText Markup Language",
    c: "HyperText Makeup Language",
    d: "Hypertext Markup Language",
    ans: "ans4"
    },
    {
        question: "Q2: What is the full form of CSS?",  
        a: "Cascading Style Sheets",
        b: "Cascading Style Sheep",
        c: "Cartoon Style Sheets",
        d: "Cascading Super Sheets",
        ans: "ans1"
    },
    {
        question: "Q3: What is the full form of HTTP?",  
        a: "Hypertext Transfer Product",
        b: "Hypertext Transfer Production",
        c: "Hypertext Transmit Product",
        d: "Hypertext Transfer Protocol",
        ans: "ans4"  
    },
    {
        question: "Q4: What is the full form of JS ?",  
        a: "JavaScript",
        b: "JavaSuper",
        c: "JavaService",
        d: "JustScript",
        ans: "ans1" 
    },
    {
        question: "Q5: What is the full form of API ?",  
        a: "Application programmable interface",
        b: "Application programming interface",
        c: "Application programable interact",
        d: "Applied programable interface",
        ans: "ans2" 
    }
]

const question = document.querySelector('.question');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const option4 = document.getElementById('option4');
const submit = document.getElementById('submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount=0;

const loadQuestion = ()=>{
    
   const questionList= quizDB[questionCount];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}
loadQuestion();
let score=0;
const getCheckAnswer= () => {

  let answer1;

  answers.forEach((chechEle) => {
    
    if(chechEle.checked)
    {
        answer1=chechEle.id;
        
    }  
   
  });
  
  return answer1;      
};


const realoadval = ()=>{
    answers.forEach(chckEle => chckEle.checked = false);
}

submit.addEventListener('click', () =>
{
    const checkedAnswer = getCheckAnswer();
    
    console.log(checkedAnswer);

    if(checkedAnswer===quizDB[questionCount].ans)
    score++;
    questionCount++;
    realoadval();
    if(questionCount<(quizDB.length))
    loadQuestion();
    else{
        showScore.innerHTML = `
        <h3> You Scored ${score}/${quizDB.length} </h3>
        <button class="btn" onClick ="location.reload()"> Play Again</button>
        `;
       
        showScore.classList.remove('scoreArea');
        
    }

});

