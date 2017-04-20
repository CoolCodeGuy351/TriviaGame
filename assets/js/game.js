/* JS  and JQuery */


$(document).ready(function(){

var questions = ["What year did disneyland open","What was the name of Ariels daughter in 'The Middle Mermaid II'?","Put these princesses in correct order:","What was the first disney film that didnt star a princess?","Which one of these is not one of the 'Seven Dwarfs'?","How many Pixar films have been released since 1995?","What is the highest grossing Disney movie of all time?","What was the 1st Disney animation to be nominated for an Oscar best picture?"];
var correctAnswer = ["1995","Meoldy","Snow White, Cinderella, Aurora, Ariel, Belle","Pinocchio","Mopey","15","Frozen","Beauty and The Beast"];
var incorrectAnswerOne = ["1950","Harmony","Snow White, Aurora, Cinderella, Belle, Ariel","Fantasia","Happy","13","The Lion King","Snow White and the Seven Dwarfs"];
var incorrectAnswerTwo = ["1963","Aria","Snow White, Cinderelle, Aurora, Belle, Ariel","Dumbo","Sneezy","14","Toy Story 2","The Lion King"];
var incorrectAnswerThree = ["1970","Viola","Snow White, Cinderella, Belle, Aurora, Ariel","Bambi","Doc","16","Finding Nemo","Up"];
var tidBit = ["The first disney park was opened in Anaheim on July 17, 1955","The Little Mermaid II: Return to Sea, released in 2000, told the story of Ariel and Eric's daughter Melody","Correct Order: Snow White (1937), Cinderella (1950), Aurora (1959), Ariel (1989), Belle (1991)","Pinocchio was released in 1940, 3 years after Snow White","There is no dwarf named Mopey","There have been 15 Pixar films released since Toy Story in 1995","In 2014 Frozen overtook Toy Story 3 as the highest grossing animated film of all time","Beauty and The Beast was the first animated movie to be nominated for best picture in 1992"];

var totalCorrect = 0;
var totalIncorrect = 0;
var clearDiv = "";
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

}

function nextQuestion(){

	setInterval(decrement, 1000);
	decrement();

	var clearDiv = $('<span>').text("")
	$('#main-container').html("");

	var divQ = $('<div>').text(questions[0]).addClass('div-q');
	$('#main-container').append(divQ);

	var divs = [];
	for(var i = 0 ; i < 4 ; i++){
		
		divs.push(i)
		var divs = [];
	}
	

	var divOne = $('<div>').text(correctAnswer[0]).addClass('div-one correct-Answer');
	$('#main-container').append(divOne);

	var divTwo = $('<div>').text(incorrectAnswerOne[0]).addClass('div-two incorrect-Answer');
	$('#main-container').append(divTwo);incorrectAnswerOne

	var divThree = $('<div>').text(incorrectAnswerTwo[0]).addClass('div-three incorrect-Answer');
	$('#main-container').append(divThree);

	var divFour = $('<div>').text(incorrectAnswerThree[0]).addClass('div-four incorrect-Answer');
	$('#main-container').append(divFour);

	questions.shift();
	correctAnswer.shift();
	incorrectAnswerOne.shift();
	incorrectAnswerTwo.shift();
	incorrectAnswerThree.shift();

	$('.correct-Answer').on('click', function(){

	totalCorrect++;
	nextQuestion();

	if(questions[0] === undefined){
		endScreen()
	}

	});
	$('.incorrect-Answer').on('click', function(){

	totalIncorrect++;
	nextQuestion();

	if(questions[0] === undefined){
		endScreen()
	}

	});
//function ends below (dont delete)
}


function decrement(){
	
    counter--;

    if (counter  === 0) {
        // Display a login box
        clearInterval(decrement);
    }
    
    var timerDiv = $('<h3>').text(counter).addClass('timer-div');
	$('#timer-div').html(timerDiv);
	
}

function endScreen(){
	var endScreenClear = $('<div>').text("");
	$('#main-container').html(endScreenClear);
	var endScreenStats = $('p').text("Total Answers Correct :" )
	$('#main-container').html(endScreenStats);

}


});

