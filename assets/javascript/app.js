// Triva Game
// Author: Michael Constanza

$(document).ready(function(){

// Declare Variable ////////////////////////////////////////////////////////////////////////////
	
	// Dom Elements /////////////////////////////
	var $timerDiv = $('#timerDiv');
	var $timeRemaining = $('#timeRemaining');
	var $question = $('#questionDiv');
	var $choice = $('.choice');
	var $choice1 = $('#choice1');
	var $choice2 = $('#choice2');
	var $choice3 = $('#choice3');
	var $choice4 = $('#choice4');
	var $start = $('#startButton');

	// Question transitioning ///////////////////
	var questions = [];
	var questionIndex = 0;

	// Game variables ///////////////////////////
	var wins = 0;
	var losses = 0;
	var questionAnswered = false;



// Timer ///////////////////////////////////////////////////////////////////////////////

	time = 10; // number of seconds for timeRemaining

	runTimer = function(){
		$timerDiv.show()
		counter = setInterval(decrement, 1000);
		$timerDiv.show();
		$timeRemaining.html(' ' + time);
	};

	decrement = function(){
		console.log(time);
		time--;
		$timeRemaining.html(' ' + time);

		if(time == 0){

			stopTimer();
			$timeRemaining.html("Time's Up!");
			time = 10; // reset the timer

		// display answer screen
		}
	}

	stopTimer = function(){
		clearInterval(counter);
		time = 10;
		
	}


// Question Object ////////////////////////////////////////////////////////////////////////////
	function question(text, choices, answer, background, answerMedia){

		console.log('timer created');

		this.text = text;
		this.choices = choices;
		this.answer = answer;
		this.background = background;
		this.answerMedia = answerMedia;

		this.displayQuestion = function(){

			$question.html(this.text);

			// write the answer choice to the array, then set a data attribute = to the choice string
			$choice1.html(this.choices[0]);
			$choice1.data('choice', this.choices[0] );

			$choice2.html(this.choices[1]);
			$choice2.data('choice', this.choices[1] );

			$choice3.html(this.choices[2]);
			$choice3.data('choice', this.choices[2] );

			$choice4.html(this.choices[3]);
			$choice4.data('choice', this.choices[3] );
		};

	};

// Question Creation //////////////////////////////////////////////////////////////////////////
	var test = new question('What is my name?', ['Steve', 'Jack', 'Mike', 'Blaine'],
		'Mike');

	var test2 = new question("what color are my eyes?", ['blue', 'brown', 'green', 'purple'], 'blue');

	questions = [test, test2];

	currentQuestion = questions[questionIndex];

// General Functions //////////////////////////////////////////////////////////////////////////
	function nextQuestion(){

		if (questionIndex == questions.length) {
			// end game
			$timerDiv.hide();
			$question.html("Game Over!")

			// display end screen

		}else {
			// go to the next question
			currentQuestion = questions[questionIndex];
			currentQuestion.displayQuestion();
			runTimer();
			questionAnswered = false;
		}

	}

// OnClick functions //////////////////////////////////////////////////////////////////////////

	// when start button is clicked ///////////////////////////////////////////////////////////
	$start.on('click', function(){
		
		nextQuestion();

	});
	
	// when an answer choice is clicked, compare it to the correct answer
	$choice.on('click', function(){

		if (questionAnswered == false){

			questionAnswered = true;
		

		// logic for correct answer

			if($(this).data('choice') == currentQuestion.answer){
				// right answer logic
				console.log("Right answer!")
				$question.html("Correct!")
				questionIndex += 1;

				stopTimer();

				setTimeout(nextQuestion, 3000);

		// logic for incorrect answer
			}else {
				// wrong answer logic
				console.log("Wrong answer!");
				$question.html("Wrong!");
				questionIndex += 1;

				stopTimer();

				setTimeout(nextQuestion, 3000);
			}	
		}
	});


	$timerDiv.hide(); // start with 'time remaining' hidden.

})// end of jQuery