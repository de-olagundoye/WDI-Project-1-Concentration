$(document).ready(function(){
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
	var $resetButton = $('#resetButton');
	var firstCard;
	var secondCard;

	var $allTheCards = [$card1, $card2, $card3, $card4, $card5, $card6, $card7, $card8, $card9, $card10, $card11, $card12, $card13, $card14, $card15, $card16];

	var $theImages = ['imageOne', 'imageTwo', 'imageThree', 'imageFour', 'imageFive', 'imageSix', 'imageSeven', 'imageEight', 'imageOne', 'imageTwo', 'imageThree', 'imageFour', 'imageFive', 'imageSix', 'imageSeven', 'imageEight']


	var assignImages = function() {
		for (i=0; i<$theImages.length; i++)
			$allTheCards[i].addClass($theImages[i]).on('click', handleClick);
	};


	var handleClick = function (event){
		var $theCard = $(event.target);
		firstCard = $theCard.attr('class');
		$theCard.removeClass('card');
		$theCard.off();
		$theCard.on('click', newHandleClick);
	};

	var newHandleClick = function(event){
		var $theCard = $(event.target);
		secondCard = $theCard.attr('class');
		$theCard.removeClass('card');

		if (firstCard === secondCard){
			console.log('match');
		}
	};


	var getRandomIndex = function (array) {
 		return Math.floor(Math.random() * (array.length));
	};

    var shuffleTheDeck = function(){
		for (i=0; i<$theImages.length; i++) {
    		$allTheCards[i].addClass(getRandomIndex($theImages)); {
    		return $allTheCards[i];
			}
		}
	};


	var resetPlz = function() {
		for (i=0; i<$theImages.length; i++) {
   			$allTheCards[i].addClass('card');
			shuffleTheDeck($theImages);
		}
	};

	$resetButton.on('click', resetPlz);

	assignImages();

});