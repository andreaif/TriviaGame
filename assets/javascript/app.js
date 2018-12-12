var panel = $("#trivia");

// Question set
var questions = [{
  question: "In what place was Christmas once illegal?",
  answers: ["England","France", "Brazil", "Russia"],
  correctAnswer: "England"
}, {
  question: "In California, it is illegal to eat oranges while doing what?",
  answers: ["Gardening", "Working on a computer", "Driving", "Bathing"],
  correctAnswer: "Bathing"
}, {
  question: "Coulrophonia means fear of what?",
  answers: ["Clowns","Old people", "Sacred Things", "Jews"],
  correctAnswer: "Clowns"
}, {
  question: "At what temperature are Fahrenheit and Celsius the same?",
  answers: ["-40", "50", "0", "92"],
  correctAnswer: "50"
}, {
  question: "Which of the following is the longest running American animated TV show?",
  answers: ["Simpsons", "Pokemon", "Rugrats", "TV Funhouse"],
  correctAnswer: "Pokemon"
}];

// Variable that will hold the timer
var timer;

var trivia = {

  correct: 0,
  incorrect: 0,
  counter: 28,

  countdown: function() {
    trivia.counter--;
    $("#counter-number").html(trivia.counter);
    if (trivia.counter === 0) {
      console.log("TIME UP!");
      trivia.done();
    }
  },


  //start button 
  start: function() {

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      panel.append("<h4>" + questions[i].question + "</h4>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    panel.append("<div style='text-align: center'><button id='done'> Done</button>");
  },

  //done submit button

  done: function() {

    $.each($("input[name='question-0']:checked"), function() {

      // q1
      if ($(this).val() === questions[0].correctAnswer) {
        trivia.correct++;
      }
      else {
        trivia.incorrect++;
      }
    });

    //q2
    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        trivia.correct++;
      }
      else {
        trivia.incorrect++;
      }
    });

    //q3
    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        trivia.correct++;
      }
      else {
        trivia.incorrect++;
      }
    });

    //q4
    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        trivia.correct++;
      }
      else {
        trivia.incorrect++;
      }
    });

    //q4
    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        trivia.correct++;
      }
      else {
        trivia.incorrect++;
      }
    });

    this.result();

  },

  //results
  result: function() {

    //timer clear
    clearInterval(timer);

    $("#question h2").remove();

    panel.html("<h2>All Done!</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};

// CLICK EVENTS

$(document).on("click", "#start", function() {
  trivia.start();
});


$(document).on("click", "#done", function() {
  trivia.done();
});
