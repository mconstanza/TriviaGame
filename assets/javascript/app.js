// Triva Game
// Author: Michael Constanza

$(document).ready(function(){


	var $timeRemaining = $('#timeRemaining');
	var $question = $('#questionDiv');
	var $choice = $('.choice');
	var $choice1 = $('#choice1');
	var $choice2 = $('#choice2');
	var $choice3 = $('#choice3');
	var $choice4 = $('#choice4');

	var questions = [];


	function question(text, choices, answer, background, answerMedia){

		this.text = text;
		this.choices = choices;
		this.answer = answer;
		this.background = background;
		this.answerMedia = answerMedia;

		this.displayChoices = function(){

			// write the answer choice to the array, then set a data attribute = to the choice string
			$choice1.html(this.choices[0]);
			$choice1.data('choice', this.choices[0] );

			$choice2.html(this.choices[1]);
			$choice2.data('choice', this.choices[1] );

			$choice3.html(this.choices[2]);
			$choice3.data('choice', this.choices[2] );

			$choice4.html(this.choices[3]);
			$choice4.data('choice', this.choices[3] );
		}

	}

	var test = new question('What is my name?', ['Steve', 'Jack', 'Mike', 'Blaine'],
		'Mike')

	currentQuestion = test;

	$question.html(currentQuestion.text);
	currentQuestion.displayChoices();


	$choice.on('click', function(){

		console.log('answer: ' + currentQuestion.answer)
		console.log('choice: ' + $(this).data('choice'))

		if($(this).data('choice') == currentQuestion.answer ){
			// right answer logic
			console.log("Right answer!")
		}else {
			// wrong answer logic
			console.log("Wrong answer!")
		}	
	})



})// end of jQuery