
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

		if ($theCard.attr('id') === $card1.attr('id')) {
			console.log("1");

		} else if ($theCard.attr('id') === $card2.attr('id')) {
			console.log("2");

		} else if ($theCard.attr('id') === $card3.attr('id')) {
			console.log("3");

		} else if ($theCard.attr('id') === $card4.attr('id')) {
			console.log("4");

		} else if ($theCard.attr('id') === $card5.attr('id')) {
			console.log("5");

		} else if ($theCard.attr('id') === $card6.attr('id')) {
			console.log("6");

		} else if ($theCard.attr('id') === $card7.attr('id')) {
			console.log("7");

		} else if ($theCard.attr('id') === $card8.attr('id')) {
			console.log("8");

		} else if ($theCard.attr('id') === $card9.attr('id')) {
			console.log("9");

		} else if ($theCard.attr('id') === $card10.attr('id')) {
			console.log("10");


		} else if ($theCard.attr('id') === $card11.attr('id')) {
			console.log("11");

		} else if ($theCard.attr('id') === $card12.attr('id')) {
			console.log("12");

		} else if ($theCard.attr('id') === $card13.attr('id')) {
			console.log("13");

		} else if ($theCard.attr('id') === $card14.attr('id')) {
			console.log("14");

		} else if ($theCard.attr('id') === $card15.attr('id')) {
			console.log("15");

		} else if ($theCard.attr('id') === $card16.attr('id')) {
			console.log("16");
		}
	};

		$card1.on('click', handleClick);
		$card2.on('click', handleClick);
		$card3.on('click', handleClick);
		$card4.on('click', handleClick);
		$card5.on('click', handleClick);
		$card6.on('click', handleClick);
		$card7.on('click', handleClick);
		$card8.on('click', handleClick);
		$card9.on('click', handleClick);
		$card10.on('click', handleClick);
		$card11.on('click', handleClick);
		$card12.on('click', handleClick);
		$card13.on('click', handleClick);
		$card14.on('click', handleClick);
		$card15.on('click', handleClick);
		$card16.on('click', handleClick);


	});