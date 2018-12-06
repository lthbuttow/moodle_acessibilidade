x = 1;
$(function () {
	$('#descricao').bind('mouseover', function () {
		$('#descricao p ').html('Este texto fala sobre a vida de Rosa. Preencha os espaços com o pronome correto para que você aprenda alguns fatos sobre ela. Escreva o pronome no lugar correto.');
	});
	$('#descricao').bind('mouseout', function () {
		$('#descricao p ').html('Here is a text introducing Rosa\'s life. Fill in the blanks with the appropriate subject pronoun, so you can learn some facts about her. Write the pronoun into the correct place.<a href="#">Português</a>');
	});
	$('.btn-1').bind('click', function () {
		$('.form-' + x).hide();
		x++;

		$('.form-' + x).show();
		$('.text-center').html(x + ' out of 1');
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
			$('.text-center').html(x + ' out of 1');
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