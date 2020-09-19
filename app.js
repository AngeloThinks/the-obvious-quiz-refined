const store = {
  questions: [
    {
      // id: cuid(),
      question: "What color is the sky?",
      answers: ["Blue", "Green", "Yellow", "Red"],
      correctAnswer: "Blue",
    },
    {
      // id: cuid(),
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
      // id: cuid(),
      question: "How many birds can you kill with one stone?",
      answers: ["2", "1", "8", "0"],
      correctAnswer: "2",
    },
    {
      // id: cuid(),
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
      // id: cuid(),
      question: "What is the thief of time?",
      answers: ["Laundry day", "The Sun", "Procrastination", "Playstation 4"],
      correctAnswer: "Procrastination",
    },
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0,
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
  return `<div class="card">
  <h2>${item.question}</h2>
  <form id="radioB">
  <input type="radio" id="answer" name="answer" value=${item.answers[0]}>
  <label id="answer" for="${item.answers[0]}">${item.answers[0]}</label><br>
  <input type="radio" id="answer" name="answer" value=${item.answers[1]}>
  <label id="answer" for="${item.answers[1]}">${item.answers[1]}</label><br>
  <input type="radio" id="answer" name="answer" value=${item.answers[2]}>
  <label id="answer" for="${item.answers[2]}">${item.answers[2]}</label><br>
  <input type="radio" id="answer" name="answer" value=${item.answers[3]}>
  <label id="answer" for="${item.answers[3]}">${item.answers[3]}</label><br>
  <button id="submit" type="submit">Submit</button>
  <label id="counter">${store.questionNumber + 1} out of ${store.questions.length}</label>
  <label id="score">Correct: ${store.score}</label>
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

function handleRadioButton() {
  $("#radioB").change(function () {
    // console.log("YES!");
  });
}

function handleSubmitButton() {
  $("main").on("click", "#submit", function (evt) {
    evt.preventDefault();
    let nextQuestion = generateQuestion(store.questions[store.questionNumber]);
    let selectedAnswer = $("input[name='answer']:checked").val();
    console.log($("input[name='answer']:checked").val());
    // console.log(store.questions[questionNumber]);
    checkAnswer(selectedAnswer);
    store.questionNumber++;
    render(nextQuestion);
  });
}

function checkAnswer (answer){
  console.log(store.questions[store.questionNumber].correctAnswer);
  store.questions[store.questionNumber].correctAnswer === answer ? store.score++:null;
}
//Things left to do:
//
//
function render(html) {
  $("main").html(html);
}

function main() {
  console.log(store.questions);
  handleStartQuiz();
  let startPage = generateStartPageString();
  render(startPage);
  handleSubmitButton();
  handleRadioButton();
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
