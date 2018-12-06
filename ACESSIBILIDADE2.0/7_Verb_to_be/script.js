x = 1;
$(function () {
	$('#descricao').bind('mouseover', function () {
		$('#descricao p ').html('O verbo to be é usado para falar sobre o que você e outras pessoas são ou estão. Leia as sentenças e escreva a opção correta.');
	});
	$('#descricao').bind('mouseout', function () {
		$('#descricao p ').html('The verb To be is used to talk about what you and other people are. Read the sentences and write the correct options.<a href="#">Português</a>');
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