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
		$('.text-center').html(x + ' <span lang="en">out of 6</span>');
		if (x == 7) {
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

		if (dados.length == 6) {

			var resp1 = '';
			var resp2 = '';
			var resp3 = '';
			var resp4 = '';
			var resp5 = '';
			var resp6 = '';

			resp1 = dados[0].value;
			resp2 = dados[1].value;
			resp3 = dados[2].value;
			resp4 = dados[3].value;
			resp5 = dados[4].value;
			resp6 = dados[5].value;
			


			$('.form-8').html('<h3>Confira o resultado</h3>');	

			if (resp1 == 'false') {
				$('.form-8').append('<p> Primeira atividade, Her name is Souza. - Você respondeu: <strong>' + resp1 + '. </strong><em>A Resposta está Correta!</em></p>');
			}
			else if (resp1 == '') {
				$('.form-8').append('<p> Primeira atividade - Você Não preencheu este campo!');
			}
			else {
				$('.form-8').append('<p> Primeira atividade, Her name is Souza. - Você respondeu: <strong>' + resp1 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria false.</p>');			
			}		

			if (resp2 == 'true') {
				$('.form-8').append('<p> Segunda atividade. Her surname is Souza. - Você respondeu: <strong>' + resp2 + '. </strong><em>A Resposta está Correta!</em></p>');
			}
			else if (resp2 == '') {
				$('.form-8').append('<p> Segunda atividade - Você Não preencheu este campo!');
			}
			else {
				$('.form-8').append('<p> Segunda atividade, Her surname is Souza. - Você respondeu: <strong>' + resp2 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria True.</p>');			
			}

			if (resp3 == 'true') {
				$('.form-8').append('<p> Terceira atividade, She isn\'t from Brazil. - Você respondeu: <strong>' + resp3 + '. </strong><em>A Resposta está Correta!</em></p>');
			}
			else if (resp3 == '') {
				$('.form-8').append('<p> Terceira atividade - Você Não preencheu este campo!');
			}
			else {
				$('.form-8').append('<p> Terceira atividade, , She isn\'t from Brazil. - Você respondeu: <strong>' + resp3 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria true.</p>');			
			}

			if (resp4 == 'false') {
				$('.form-8').append('<p> Quarta atividade, She\'s American. - Você respondeu: <strong>' + resp4 + '. </strong><em>A Resposta está Correta!</em></p>');
			}
			else if (resp4 == '') {
				$('.form-8').append('<p> Quarta atividade - Você Não preencheu este campo!');
			}
			else {
				$('.form-8').append('<p> Quarta atividade, She\'s American. - Você respondeu: <strong>' + resp4 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria False.</p>');			
			}

			if (resp5 == 'false') {
				$('.form-8').append('<p> Quinta atividade, Her home address is rosa.souza@facul.com.br. - Você respondeu: <strong>' + resp5 + '. </strong><em>A Resposta está Correta!</em></p>');
			}
			else if (resp5 == '') {
				$('.form-8').append('<p> Quinta atividade - Você Não preencheu este campo!');
			}
			else {
				$('.form-8').append('<p> Quinta atividade, Her home address is rosa.souza@facul.com.br. - Você respondeu: <strong>' + resp5 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria False.</p>');	
			}

			if (resp6 == 'true') {
				$('.form-8').append('<p> Sexta atividade, She is twenty-two years old. - Você respondeu: <strong>' + resp6 + '. </strong><em>A Resposta está Correta!</em></p>');
			}
			else if (resp6 == '') {
				$('.form-8').append('<p> Sexta atividade - Você Não preencheu este campo!');
			}
			else {
				$('.form-8').append('<p> Sexta atividade, She is twenty-two years old. - Você respondeu: <strong>' + resp6 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria True.</p>');	
			}			

		} else {
			$('.form-8').html('<h3>Você não preencheu todas as questões. Clique no botão abaixo para tentar novamente!</h3>');
			$('.form-8').append('<a href="index.html" role="button" class="btn btn-primary">Reiniciar</a>');

		}						
	


		$('.form-' + x).hide();
		x++;

		$('.form-' + x).show();
		$('.text-center').html(x + ' <span lang="en">out of 6</span>');
	});




  $('#bt-enunciado').bind('keyup', function(e) {
  	console.log(e.keyCode);
  	if (e.keyCode == 13 || e.keyCode == 32) {
  	$('.btn-speeding-2').trigger('click');
  	}
  });

var i = 0;
$('.btn-speeding-2').bind('click', function (e) {

	if (i == 0) {
		document.getElementById('audioTitle').play();
		i++;
	} else{
		document.getElementById('audioTitle').pause();
		i--;
	}
		
});