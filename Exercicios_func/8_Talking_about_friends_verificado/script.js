x = 1;
$(function () {
	$('#descricao').bind('mouseover', function () {
		$('#descricao p ').html('Rosa está apresentando alguns amigos e a si mesma. Você pode ajudá-la? Leia as frases e escreva a palavra correta de acordo com sobre quem Rosa está falando.');
	});
	$('#descricao').bind('mouseout', function () {
		$('#descricao p ').html('Rosa is introducing herself and some friends. Can you help her? Read the sentences and write the correct word according to whom Rosa is talking about.<a href="#">Português</a>');
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

		if (dados.length == 10) {

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
			resp8 = dados[7].value;			
			resp9 = dados[8].value;	
			resp10 = dados[9].value;	


			$('.form-7').html('<h3>Confira o resultado</h3>');	

			if (resp1 == 'I\'m' || resp1 == 'im') {
				$('.form-7').append('<p> Primeira atividade - Você respondeu: <strong>' + resp1 + '. </strong><em>A Resposta está Correta!</em></p>');
			}
			else if (resp1 == '') {
				$('.form-7').append('<p> Primeira atividade - Você Não preencheu este campo!');
			}
			else {
				$('.form-7').append('<p> Primeira atividade - Você respondeu: <strong>' + resp1 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria I\'am from Brazil.</p>');			
			}		

			if (resp2 == 'My' || resp2 == 'my') {
				$('.form-7').append('<p> Segunda atividade - Você respondeu: <strong>' + resp2 + '. </strong><em>A Resposta está Correta!</em></p>');
			}
			else if (resp2 == '') {
				$('.form-7').append('<p> Segunda atividade - Você Não preencheu este campo!');
			}
			else {
				$('.form-7').append('<p> Segunda atividade - Você respondeu: <strong>' + resp2 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria My name\'s rosa.</p>');			
			}

			if (resp3 == 'She\'s' || resp3 == 'she\'s' || resp3 == 'shes' ) {
				$('.form-7').append('<p> Terceira atividade - Você respondeu: <strong>' + resp3 + '. </strong><em>A Resposta está Correta!</em></p>');
			}
			else if (resp3 == '') {
				$('.form-7').append('<p> Terceira atividade - Você Não preencheu este campo!');
			}
			else {
				$('.form-7').append('<p> Terceira atividade - Você respondeu: <strong>' + resp3 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria She\'s from New York</p>');			
			}

			if (resp4 == 'Her' || resp4 == 'her') {
				$('.form-7').append('<p> Quarta atividade - Você respondeu: <strong>' + resp4 + '. </strong><em>A Resposta está Correta!</em></p>');
			}
			else if (resp4 == '') {
				$('.form-7').append('<p> Quarta atividade - Você Não preencheu este campo!');
			}
			else {
				$('.form-7').append('<p> Quarta atividade - Você respondeu: <strong>' + resp4 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria Her name\'s Christine.</p>');			
			}

			if (resp5 == 'He\'s' || resp5 == 'hes' || resp5 == 'he\'s') {
				$('.form-7').append('<p> Quinta atividade - Você respondeu: <strong>' + resp5 + '. </strong><em>A Resposta está Correta!</em></p>');
			}
			else if (resp5 == '') {
				$('.form-7').append('<p> Quinta atividade - Você Não preencheu este campo!');
			}
			else {
				$('.form-7').append('<p> Quinta atividade - Você respondeu: <strong>' + resp5 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria He\'s from Chicago.</p>');	
			}

			if (resp6 == 'His' || resp6 == 'his') {
				$('.form-7').append('<p> Sexta atividade - Você respondeu: <strong>' + resp6 + '. </strong><em>A Resposta está Correta!</em></p>');
			}
			else if (resp6 == '') {
				$('.form-7').append('<p> Sexta atividade - Você Não preencheu este campo!');
			}
			else {
				$('.form-7').append('<p> Sexta atividade - Você respondeu: <strong>' + resp6 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria His name\'s John</p>');	
			}

			if (resp7 == 'We\'re' || resp7 == 'we\'re') {
				$('.form-7').append('<p> Quinta atividade - Você respondeu: <strong>' + resp7 + '. </strong><em>A Resposta está Correta!</em></p>');
			}
			else if (resp7 == '') {
				$('.form-7').append('<p> Quinta atividade - Você Não preencheu este campo!');
			}
			else {
				$('.form-7').append('<p> Quinta atividade - Você respondeu: <strong>' + resp7 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria We\'re students at Columbus College.</p>');	
			}

			if (resp8 == 'Our' || resp8 == 'our') {
				$('.form-7').append('<p> Quinta atividade - Você respondeu: <strong>' + resp8 + '. </strong><em>A Resposta está Correta!</em></p>');
			}
			else if (resp8 == '') {
				$('.form-7').append('<p> Quinta atividade - Você Não preencheu este campo!');
			}
			else {
				$('.form-7').append('<p> Quinta atividade - Você respondeu: <strong>' + resp8 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria Our names are Rosa and Carly.</p>');	
			}

			if (resp9 == 'They\'re'|| resp9 == 'they\'re') {
				$('.form-7').append('<p> Quinta atividade - Você respondeu: <strong>' + resp9 + '. </strong><em>A Resposta está Correta!</em></p>');
			}
			else if (resp9 == '') {
				$('.form-7').append('<p> Quinta atividade - Você Não preencheu este campo!');
			}
			else {
				$('.form-7').append('<p> Quinta atividade - Você respondeu: <strong>' + resp9 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria They\'re from Argentina.</p>');	
			}

			if (resp10 == 'Their' || resp10 == 'their') {
				$('.form-7').append('<p> Quinta atividade - Você respondeu: <strong>' + resp10 + '. </strong><em>A Resposta está Correta!</em></p>');
			}
			else if (resp10 == '') {
				$('.form-7').append('<p> Quinta atividade - Você Não preencheu este campo!');
			}
			else {
				$('.form-7').append('<p> Quinta atividade - Você respondeu: <strong>' + resp10 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria Their names are Fernanda and Esteban.</p>');	
			}															

		} else {
			$('.form-7').html('<h3>Você não preencheu todas as questões. Clique no botão abaixo para tentar novamente!</h3>');
			$('.form-7').append('<a href="Talking_about_friends.html" role="button" class="btn btn-primary">Reiniciar</a>');

		}						
	


		$('.form-' + x).hide();
		x++;

		$('.form-' + x).show();
		$('.text-center').html(x + ' <span lang="en">out of 4</span>');
	});

  $('#bt-enunciado').bind('keyup', function(e) {
  	console.log(e.keyCode);
  	if (e.keyCode == 13 || e.keyCode == 32) {
  	$('.btn-speeding-2').trigger('click');
  	}
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