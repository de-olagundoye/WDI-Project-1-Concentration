//This says jQuery is targeting the document and when the whole page has loaded, run this function

var global = 'Hello'
var $allTheCards

var handleClick = function (event){
	console.log(event);
};

$(document).ready(function(){

	var local = 'Goodbye'
	// I want to put a click event listner on every div with the class of card
	// When you click on the card it should say the card has been clicked on
	$allTheCards = $('.card')

	$allTheCards.on('click', handleClick)
});
