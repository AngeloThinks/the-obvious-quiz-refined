const store = {
  questions: [
    {
      question: "What color is the sky?",
      answers: ["Blue", "Green", "Yellow", "Red"],
      correctAnswer: "Blue",
      
    },
    {
      question: "Who was the 1st President of the United States?",
      answers: [
        "George Lucas",
        "George Clooney",
        "George Michael",
        "George Washington",
      ],
      correctAnswer: "George Washington",
      
    },
    {
      question: "How many birds can you kill with one stone?",
      answers: ["2", "1", "8", "0"],
      correctAnswer: "2",
      
    },
    {
      question: "When in...",
      answers: [
        "Rome, do as the Romans do.",
        "Texas, eat BBQ.",
        "trouble, seek a double.",
        "flight, jump out of the plane.",
      ],
      correctAnswer: "Rome, do as the Romans do.",
      
    },
    {
      question: "What is the thief of time?",
      answers: ["Laundry day", "The Sun", "Procrastination", "Playstation 4"],
      correctAnswer: "Procrastination",
      
    },
  ],
  quizStarted: false,
  answered: false,
  questionNumber: 0,
  score: 0,
  correct: false
};

function generateStartPageString() {
  console.log("this is running");
  return `<div class="card">
  <h2>Hello There</h2>
  <p>Push the button below</p>
  <button id="start">Yes, this one</button>
</div>`;
}

function generateQuestion(item) {
  let qString = '';
  for( let i = 0; i < item.answers.length; i++) { 
    if(i === 0 || i === 2){
      console.log(item.answers[i]);
      qString +=`<div class="row"><input type="radio" id="answer" name="answer" value="${item.answers[i]}">
        <label id="answer" for="${item.answers[i]}">${item.answers[i]}</label>`; 
    }else {
      qString +=`<input type="radio" id="answer" name="answer" value="${item.answers[i]}">
        <label id="answer" for="${item.answers[i]}">${item.answers[i]}</label></div>`;      
    }
  }

  return `<div class="card">
    <h2>${item.question}</h2>
    <form>
    <div class="radio">
      ${qString}
      </div>
      <div id="status">
      <label id="counter">${store.questionNumber + 1} out of ${store.questions.length}</label>
      <label id="score">Correct: ${store.score}</label>
      </div>
    </form>
  </div>`;
}

//handleStartQuiz will generate the questions
function handleStartQuiz() {
  $("main").on("click", "#start", function (evt) {
    store.quizStarted = true;
    let question = generateQuestion(store.questions[store.questionNumber]);
    render(question);
  });
}

function handleRestartQuiz(){
  $("main").on("click", "#restart", function(evt) {
    store.answered = false;
    store.correct = false;
    store.questionNumber= 0;
    store.score = 0;
    render(generateStartPageString());
  });
}

function handleRadioButton() {
  $("main").on("click", "#answer",function () {
    let answer = $(this).text();
    console.log(answer);
    checkAnswer(answer);
  });
}

function handleNextButton() {
  $("main").on("click", ".next", function (evt) {
    evt.preventDefault();
    store.questionNumber++;
    store.answered = false;
    let nextScreen = '';
    if(store.questionNumber < store.questions.length){
      nextScreen += generateQuestion(store.questions[store.questionNumber]);
    }else{
      nextScreen += `<div class="card end"><button id="restart">Take Quiz Again?</button></div>`;
    }
    render(nextScreen);
  });
}

function checkAnswer (answer){
  store.answered = true;
  if(store.questions[store.questionNumber].correctAnswer === answer){
    store.score++;
    store.correct = true;
    render(generateResultString(answer));
  } else {
    store.correct = false;
    render(generateResultString(answer));
  }
}

function generateResultString(answer){
  return `
  <div class="card">
  <form>
  <h2>${store.correct? 'Solid Answer!' : 'Not quite...'}</h2>
  <h3>Correct Answer: ${store.questions[store.questionNumber].correctAnswer}</h3>
  <h3>Your Answer: ${answer}</h3>
  <button class="next">Next</button>
  <div id="status">
  <label id="counter">${store.questionNumber + 1} out of ${store.questions.length}</label>
  <label id="score">Correct: ${store.score}</label>
  </div>
  </form>
  </div>
  `
}

const keyboardfunc = function(){
  function eventHandler(event) {
    console.log(event.type);
    console.log(event.keyCode);
    console.log(string.fromCharCode(event.keyCode));
  }
  const textAreaElement = document.getElementsByTagName('textArea')[0];
  textAreaElement.addEventListener('keypress',eventHandler,false);
  textAreaElement.addEventListener('keydown',eventHandler,false);
  textAreaElement.addEventListener('keyup',eventHandler,false);

};

function render(html) {
  $("main").html(html);
}

function main() {
  console.log(store.questions);
  handleStartQuiz();
  let startPage = generateStartPageString();
  render(startPage);
  handleNextButton();
  handleRadioButton();
  handleRestartQuiz();
  keyboardfunc();
}

$(main);

/**
 *
 * Technical requirements:
 *
 * Your app should include a render() function, that regenerates the view each time the store is updated.
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 *
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// function generateButton{
//   return `<button id="start-btn" class="start-btn btn">Start</button>
//   <button id="next-btn" class="next-btn btn hide">Next</button>
// <div id="answer-buttons" class="btn-grid">
//   <button class="btn">Answer 1</button>
//   <button class="btn">Answer 2</button>
//   <button class="btn">Answer 3</button>
//   <button class="btn">Answer 4</button>
// </div>
// </div>
// <div class="controls"> }`;

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
