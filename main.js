$(document).ready(function(){

	// Make variables for all cards so that they can be put into an array
	var $card1 = $('#cd1');
	var $card2 = $('#cd2');
	var $card3 = $('#cd3');
	var $card4 = $('#cd4');
	var $card5 = $('#cd5');
	var $card6 = $('#cd6');
	var $card7 = $('#cd7');
	var $card8 = $('#cd8');
	var $card9 = $('#cd9');
	var $card10 = $('#cd10');
	var $card11 = $('#cd11');
	var $card12 = $('#cd12');
	var $card13 = $('#cd13');
	var $card14 = $('#cd14');
	var $card15 = $('#cd15');
	var $card16 = $('#cd16');

	// Make variables for misc. functions and functionalities
	var $resetButton = $('#resetButton');
	var cardsClicked = [];
	var cardsMatched = [];
	var pickOne;
	var pickTwo;

	// Create arrays for cards and images
	var $allTheCards = [$card1, $card2, $card3, $card4, $card5, $card6, $card7, $card8, $card9, $card10, $card11, $card12, $card13, $card14, $card15, $card16];

	var $theImages = ['imageOne', 'imageTwo', 'imageThree', 'imageFour', 'imageFive', 'imageSix', 'imageSeven', 'imageEight', 'imageOne', 'imageTwo', 'imageThree', 'imageFour', 'imageFive', 'imageSix', 'imageSeven', 'imageEight'];

	// Randomly assign images to the cards
	assignImages = function() {
		for (var i=0; i<$theImages.length; i++)
			$allTheCards[i].addClass($theImages[i]).on('click', handleClick);
	};

	// Event handler for click. I'd like to store the 'clicks' in variables and then compare them to one another to create a match on the game board.

	// Robert says an array is better
	var handleClick = function (event){
		var $target = $(event.target);
			$target.removeClass('card');
			cardsClicked.push($target);

			var pickOne = cardsClicked[0]
			var pickTwo = cardsClicked[1];

			if (cardsClicked.length === 2) {
				cardsMatched.push($target);

			if (cardsClicked[0].attr('class') == cardsClicked[1].attr('class')) {
				$target.off('click', handleClick);
				cardsMatched.push(pickOne, pickTwo);
				cardsClicked.splice(0, 2);

			} else if (cardsClicked[0] !== cardsClicked[1]) {
				window.setTimeout(function() {
					pickOne.addClass('card');
					pickTwo.addClass('card');
				}, 500);
				cardsClicked.splice(0, 2);

			} else if (cardsMatched.length === 24) {
				console.log ("you win!");
			}
		}
	};

	// I need a reset button to restart the game. I do not want it to refresh the page. But to reassign the cards to the original "back" class

	// I also need to clear the cards matched array or they won't be able to be clicked in the next round
	var resetPlz = function() {
		for (var i=0; i<$theImages.length; i++) {
   			$allTheCards[i].addClass('card');
   			cardsMatched = [];
		}
	};

	$resetButton.on('click', resetPlz);

	// Assign images at the end.
	assignImages();

});