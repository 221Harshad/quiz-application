const questions = [
  {
    question: "What is the approximate age of the universe?",
    answers: [
      { text: "13.8 billion years", correct: "true" },
      { text: "5 million years", correct: "false" },
      { text: "11 billion years", correct: "false" },
      { text: "13 billion light years", correct: "false" },
    ],
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    answers: [
      { text: "Venus", correct: "false" },
      { text: "Mars", correct: "true" },
      { text: "Jupiter", correct: "false" },
      { text: "Saturn", correct: "false" },
    ],
  },
  {
    question: "What is the speed of light?",
    answers: [
      { text: "299,792 kilometers per second", correct: "true" },
      { text: "150,000 miles per second", correct: "false" },
      { text: "500,000 kilometers per second", correct: "false" },
      { text: "200,000 miles per second", correct: "false" },
    ],
  },
  {
    question: "How many minutes are in an hour?",
    answers: [
      { text: "30 minutes", correct: "false" },
      { text: "60 minutes", correct: "true" },
      { text: "90 minutes", correct: "false" },
      { text: "120 minutes", correct: "false" },
    ],
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: [
      { text: "Earth", correct: "false" },
      { text: "Jupiter", correct: "true" },
      { text: "Saturn", correct: "false" },
      { text: "Neptune", correct: "false" },
    ],
  },
  {
    question: "How many moons does Earth have?",
    answers: [
      { text: "1", correct: "false" },
      { text: "2", correct: "false" },
      { text: "0", correct: "true" },
      { text: "4", correct: "false" },
    ],
  },
  {
    question: "What is the closest star to Earth?",
    answers: [
      { text: "Proxima Centauri", correct: "true" },
      { text: "Alpha Centauri A", correct: "false" },
      { text: "Betelgeuse", correct: "false" },
      { text: "Sirius", correct: "false" },
    ],
  },
  {
    question: "What is the smallest planet in our solar system?",
    answers: [
      { text: "Mercury", correct: "true" },
      { text: "Mars", correct: "false" },
      { text: "Venus", correct: "false" },
      { text: "Pluto", correct: "false" },
    ],
  },
  {
    question: "How many continents are there on Earth?",
    answers: [
      { text: "5", correct: "false" },
      { text: "6", correct: "false" },
      { text: "7", correct: "true" },
      { text: "8", correct: "false" },
    ],
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      { text: "Indian Ocean", correct: "false" },
      { text: "Atlantic Ocean", correct: "false" },
      { text: "Southern Ocean", correct: "false" },
      { text: "Pacific Ocean", correct: "true" },
    ],
  },
  {
    question: "Which galaxy is the Milky Way's nearest neighbor?",
    answers: [
      { text: "Andromeda", correct: "true" },
      { text: "Triangulum", correct: "false" },
      { text: "Messier 87", correct: "false" },
      { text: "Centaurus A", correct: "false" },
    ],
  },
  {
    question: "What is the chemical symbol for water?",
    answers: [
      { text: "H2O", correct: "true" },
      { text: "CO2", correct: "false" },
      { text: "O2", correct: "false" },
      { text: "N2", correct: "false" },
    ],
  },
  {
    question:
      "Which gas do plants absorb from the atmosphere during photosynthesis?",
    answers: [
      { text: "Carbon Dioxide", correct: "true" },
      { text: "Oxygen", correct: "false" },
      { text: "Nitrogen", correct: "false" },
      { text: "Methane", correct: "false" },
    ],
  },
  {
    question: "What is the capital city of Japan?",
    answers: [
      { text: "Seoul", correct: "false" },
      { text: "Beijing", correct: "false" },
      { text: "Tokyo", correct: "true" },
      { text: "Bangkok", correct: "false" },
    ],
  },
  {
    question:
      "Which famous scientist developed the theory of general relativity?",
    answers: [
      { text: "Isaac Newton", correct: "false" },
      { text: "Albert Einstein", correct: "true" },
      { text: "Stephen Hawking", correct: "false" },
      { text: "Galileo Galilei", correct: "false" },
    ],
  },
  {
    question: "What is the largest mammal in the world?",
    answers: [
      { text: "Elephant", correct: "false" },
      { text: "Blue Whale", correct: "true" },
      { text: "Giraffe", correct: "false" },
      { text: "Hippopotamus", correct: "false" },
    ],
  },
  {
    question: "In what year did the first human land on the moon?",
    answers: [
      { text: "1969", correct: "true" },
      { text: "1975", correct: "false" },
      { text: "1983", correct: "false" },
      { text: "1991", correct: "false" },
    ],
  },
  {
    question: "What is the boiling point of water in degrees Celsius?",
    answers: [
      { text: "100°C", correct: "true" },
      { text: "0°C", correct: "false" },
      { text: "50°C", correct: "false" },
      { text: "200°C", correct: "false" },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

//when ever we are marking the answers the qsn no and score will be changing
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next"; //As the function starts the page should show Next button to move to nect page and when on next page  should show Prev
  showQuestion(); // will display the questions
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNumber = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNumber + ". " +  currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button"); //To craete a button element
    button.innerHTML = answer.text; //the value of text should be shown in button
    button.classList.add("btn"); // to add the class btn to the button created now
    answerButton.appendChild(button); //place the created answer button to the div of class answer-buttons
    if(answer.correct){
        button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
});
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButton.firstChild) {
    //suppose answrbtn has cild element which means the previous answers
    answerButton.removeChild(answerButton.firstChild);
  }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }    
    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    // Check the user's score and display an eloquent message
    let message;
    if (score > 15) {
        message = "Congratulations! You've ascended to the realm of a distinguished science wizard!";
    } else if (score < 8) {
        message = "Embark on a quest to enrich your scientific acumen; there's room for growth.";
    } else {
        message = "Commendable performance! Strive for an insatiable thirst for knowledge to soar even higher!";
    }
    questionElement.innerHTML = `You have score ${score} out of ${questions.length}. ${message}`;
    nextButton.innerHTML == "Play Again";
    nextButton.style.display = "block"
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion()
    }else{
        showScore()
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
//now call the start quiz function to display the output
startQuiz();
