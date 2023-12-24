function Question (text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }
  
  Question.prototype.correctAnswer = function(choice) {
    return choice === this.answer;
  }

  function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
  }
  
  Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
  }
  
  Quiz.prototype.isEnded = function() {
    return this.questions.length === this.questionIndex; 
  }
  
  Quiz.prototype.guess = function(answer) {
    
    if(this.getQuestionIndex().correctAnswer(answer)) {
      this.score++; 
    }
    this.questionIndex++; 
  }

  var questions = [
    new Question("How many are there languages in programming ?", ["700"," 1000","1300","600"],"700"),
    new Question("The first programming language was called..", ["Fortran","COBOL","SQL","Pascal"],"Fortran"),
    new Question("Which is the richest IT company in the world?", ["Apple","Google","Samsung","Alphabet"],"Apple"),
    new Question("How many are there  active websites on the web.", ["198 million","157 million","201 million","243 million"],"198 million"),
    new Question(" What city has the most technology ?", ["Tokyo","London","Paris","Tashkent"],"Tokyo"), 
    
    ];
  
  var quiz = new Quiz(questions); 
  
  function populate() {
    if(quiz.isEnded()) {
      showScores();
  
    }
    else {
      var element = document.getElementById("question");
      element.innerHTML = quiz.getQuestionIndex().text;
  
      var choices = quiz.getQuestionIndex().choices;
      for (var i = 0; i < choices.length; i++) {
        var element = document.getElementById("choice" + i);
        element.innerHTML = choices[i];
        guess("btn" + i, choices[i]);
      }
  
      showProgress();
    }
  }
  
  populate(); 
  
  function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
      quiz.guess(guess);
      populate();
    }
  
  }
  
  function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML =  '<div class="progress-number">' +currentQuestionNumber +'</div>' + " of " + '<div class="progress-number">' + quiz.questions.length +'</div>';
  }
  
  function showScores() {
    var gameOver = "<h1>Result</h1>";  
     gameOver += "<h2 id='score' style='text-align:center;'>Your Score: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOver;
  
  }