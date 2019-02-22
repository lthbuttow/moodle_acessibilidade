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
		$('.text-center').html(x + ' <span lang="en">out of 6</span>');
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

		console.log(dados);

		if (dados.length == 7) {

			var resp1 = '';
			var resp2 = '';
			var resp3 = '';
			var resp4 = '';
			var resp5 = '';
			var resp6 = '';
			var resp7 = '';			

			resp1 = dados[0].value;
			resp2 = dados[1].value;
			resp3 = dados[2].value;
			resp4 = dados[3].value;
			resp5 = dados[4].value;
			resp6 = dados[5].value;
			resp7 = dados[6].value;			
			


			$('.form-4').html('<h3>Confira o resultado</h3>');	

			if (resp1 == 1 || resp1 == 'um') {
				$('.form-4').append('<p> Primeiro espaço - Você respondeu: <strong>' + resp1 + '. </strong><em>A Resposta está Correta!</em></p>');
			}
			else if (resp1 == '') {
				$('.form-4').append('<p> Primeiro espaço - Você Não preencheu este campo!');
			}
			else {
				$('.form-4').append('<p> Primeiro espaço - Você respondeu: <strong>' + resp1 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria 1></p>');			
			}		

			if (resp2 == 'Good bye') {
				$('.form-4').append('<p> Segunda atividade - Você respondeu: <strong>' + resp2 + '. </strong><em>A Resposta está Correta!</em></p>');
			}
			else if (resp2 == '') {
				$('.form-4').append('<p> Segunda atividade - Você Não preencheu este campo!');
			}
			else {
				$('.form-4').append('<p> Segunda atividade - Você respondeu: <strong>' + resp2 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria Good bye.</p>');			
			}

			if (resp3 == 'Good morning') {
				$('.form-4').append('<p> Terceira atividade - Você respondeu: <strong>' + resp3 + '. </strong><em>A Resposta está Correta!</em></p>');
			}
			else if (resp3 == '') {
				$('.form-4').append('<p> Terceira atividade - Você Não preencheu este campo!');
			}
			else {
				$('.form-4').append('<p> Terceira atividade - Você respondeu: <strong>' + resp3 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria Good morning.</p>');			
			}

			if (resp4 == 'See you tomorrow') {
				$('.form-4').append('<p> Quarta atividade - Você respondeu: <strong>' + resp4 + '. </strong><em>A Resposta está Correta!</em></p>');
			}
			else if (resp4 == '') {
				$('.form-4').append('<p> Quarta atividade - Você Não preencheu este campo!');
			}
			else {
				$('.form-4').append('<p> Quarta atividade - Você respondeu: <strong>' + resp4 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria See you tomorrow.</p>');			
			}

			if (resp5 == 'Good afternoon') {
				$('.form-4').append('<p> Quinta atividade - Você respondeu: <strong>' + resp5 + '. </strong><em>A Resposta está Correta!</em></p>');
			}
			else if (resp5 == '') {
				$('.form-4').append('<p> Quinta atividade - Você Não preencheu este campo!');
			}
			else {
				$('.form-4').append('<p> Quinta atividade - Você respondeu: <strong>' + resp5 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria Good afternoon.</p>');	
			}

		} else {
			$('.form-4').html('<h3>Você não preencheu todas as questões. Clique no botão abaixo para tentar novamente!</h3>');
			$('.form-4').append('<a href="Questions_and_answers.html" role="button" class="btn btn-primary">Reiniciar</a>');

		}						
	


		$('.form-' + x).hide();
		x++;

		$('.form-' + x).show();
		$('.text-center').html(x + ' <span lang="en">out of 4</span>');
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