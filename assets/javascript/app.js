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

	time = 15; // number of seconds for timeRemaining

	runTimer = function(){
		$timerSpan.html('Time Remaining: ')
		counter = setInterval(decrement, 1000);
		$timerSpan.show();
		$timeRemaining.html(' ' + time);
	};

	decrement = function(){

		time--;
		$timeRemaining.html(' ' + time);

		if(time == 0){

			stopTimer();
			$timerSpan.html("Time's Up!");
			$choice1.html(currentQuestion.answer)

			currentQuestion.displayImage();
			$choice1.html(currentQuestion.answer);

			time = 15; // reset the timer
			questionIndex += 1;

			losses ++;
			
			setTimeout(function(){
				$timerSpan.css('margin-left', '0')
			}, 3800)
			setTimeout(nextQuestion, 3800);

		// display answer screen
		}
	}

	stopTimer = function(){
		clearInterval(counter);
		$timeRemaining.empty();
		time = 15;
	}


// Question Object ////////////////////////////////////////////////////////////////////////////
	function question(text, choices, answer, image, sound){

		this.text = text;
		this.choices = choices;
		this.answer = answer;
		this.image = image;
		this.sound = sound;

		this.displayQuestion = function(){

			console.log("displaying question")

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

		this.displayImage = function(){

			$choice1.empty();
			$choice2.empty();
			$choice3.empty();
			$choice4.empty();

			$choice2.html(this.image);

			if (this.sound){
				$choice3.html(this.sound);
				this.sound.get(0).play();
			}
		}

	};


// Other Functions ////////////////////////////////////////////////////////////////////////////

	displayResults = function(){

		$choice.empty();
		$choice1.html("Correct: " + wins);
		$choice2.html("Incorrect: " + losses);
		$start.show();
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

	function playMusic(){

		music = Math.floor(Math.random() * playlist.length)

		$('#title').append(playlist[music]);

		playlist[music].get(0).play();

	}

// Image Creation /////////////////////////////////////////////////////////////////////////////
	
	var batShark = $("<img>", {class: 'answerImg', src: "https://media.giphy.com/media/14y3bdRzH8aT0k/giphy.gif" });

	var penguin = $("<img>", {class: 'answerImg', src: "https://media.giphy.com/media/pNAkiBswVUu52/giphy.gif"});

	var baneCat = $("<img>", {class: 'answerImg', src: "https://media.giphy.com/media/3sS46VYO8KqWY/giphy.gif"});

	var kevinConroy = $("<img>", {class: 'answerImg', src: "https://media.giphy.com/media/9ucrLlJzp3gNa/giphy.gif"});

	var kevinConroyVideo = '<iframe width="560" height="315" src="https://www.youtube.com/embed/g7jxcEqE5ic?rel=0&autoplay=1&start=5&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>'

	var hamillJoker = $("<img>", {class: 'answerImg', src: "https://media.giphy.com/media/vZ57IYRNP6CCk/giphy.gif"});

	var barb = $("<img>", {class: 'answerImg', src: "http://comicvine.gamespot.com/api/image/scale_medium/4459948-killing-joke-joker-takes-pictures.jpg"});

	var harley = $("<img>", {class: 'answerImg', src: "https://media.giphy.com/media/l2JecKRWml6Sp2ufC/giphy.gif"});

	var oracleImg = $("<img>", {class: 'answerImg', src: "http://img.cinemablend.com/cb/1/6/9/a/6/a/169a6a79e3c801441cf70525ffca193d2d8cc6a07e7eee8ab38f83035b974458.jpg"});

	var nightwing = $("<img>", {class: 'answerImg', src: "https://media.giphy.com/media/3o7ZetcJWG0LFI1n1e/giphy.gif"});

	var jasonTodd = $("<img>", {class: 'answerImg', src: "https://media.giphy.com/media/t8clt4CIBfaVO/giphy.gif"});

	var joeChill = $("<img>", {class: 'answerImg', src: "http://static8.comicvine.com/uploads/scale_small/11127/111278246/5090794-2064367790-latest"});

	var noraImg = $("<img>", {class: 'answerImg', src: "https://media.giphy.com/media/Z0yUOa1WWf5rW/giphy.gif"});

	var martha = $("<img>", {class: 'answerImg', src: "https://media.giphy.com/media/k5EfdqGN3A1eE/giphy.gif"});

	var billFingerImg = $("<img>", {class: 'answerImg', src: "https://numberonebatfan.files.wordpress.com/2015/08/bill-the-boy-wonder-site-bill-finger-trading-card-1.jpg?w=604"});
	var talia = $("<img>", {class: 'answerImg', src: "https://upload.wikimedia.org/wikipedia/en/8/8e/BATMAN,_INCORPORATED_vol.2_2_2012_variant.jpg"});
	var damian = $("<img>", {class: 'answerImg', src: "https://media0.giphy.com/media/XHcuph8mKHw52/200.gif"});
	var harveyDentImg = $("<img>", {class: 'answerImg', src: "https://media0.giphy.com/media/TvZYht7srnIiY/200.gif"});
	var scarecrow = $("<img>", {class: 'answerImg', src: "https://media.giphy.com/media/gYDW7y9GcNzC8/giphy.gif"});
	var penguinDevito = $("<img>", {class: 'answerImg', src: "https://media.giphy.com/media/fWqDxyYcnZN96/giphy.gif"});
	var matches = $("<img>", {class: 'answerImg', src: "http://images.techtimes.com/data/images/full/177577/matches-malone.jpg"});

	var riddlerQuestionImg = $("<img>", {class: 'answerImg', src: "http://images-cdn.moviepilot.com/images/c_fill,h_621,w_900/t_mp_quality/qwvvdxhehz5azpngaqof/riddle-me-this-5-actors-who-could-play-the-riddler-in-a-future-batman-movie-592657.jpg)"});

// Sound Creation /////////////////////////////////////////////////////////////////////////////

	// sound effects

	var baneInCharge = $("<audio>", {class: 'answerSound', src: "assets/sounds/baneincharge.ogg"});
	var intercomChime = $("<audio>", {class: 'answerSound', src: "assets/sounds/intercomechime.mp3"});

	var riddleMeThis = $("<audio>", {class: 'answerSound', src: "assets/sounds/riddlemethis.mp3"});

	var riddlerSolvingThisOne = $("<audio>", {class: 'answerSound', src: "assets/sounds/riddlersolvingthisone.mp3"});


	// music

	var batmanBeginsTheme = $("<audio>", {class: 'answerSound', src: "assets/sounds/batmanbeginstheme.mp3"});

	var batmanAnimatedTheme = $("<audio>", {class: 'answerSound', src: "assets/sounds/batmananimatedtheme.mp3"});

	var arkhamCity = $("<audio>", {class: 'answerSound', src: "assets/sounds/arkhamcitytheme.mp3"});

	var gothamCity = $("<audio>", {class: 'answerSound', src: "assets/sounds/gothamcity.mp3"});

	// playlist for music

	var playlist = [batmanAnimatedTheme, batmanBeginsTheme, arkhamCity];


// Question Creation //////////////////////////////////////////////////////////////////////////


	var movieReleased = new question("When was the first Batman movie released?", ['1966', '1943', 
		'1968', '1989'], '1966', batShark );

	var penguinName = new question("What is the Penguin's real name?", ['Oswald Cobblepot',
		'Edward Nygma', 'Norman Osborn', 'John Wayne Corben'], 'Oswald Cobblepot', penguin);

	var backBreak = new question("What villain once broke Batman's back, leaving him crippled?",
		["Ra's Al Ghul", 'Bane', 'Killer Croc', 'Mr. Freeze'], 'Bane', baneCat, baneInCharge);

	var batmanVoice = new question("Who voiced Batman in 7 different cartoon series?",
		['Kevin Conroy', 'Timothy Daly', 'Nolan North', 'Christian Bale'], "Kevin Conroy", kevinConroy);

	var jokerVoice = new question("Who voiced the Joker in Batman: The Animated Series?",
		['Kevin Michael Richardson', 'Ceasar Romero', 'Jack Nicholson', 'Mark Hamill'], 
		'Mark Hamill', hamillJoker);

	var killingJoke = new question("Who got shot during 'The Killing Joke' storyline?",
		['Robin', 'Alfred', 'Barbara Gordon', 'Batman'], 'Barbara Gordon', barb);

	var quinnMeet = new question("Where did Harley Quinn meet the Joker?",
		['Gotham General', 'Arkham Asylum', 'Gotham police station', 'Bellereave'], "Arkham Asylum", harley);

	var barbOracle = new question("Which of these was one of Barbara Gordon's aliases?",
		['B', 'The Watcher', 'Oracle', 'Huntress'], 'Oracle', oracleImg);

	var nightWing = new question("What was Dick Grayson's new alias after he stopped being Robin?",
		[ 'Red Hood', 'Nightwing', 'Moonknight', 'The Question'], 'Nightwing', nightwing);

	var robinKilled = new question("Which Robin was killed by the Joker?", ['Dick Grayson', 'Jason Todd', 'Tim Drake', 'Damian Wayne'],
		'Jason Todd', jasonTodd);

	var waynesKilled = new question("Who killed Bruce Wayne's parents?", ['The Joker', 'The Riddler', 'Joe Chill', 'Victor Zsaz'],
		'Joe Chill', joeChill);

	var nora = new question("What is the name of Mr. Freeze's wife that he has sworn to cure of her ailment?" , ['Emily', 'Lora', 'Elsa', 'Nora'], 'Nora', noraImg);

	var wayneNames = new question("What were the names of Bruce Wayne's parents?", ['Thomas and Martha', 'James and Elizabeth', 'George and Elaine', 'Fox and Dana'],
		'Thomas and Martha', martha);

	var billFinger = new question("Who is now acknowledged posthumously as one of the creators of Batman after years of not receiving credit?",
		[ 'Bob Kane', 'Jerry Siegel', 'Bill Finger', 'Jack Kirby'], 'Bill Finger', billFingerImg);

	var batmanChild = new question("Which of the following characters did Bruce Wayne have a son with?", ['Talia Al Ghul', 'Poison Ivy', 'Vesper Fairchild', 'Vicki Vale'],
		'Talia Al Ghul', talia);

	var batmanSonName = new question("What is Batman's son's name?", ['Dick', 'Jason', 'Tim', 'Damian'], 'Damian', damian);

	var harveyDent = new question("What former District Attorney became the villain known as Two-Face?", ['Harvey Dent', 'Edward Nygma', 'Jim Gordon', 'Jonathan Crane'],
		'Harvey Dent', harveyDentImg);

	var jonathanCrane = new question("What is the alias of Professor Jonathan Crane?", [ 'Mad Hatter', 'Riddler', 'Scarecrow', 'Hugo Strange'],
		'Scarecrow', scarecrow);

	var penguinClub = new question("What is the name of Penguin's nightclub?", ['Club Penguin', 'Iceberg Lounge', 'Umbrella Lounge', 'Club Glacier'],
		'Iceberg Lounge', penguinDevito);

	var undercover = new question("What alias does Batman often use when working undercover?", ['Don Fortunato', 'Wilson Fisk', 'Carmine Falcone', 'Matches Malone'],
		'Matches Malone', matches);

	var nygma = new question("Who is the Riddler?", ['Carmine Falcone', 'Guy Gardner', 'Vic Sage', 'Edward Nygma'], 'Edward Nygma', riddlerQuestionImg, riddleMeThis)




	questions = [ movieReleased, penguinName, backBreak, batmanVoice, jokerVoice, killingJoke, quinnMeet,
	 barbOracle, nightWing, robinKilled, waynesKilled, nora, wayneNames, billFinger, batmanChild, batmanSonName, harveyDent, jonathanCrane, penguinClub,
	 undercover, nygma];


// General Functions //////////////////////////////////////////////////////////////////////////
	function nextQuestion(){

		console.log('next question')
		console.log('question index: ' + questionIndex)


		if (questionIndex == 19) {
			// end game
			$timerSpan.hide();
			$question.html("Game Over!")

			displayResults();

			// display end screen

		}else {
			// go to the next question

			console.log('current question: ' + currentQuestion)
			currentQuestion = questions[questionIndex];
			currentQuestion.displayQuestion();
			runTimer();
			questionAnswered = false;
		}

	}


// OnClick functions //////////////////////////////////////////////////////////////////////////

	// when start button is clicked ///////////////////////////////////////////////////////////
	$start.on('click', function(){

		questionIndex = 0;
		console.log("question index after start: " + questionIndex)

		// Game variables ///////////////////////////
		wins = 0;
		losses = 0;
		questionAnswered = false;

		questions = shuffleArray(questions);

		currentQuestion = questions[questionIndex];

		$start.hide();
		
		nextQuestion();

	});
	
	// when an answer choice is clicked, compare it to the correct answer
	$choice.on('click', function(){

		if (questionAnswered == false){

			questionAnswered = true;
		

		// logic for correct answer

			if($(this).data('choice') == currentQuestion.answer){
				// right answer logic
				
				$question.html("Correct!")

				wins ++;
				questionIndex += 1;

				stopTimer();

				currentQuestion.displayImage();

				setTimeout(nextQuestion, 3800);

		// logic for incorrect answer
			}else {
				// wrong answer logic
	
				$question.html("Wrong!");

				losses ++;
				questionIndex += 1;

				stopTimer();

				currentQuestion.displayImage();

				$('#choice1:hover').css('color', '');

				$choice1.html(currentQuestion.answer);
				setTimeout(nextQuestion, 3800);
			}	
		}
	});


	$timerSpan.hide(); // start with 'time remaining' hidden.

	// playMusic();

})// end of jQuery