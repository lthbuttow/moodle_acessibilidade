x = 1;
$(function () {
	$('#descricao').bind('mouseover', function () {
		$('#descricao p ').html('Entender nomes e nacionalidades pode ser complicado. Vamos checar sua habilidade em ouvi-los. Ouça as conversas e clique na resposta correta.');
	});
	$('#descricao').bind('mouseout', function () {
		$('#descricao p ').html('Understanding names and nationalities can be tricky. Let\'s check your ability and listen to some. Listen to the conversations and click on the correct answer.<a href="#">Português</a>');
	});
	$('.btn-1').bind('click', function () {
		$('.form-' + x).hide();
		x++;

		$('.form-' + x).show();
		$('.text-center').html(x + ' out of 5');
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
			$('.text-center').html(x + ' out of 5');
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