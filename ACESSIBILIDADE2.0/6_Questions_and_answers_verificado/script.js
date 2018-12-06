x = 1;
$(function () {
	$('#descricao').bind('mouseover', function () {
		$('#descricao p ').html('Estas perguntas são fundamentais para se conhecer as pessoas. Para praticar o uso delas, relacione as respostas com as perguntas.');
	});
	$('#descricao').bind('mouseout', function () {
		$('#descricao p ').html('These are fundamental questions to get to know people. In order to practice their use, match the answers to the corresponding questions.<a href="#">Português</a>');
	});
	$('.btn-1').bind('click', function () {
		$('.form-' + x).hide();
		x++;

		$('.form-' + x).show();
		$('.text-center').html(x + ' out of 3');
		if (x == 6) {
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
			$('.text-center').html(x + ' out of 3');
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