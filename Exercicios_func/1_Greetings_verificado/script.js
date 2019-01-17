x = 1;
$(function () {
	$('#descricao').bind('mouseover', function () {
		$('#descricao p ').html('Qual é a saudação a ser usada em cada uma das situações a seguir? Selecione a saudação de acordo com o momento do dia e o que está acontecendo.');
	});
	$('#descricao').bind('mouseout', function () {
		$('#descricao p ').html('<p>What\'s the greeting to be used en each of the following situations? Select it according to the moment of the day and what is happening. <a href="#">Português</a></p>');
	});
	$('.btn-1').bind('click', function () {
		$('.form-' + x).hide();
		x++;

		$('.form-' + x).show();
		$('.text-center').html(x + ' out of 6');
		if (x == 6) {
			$('#descricao').hide();
			// $('.text-center').hide();
			// $('.right').attr('disabled', '');
			// $('.left').attr('disabled', '');
		}
		// $('.btn-3').bind('click', function () {
		// 	$('.form-' + x).hide();
		// 	x = 1;
		// 	$('.text-center').show();
		// 	$('.text-center').html(x + ' out of 5');
		// 	$('.form-' + x).show();
		// });
	});
});

	$('.form').bind('submit', function (e){
		e.preventDefault();
		

		$('.enunciado').hide();

		var dados = $(".form").serializeArray();

		if (dados.length == 5) {

			var resp1 = '';
			var resp2 = '';
			var resp3 = '';
			var resp4 = '';
			var resp5 = '';

			resp1 = dados[0].value;
			resp2 = dados[1].value;
			resp3 = dados[2].value;
			resp4 = dados[3].value;
			resp5 = dados[4].value;
			


			$('.form-7').html('<h3>Confira o resultado</h3>');	

			if (resp1 == 'Good evening') {
				$('.form-7').append('<p> Primeira atividade - Você respondeu: <strong>' + resp1 + '. </strong><em>A Resposta está Correta!</em></p>');
			}
			else if (resp1 == '') {
				$('.form-7').append('<p> Primeira atividade - Você Não preencheu este campo!');
			}
			else {
				$('.form-7').append('<p> Primeira atividade - Você respondeu: <strong>' + resp1 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria Good evening.</p>');			
			}		

			if (resp2 == 'Good bye') {
				$('.form-7').append('<p> Segunda atividade - Você respondeu: <strong>' + resp2 + '. </strong><em>A Resposta está Correta!</em></p>');
			}
			else if (resp2 == '') {
				$('.form-7').append('<p> Segunda atividade - Você Não preencheu este campo!');
			}
			else {
				$('.form-7').append('<p> Segunda atividade - Você respondeu: <strong>' + resp2 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria Good bye.</p>');			
			}

			if (resp3 == 'Good morning') {
				$('.form-7').append('<p> Terceira atividade - Você respondeu: <strong>' + resp3 + '. </strong><em>A Resposta está Correta!</em></p>');
			}
			else if (resp3 == '') {
				$('.form-7').append('<p> Terceira atividade - Você Não preencheu este campo!');
			}
			else {
				$('.form-7').append('<p> Terceira atividade - Você respondeu: <strong>' + resp3 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria Good morning.</p>');			
			}

			if (resp4 == 'See you tomorrow') {
				$('.form-7').append('<p> Quarta atividade - Você respondeu: <strong>' + resp4 + '. </strong><em>A Resposta está Correta!</em></p>');
			}
			else if (resp4 == '') {
				$('.form-7').append('<p> Quarta atividade - Você Não preencheu este campo!');
			}
			else {
				$('.form-7').append('<p> Quarta atividade - Você respondeu: <strong>' + resp4 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria See you tomorrow.</p>');			
			}

			if (resp5 == 'Good afternoon') {
				$('.form-7').append('<p> Quinta atividade - Você respondeu: <strong>' + resp5 + '. </strong><em>A Resposta está Correta!</em></p>');
			}
			else if (resp5 == '') {
				$('.form-7').append('<p> Quinta atividade - Você Não preencheu este campo!');
			}
			else {
				$('.form-7').append('<p> Quinta atividade - Você respondeu: <strong>' + resp5 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria Good afternoon.</p>');	
			}

		} else {
			$('.form-7').html('<h3>Você não preencheu todas as questões. Clique no botão abaixo para tentar novamente!</h3>');
			$('.form-7').append('<a href="index.html" role="button" class="btn btn-primary">Reiniciar</a>');

		}						
	


		$('.form-' + x).hide();
		x++;

		$('.form-' + x).show();
		$('.text-center').html(x + ' <span lang="en">out of 6</span>');
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