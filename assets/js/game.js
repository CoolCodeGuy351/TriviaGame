/* JS  and JQuery */


$(document).ready(function(){

var questions = ["What year did disneyland open","What was the name of Ariels daughter in 'The Middle Mermaid II'?","Put these princesses in chronological order:","What was the first disney film that didnt star a princess?","Which one of these is not one of the 'Seven Dwarfs'?","How many Pixar films have been released since 1995?","What is the highest grossing Disney movie of all time?","What was the 1st Disney animation to be nominated for an Oscar best picture?"];
var correctAnswer = ["1995","Meoldy","Snow White, Cinderella, Aurora, Ariel, Belle","Pinocchio","Mopey","15","Frozen","Beauty and The Beast"];
var incorrectAnswerOne = ["1950","Harmony","Snow White, Aurora, Cinderella, Belle, Ariel","Fantasia","Happy","13","The Lion King","Snow White and the Seven Dwarfs"];
var incorrectAnswerTwo = ["1963","Aria","Snow White, Cinderelle, Aurora, Belle, Ariel","Dumbo","Sneezy","14","Toy Story 2","The Lion King"];
var incorrectAnswerThree = ["1970","Viola","Snow White, Cinderella, Belle, Aurora, Ariel","Bambi","Doc","16","Finding Nemo","Up"];
var tidBit = ["The first disney park was opened in Anaheim on July 17, 1955","The Little Mermaid II: Return to Sea, released in 2000, told the story of Ariel and Eric's daughter Melody","Correct Order: Snow White (1937), Cinderella (1950), Aurora (1959), Ariel (1989), Belle (1991)","Pinocchio was released in 1940, 3 years after Snow White","There is no dwarf named Mopey","There have been 15 Pixar films released since Toy Story in 1995","In 2014 Frozen overtook Toy Story 3 as the highest grossing animated film of all time","Beauty and The Beast was the first animated movie to be nominated for best picture in 1992"];

var totalCorrect = 0;
var totalIncorrect = 0;
var clearDiv = "";
var timer;
var divOrderCounter = 0;
var totalQuestionsAsked = 0;
var restartGameCounter = 0;
counter = 30;


// Build Start Button
var startButton = $('<h2>').addClass('start-button');
startButton.text('Start').css({
	"margin-top": "15%",
	"min-width": "280px",
	"min-height": "100px",
	"display": "inline-block",
	"border": "1px solid",
	"padding-top": "28px"
});
// Render Start Button to Page
$('#main-container').html(startButton);


// On Click 
$('.start-button').on('click', function(){

	nextQuestion();

});

function triviaStart(){
	totalCorrect = 0;
	totalIncorrect =0;
	$('#main-container').html(startButton);
	$('.start-button').on('click', function(){

	nextQuestion();

});

}

function nextQuestion(){

	timer = setInterval(decrement, 1000);
	decrement();


	// have to make visible (invisible at end screen)
	$('#timer-div').html("").css('visibility' , 'visible');	

	var clearDiv = $('<span>').text("")
	$('#main-container').html("");

	var divQ = $('<div>').text(questions[0]).addClass('div-q');
	$('#main-container').append(divQ);

	/* I couldnt figure out a way to randomly populate the the divs besides using this corney if statement with a counter then manually 
	re-ordering them myself. */

	if(divOrderCounter === 1){

	var divOne = $('<div>').text(correctAnswer[0]).addClass('div-one correct-Answer');
	$('#main-container').append(divOne);

	var divTwo = $('<div>').text(incorrectAnswerOne[0]).addClass('div-two incorrect-Answer');
	$('#main-container').append(divTwo);

	var divThree = $('<div>').text(incorrectAnswerTwo[0]).addClass('div-three incorrect-Answer');
	$('#main-container').append(divThree);

	var divFour = $('<div>').text(incorrectAnswerThree[0]).addClass('div-four incorrect-Answer');
	$('#main-container').append(divFour);

	}else if(divOrderCounter === 2) {

	var divFour = $('<div>').text(incorrectAnswerThree[0]).addClass('div-four incorrect-Answer');
	$('#main-container').append(divFour);	

	var divThree = $('<div>').text(incorrectAnswerTwo[0]).addClass('div-three incorrect-Answer');
	$('#main-container').append(divThree);

	var divOne = $('<div>').text(correctAnswer[0]).addClass('div-one correct-Answer');
	$('#main-container').append(divOne);

	var divTwo = $('<div>').text(incorrectAnswerOne[0]).addClass('div-two incorrect-Answer');
	$('#main-container').append(divTwo);

	}else if(divOrderCounter === 3){

	var divTwo = $('<div>').text(incorrectAnswerOne[0]).addClass('div-two incorrect-Answer swap');
	$('#main-container').append(divTwo);

	var divThree = $('<div>').text(incorrectAnswerTwo[0]).addClass('div-three incorrect-Answer swap');
	$('#main-container').append(divThree);

	var divFour = $('<div>').text(incorrectAnswerThree[0]).addClass('div-four incorrect-Answer swap');
	$('#main-container').append(divFour);	

	var divOne = $('<div>').text(correctAnswer[0]).addClass('div-one correct-Answer swap');
	$('#main-container').append(divOne);

	}else if(divOrderCounter === 5){

	var divTwo = $('<div>').text(incorrectAnswerOne[0]).addClass('div-two incorrect-Answer swap');
	$('#main-container').append(divTwo);

	var divThree = $('<div>').text(incorrectAnswerTwo[0]).addClass('div-three incorrect-Answer swap');
	$('#main-container').append(divThree);

	var divFour = $('<div>').text(incorrectAnswerThree[0]).addClass('div-four incorrect-Answer swap');
	$('#main-container').append(divFour);	

	var divOne = $('<div>').text(correctAnswer[0]).addClass('div-one correct-Answer swap');
	$('#main-container').append(divOne);	

	}else if(divOrderCounter === 6){

	var divTwo = $('<div>').text(incorrectAnswerOne[0]).addClass('div-two incorrect-Answer swap');
	$('#main-container').append(divTwo);

	var divOne = $('<div>').text(correctAnswer[0]).addClass('div-one correct-Answer swap');
	$('#main-container').append(divOne);

	var divThree = $('<div>').text(incorrectAnswerTwo[0]).addClass('div-three incorrect-Answer swap');
	$('#main-container').append(divThree);

	var divFour = $('<div>').text(incorrectAnswerThree[0]).addClass('div-four incorrect-Answer swap');
	$('#main-container').append(divFour);	

	}  else {

	var divOne = $('<div>').text(correctAnswer[0]).addClass('div-one correct-Answer');
	$('#main-container').append(divOne);

	var divTwo = $('<div>').text(incorrectAnswerOne[0]).addClass('div-two incorrect-Answer');
	$('#main-container').append(divTwo);incorrectAnswerOne

	var divThree = $('<div>').text(incorrectAnswerTwo[0]).addClass('div-three incorrect-Answer');
	$('#main-container').append(divThree);

	var divFour = $('<div>').text(incorrectAnswerThree[0]).addClass('div-four incorrect-Answer');
	$('#main-container').append(divFour);

	}

	divOrderCounter++;
	totalQuestionsAsked++;

	questions.shift();
	correctAnswer.shift();
	incorrectAnswerOne.shift();
	incorrectAnswerTwo.shift();
	incorrectAnswerThree.shift();

	// This section registers the users choice during the trivia

	$('.correct-Answer').on('click', function(){

	clearInterval(timer);
	$('#timer-div').html("<h1>30</h1>");
	resetTimer();

	intermissionScreenCorrect();

	});

	$('.incorrect-Answer').on('click', function(){

	intermissionScreenIncorrect();

	clearInterval(timer);
	$('#timer-div').html("<h1>30</h1>");
	resetTimer();

	});


	// If user doesnt select anything its incorrect
	if (counter  === 0) {

		intermissionScreenIncorrect()
       
    }

} // function ends

// Screen that gets renderd between questions when you anwer correctly
function intermissionScreenCorrect(){

	totalCorrect++;

	$('#timer-div').html("").css('visibility' , 'hidden');

	var intermissionDiv = $('<div>').html("<h3>Correct!<br><br><br> Fun Fact: " + tidBit[0] + "</h3>").css("margin-top","15%").addClass('intermission-div');
	tidBit.shift();

	$('#main-container').html(intermissionDiv);

	if(questions[0] === undefined){

		clearInterval(timer);
		$('#timer-div').html("<h1>30</h1>");
		resetTimer();
		
		setTimeout(function(){ endScreen() }, 3000);

	} else {

		clearInterval(timer);
		$('#timer-div').html("<h1>30</h1>");
		resetTimer();
		
		setTimeout(function(){ nextQuestion() }, 3000);
	}

}

// Screen that gets renderd between questions when you anwer incorrectly
function intermissionScreenIncorrect(){

	totalIncorrect++;

	$('#timer-div').html("").css('visibility' , 'hidden');

	var intermissionDivWrong = $('<div>').html("<h3>Sorry you are incorrect!<br><br><br> Fun Fact: " + tidBit[0] + "</h3>").css("margin-top","15%").addClass('intermission-div');
	tidBit.shift();

	$('#main-container').html(intermissionDivWrong);

	if(questions[0] === undefined){

		clearInterval(timer);
		$('#timer-div').html("<h1>30</h1>");
		resetTimer();

		setTimeout(function(){ endScreen() }, 3000);
	} else {

		clearInterval(timer);
		$('#timer-div').html("<h1>30</h1>");
		resetTimer();

		setTimeout(function(){ nextQuestion() }, 3000);
	}

}

// Screen that gets rendered when all the questions are through
function endScreen(){

	
	clearInterval(timer);
	resetTimer();

	$('#timer-div').html("").css('visibility' , 'hidden');

	var endGameCorrect = $('<h3>').addClass('end-game').text('Total Correct: ' + totalCorrect );
	$('#main-container').html(endGameCorrect);

	var endGameIncorrect = $('<h3>').addClass('end-game').text('Total Incorrect: ' + totalIncorrect );
	$('#main-container').append(endGameIncorrect);

	var restart = $('<h3>').addClass('restart').text('Click here to restart');
	$('#main-container').append(restart);

	// restart on click
	$('.restart').on('click', function(){

	restartGame();

	});

}

// restarts the game after the end screen
function restartGame(){

	console.log("In the restart console.log");
	questions = ["What year did disneyland open","What was the name of Ariels daughter in 'The Middle Mermaid II'?","Put these princesses in chronological order:","What was the first disney film that didnt star a princess?","Which one of these is not one of the 'Seven Dwarfs'?","How many Pixar films have been released since 1995?","What is the highest grossing Disney movie of all time?","What was the 1st Disney animation to be nominated for an Oscar best picture?"];
	correctAnswer = ["1995","Meoldy","Snow White, Cinderella, Aurora, Ariel, Belle","Pinocchio","Mopey","15","Frozen","Beauty and The Beast"];
	incorrectAnswerOne = ["1950","Harmony","Snow White, Aurora, Cinderella, Belle, Ariel","Fantasia","Happy","13","The Lion King","Snow White and the Seven Dwarfs"];
 	incorrectAnswerTwo = ["1963","Aria","Snow White, Cinderelle, Aurora, Belle, Ariel","Dumbo","Sneezy","14","Toy Story 2","The Lion King"];
	incorrectAnswerThree = ["1970","Viola","Snow White, Cinderella, Belle, Aurora, Ariel","Bambi","Doc","16","Finding Nemo","Up"];
 	tidBit = ["The first disney park was opened in Anaheim on July 17, 1955","The Little Mermaid II: Return to Sea, released in 2000, told the story of Ariel and Eric's daughter Melody","Correct Order: Snow White (1937), Cinderella (1950), Aurora (1959), Ariel (1989), Belle (1991)","Pinocchio was released in 1940, 3 years after Snow White","There is no dwarf named Mopey","There have been 15 Pixar films released since Toy Story in 1995","In 2014 Frozen overtook Toy Story 3 as the highest grossing animated film of all time","Beauty and The Beast was the first animated movie to be nominated for best picture in 1992"];

	totalCorrect = 0;
	totalIncorrect = 0;
	clearDiv = "";
	timer;
	counter = 30;
	divOrderCounter = 0;
	totalQuestionsAsked = 0;

	triviaStart();
	clearInterval(timer);
	resetTimer();

}

///////////////////////////////// TIMER THINGS ///////////////////////////////////////

// Timer function
function decrement(){
	
    counter--;
 
    if (counter  === 0) {
       	intermissionScreenIncorrect();
        $('#timer-div').html("");
    }

    var timerDiv = $('<h1>').text(counter).addClass('timer-div');
	$('#timer-div').html(timerDiv);

}

// Timer Reset Function
function resetTimer(){
	 clearInterval(timer);
	 counter = 30;
}

});

