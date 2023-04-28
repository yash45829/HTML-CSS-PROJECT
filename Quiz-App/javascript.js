let quizQuestion = document.getElementById("questions");
let submit = document.getElementById("submitbtn");
let showResults = document.getElementById("results");


const quizQuestions = [
  {
    question: "What is the capital of France?",
    answers: {
      a: "Paris",
      b: "London",
      c: "New York",
    },
    correctAnswer: "a",
  },
  {
    question: "What is the largest country in the world?",
    answers: {
      a: "Russia",
      b: "China",
      c: "United States",
    },
    correctAnswer: "a",
  },
  {
    question: "What is the currency of Japan?",
    answers: {
      a: "Yuan",
      b: "Euro",
      c: "Yen",
    },
    correctAnswer: "c",
  },
  {
    question: "What is the currency of Japan?",
    answers: {
      a: "Yuan",
      b: "Euro",
      c: "Yen",
    },
    correctAnswer: "c",
  },
];

let output = []; // output to display
let trueAnswer = []; //correct answers in database
quizQuestions.forEach((eachQuestion, questionNumber) => {
  let options = []; //option array
  for (let option in eachQuestion.answers) {
    // pushing all options of each question in options array
    options.push(
      `<div class = "question${questionNumber}"id="question${
        questionNumber + option
      }"><input type="radio" name="question${questionNumber}"value="${option}">${
        eachQuestion.answers[option]
      }</div><br>`
    );
  }
  // pushing question and corresponding options to output array
  output.push(
    `<div id ="${questionNumber}"><label>Question${questionNumber + 1} : ${
      eachQuestion.question
    }</label><br>
   ${options.join(" ")}</div>`
  );

  trueAnswer.push(eachQuestion.correctAnswer);
});
// console.log(trueAnswer)
// inserting output as innerhtml of quizQuestion
quizQuestion.innerHTML = output.join(" ");
submit.addEventListener("click", result);

function result() {
  // count of correct answers 
  correctClickedAnswers = 0;
  quizQuestions.forEach((eachQuestion, questionNumber) => {
    let selectedOption = document.querySelector(`input[name="question${questionNumber}"]:checked`);
    // making style color to black  
    const sele = `question${questionNumber}`;
    const boxes = document.querySelectorAll(`.${sele}`);
    boxes.forEach((box) => {
      box.style.color = 'black';
    });
   /******************************************/
   // logic for showing selected answer is  correct or not 
    if (selectedOption === null) {

    } else {
      if ((selectedOption || "").value === eachQuestion.correctAnswer) {
        correctClickedAnswers++;
        selectedOption.parentElement.style.color = "green";
      } else {
        selectedOption.parentElement.style.color = "red";
      }
    }

    //showing true answers after submit 
    let trueOption = document.getElementById(
      `question${questionNumber + eachQuestion.correctAnswer}`
    );
    trueOption.style.color = "green";

  });

  showResults.innerHTML = `Result : <br>${correctClickedAnswers} out of ${quizQuestions.length}`;
  showResults.style = ` padding: 10px 20px;
  border-radius: 20px;
  margin-top: 10px ;
  background-color: rgb(102, 209, 102);`
}
