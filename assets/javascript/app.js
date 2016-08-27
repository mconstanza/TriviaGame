// Triva Game
// Author: Michael Constanza

$(document).ready(function(){

// Declare Variable ////////////////////////////////////////////////////////////////////////////
	
	// Dom Elements /////////////////////////////
	var $timerDiv = $('#timerDiv');
	var $timerSpan = $('#timerSpan');
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
		$timerSpan.html('Time Remaining: ')
		counter = setInterval(decrement, 1000);
		$timerSpan.show();
		$timeRemaining.html(' ' + time);
	};

	decrement = function(){
		console.log(time);
		time--;
		$timeRemaining.html(' ' + time);

		if(time == 0){

			stopTimer();
			$timerSpan.html("Time's Up!");
			$timerSpan.css('margin-left', '45px')
			time = 10; // reset the timer
			questionIndex += 1;

			losses ++;
			
			setTimeout(function(){
				$timerSpan.css('margin-left', '0')
			}, 2000)
			setTimeout(nextQuestion, 2000);

		// display answer screen
		}
	}

	stopTimer = function(){
		clearInterval(counter);
		$timeRemaining.empty();
		time = 10;
	}


// Question Object ////////////////////////////////////////////////////////////////////////////
	function question(text, choices, answer, background, answerMedia, sound){

		console.log('timer created');

		this.text = text;
		this.choices = choices;
		this.answer = answer;
		this.background = background;
		this.answerMedia = answerMedia;
		this.sound = sound;

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


// Other Functions ////////////////////////////////////////////////////////////////////////////

	displayResults = function(){

		$choice.empty();
		$choice1.html("Correct: " + wins);
		$choice2.html("Incorrect: " + losses);
	}

	function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

// Question Creation //////////////////////////////////////////////////////////////////////////
	// var test = new question('What is my name?', ['Steve', 'Jack', 'Mike', 'Blaine'],
	// 	'Mike');

	// var test2 = new question("what color are my eyes?", ['blue', 'brown', 'green', 'purple'], 'blue');

	var movieReleased = new question("When was the first Batman movie released?", ['1966', '1943', 
		'1968', '1989'], '1943');

	var penguinName = new question("What is the Penguin's real name?", ['Oswald Cobblepot',
		'Edward Nygma', 'Norman Osborn', 'John Wayne Corben'], 'Oswald Cobblepot');

	var backBreak = new question("What villain once broke Batman's back, leaving him crippled?",
		["Ra's Al Ghul", 'Bane', 'Killer Croc', 'Mr. Freeze'], 'Bane');

	var batmanVoice = new question("Who voiced Batman in 7 different cartoon series?",
		['Kevin Conroy', 'Timothy Daly', 'Nolan North', 'Christian Bale'], "Kevin Conroy");

	var jokerVoice = new question("Who voiced the Joker in Batman: The Animated Series?",
		['Kevin Michael Richardson', 'Ceasar Romero', 'Jack Nicholson', 'Mark Hamill'], 
		'Mark Hamill');

	var killingJoke = new question("Who got shot during 'The Killing Joke' storyline?",
		['Robin', 'Alfred', 'Barbara Gordon', 'Batman'], 'Barbara Gordon');

	var quinnMeet = new question("Where did Harley Quinn meet the Joker?",
		['Gotham General', 'Arkham Asylum', 'Gotham police station', 'Bellereave'], "Arkham Asylum");

	var barbOracle = new question("Which of these was one of Barbara Gordon's aliases?",
		['B', 'The Watcher', 'Oracle', 'Huntress'], 'Oracle');

	var nightWing = new question("What was Dick Grayson's new alias after he stopped being Robin?",
		[ 'Red Hood', 'Nightwing', 'Moonknight', 'The Question'], 'Nightwing');

	var robinKilled = new question("Which Robin was killed by the Joker?", ['Dick Grayson', 'Jason Todd', 'Tim Drake', 'Damian Wayne'],
		'Jason Todd');

	var waynesKilled = new question("Who killed Bruce Wayne's parents?", ['The Joker', 'The Riddler', 'Joe Chill', 'Victor Zsaz'],
		'Joe Chill');


	questions = [ movieReleased, penguinName, backBreak, batmanVoice, jokerVoice, killingJoke, quinnMeet,
	 barbOracle, nightWing, robinKilled, waynesKilled];

	questions = shuffleArray(questions);

	currentQuestion = questions[questionIndex];

// General Functions //////////////////////////////////////////////////////////////////////////
	function nextQuestion(){

		console.log('next question')

		if (questionIndex == questions.length) {
			// end game
			$timerSpan.hide();
			$question.html("Game Over!")

			displayResults();

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

				wins ++;
				questionIndex += 1;

				stopTimer();

				setTimeout(nextQuestion, 2000);

		// logic for incorrect answer
			}else {
				// wrong answer logic
				console.log("Wrong answer!");
				$question.html("Wrong!");

				losses ++;
				questionIndex += 1;

				stopTimer();

				setTimeout(nextQuestion, 2000);
			}	
		}
	});


	$timerSpan.hide(); // start with 'time remaining' hidden.

})// end of jQuery