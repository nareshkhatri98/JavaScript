const Questions = [ // create a question and answer as array..
  {
    question: "which is the largest animal in the world?",
    answers: [
      { text: "shark", correct: false },
      { text: "Blue whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "which is the smallest District of Nepal?",
    answers: [
      { text: "Kalikot", correct: false },
      { text: "Bhaktapur", correct: true },
      { text: "Kathmandu", correct: false },
      { text: "Surkhet", correct: false },
    ],
  },
  {
    question: "What is the most common surname in the United States",
    answers: [
      { text: "Kalikot", correct: false },
      { text: "Smith", correct: true },
      { text: "Kathmandu", correct: false },
      { text: "Surkhet", correct: false },
    ],
  },

  {
    question: "Which planet has the most moons?",
    answers: [
      { text: "saturn", correct: true },
      { text: "Smith", correct: false },
      { text: "Kathmandu", correct: false },
      { text: "Surkhet", correct: false },
    ],
  },
  
];

const questionElement = document.getElementById("Questions"); // callling element by id
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() { // create a quize function
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() { // create a show function..
  resetState();
  let currentQuestion = Questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);

    if(answer.correct)
    {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer) 
  });
}

function resetState() // create the resetstate
{
  nextButton.style.display= "none";
  while(answerButtons.firstChild)
  {
    answerButtons.removeChild(answerButtons.firstChild)
  }

}

function selectAnswer(e) // create  the select anser function
{
  const selectedBtn = e.target;
  const isCorrect =selectedBtn.dataset.correct == "true";
  if(isCorrect)
  {
    selectedBtn.classList.add("correct");
    score++;// increased by 1.
  }else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button =>
    {
      if(button.dataset.correct == "true")
      {
        button.classList.add("correct");
      }
      button.disabled = true;
    });
    nextButton.style.display ="block";
}

function handleNextButton() // function for next button..
{
  currentQuestionIndex++; //increase by 1
  if(currentQuestionIndex< Questions.length)
  {
    showQuestion(); // calling function
  }
  else{
    showScore();// calling function
  }
}
function showScore() // function for show the scores
{
  resetState();// calling function
  questionElement.innerHTML =`your scorde is ${score} out of ${Questions.length}!`;
  nextButton.innerHTML = "play again";
  nextButton.style.display ="block"
}

nextButton.addEventListener("click", ()=>
{
  if(currentQuestionIndex<Questions.length)
  {
    handleNextButton(); // calling function
  }
  else{
    startQuiz();// calling function
  }
})
startQuiz(); // calling function
