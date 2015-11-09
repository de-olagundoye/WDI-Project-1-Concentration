
$(document).ready(function(){

	var $allTheCards = $('.card')
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

	var handleClick = function (event){
		var $theCard = $(event.target);
		console.log(event.target)
		
		if ($theCard = $card1) {
			console.log("1");

		} else if ($theCard = $card2) {
			console.log("2");

		} else if ($theCard = $card3) {
			console.log("is");

		} else if ($theCard = $card4) {
			console.log("this");

		} else if ($theCard = $card5) {
			console.log("even");

		} else if ($theCard = $card6) {
			console.log("working");

		} else if ($theCard = $card7) {
			console.log("no?");

		} else if ($theCard = $card8) {
			console.log("omg.");
		}
	};

		$card1.on('click', handleClick);
		$card2.on('click', handleClick);
		$card3.on('click', handleClick);
		// $card4.on('click', handleClick);
		// $card5.on('click', handleClick);
		// $card6.on('click', handleClick);
		// $card7.on('click', handleClick);
		// $card8.on('click', handleClick);

	});