x = 1;
$(function () {
	$('#descricao').bind('mouseover', function () {
		$('#descricao p ').html('A carteira estudantil é um documento essencial. É importante que você sempre a tenha. Leia o cartão estudantil de Rosa e diga se as frases são verdadeiras ou falsas de acordo com a informação contida na carteirinha.');
	});
	$('#descricao').bind('mouseout', function () {
		$('#descricao p ').html('The student card is an essential document. It\'s important that you always keep it with you. Read Rosa\'s student ID card and say if the sentences are true or false according to the information on the card.<a href="#">Português</a>');
	});
	$('.btn-1').bind('click', function () {
		$('.form-' + x).hide();
		x++;

		$('.form-' + x).show();
		$('.text-center').html(x + ' out of 6');
		if (x == 7) {
			$('#descricao').hide();
			$('.col-md-4').hide();
			$('.text-center').hide();
			$('.right').attr('disabled', '');
			$('.left').attr('disabled', '');
		}
		$('.btn-3').bind('click', function () {
			$('.form-' + x).hide();
			x = 1;
			$('.text-center').show();
			$('.text-center').html(x + ' out of 6');
			$('.form-' + x).show();
		});
	});
});


var i = 0;
$('.btn-speeding-2').on('click', function () {
	if (i == 0) {
		document.getElementById('audioTitle').play();
		i++;
	} else{
		document.getElementById('audioTitle').pause();
		i--;
	}

});