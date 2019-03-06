x = 1;
$(function () {
	$('#descricao').bind('mouseover', function () {
		$('#descricao p ').html('Rosa está finalmente atualizando sua família sobre sua nova vida. Leia seu e-mail e a seguir decida pro verdadeiro ou falso no final de cada frase.');
	});
	$('#descricao').bind('mouseout', function () {
		$('#descricao p ').html('Rosa is finally updating her family about her new life. Read her e-mail and decide if the sentences are true or false at the end of each sentence.<a href="#">Português</a>');
	});
$('.btn-1').bind('click', function () {
		$('.form-' + x).hide();
		x++;

		$('.form-' + x).show();
		$('.text-center').html(x + ' <span lang="en">out of 6</span>');
		if (x == 11) {
			$('#descricao').hide();
			$('.desc').hide();
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

		if (dados.length == 10) {

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

			


			$('.form-12').html('<h3>Confira o resultado</h3>');	

			if (resp1 == 'false') {
				$('.form-12').append('<p> Primeira atividade, The email is to Rosa, from her family. - Você respondeu: <strong>' + resp1 + '. </strong><em>A Resposta está Correta!</em></p>');
			}
			else if (resp1 == '') {
				$('.form-12').append('<p> Primeira atividade - Você Não preencheu este campo!');
			}
			else {
				$('.form-12').append('<p> Primeira atividade, The email is to Rosa, from her family - Você respondeu: <strong>' + resp1 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria false.</p>');			
			}		

			if (resp2 == 'true') {
				$('.form-12').append('<p> Segunda atividade. Rosa is probably having breakfast. - Você respondeu: <strong>' + resp2 + '. </strong><em>A Resposta está Correta!</em></p>');
			}
			else if (resp2 == '') {
				$('.form-12').append('<p> Segunda atividade - Você Não preencheu este campo!');
			}
			else {
				$('.form-12').append('<p> Segunda atividade, Rosa is probably having breakfast. - Você respondeu: <strong>' + resp2 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria True.</p>');			
			}

			if (resp3 == 'false') {
				$('.form-12').append('<p> Terceira atividade, Amanda is Rosa\'s new classmate. - Você respondeu: <strong>' + resp3 + '. </strong><em>A Resposta está Correta!</em></p>');
			}
			else if (resp3 == '') {
				$('.form-12').append('<p> Terceira atividade - Você Não preencheu este campo!');
			}
			else {
				$('.form-12').append('<p> Terceira atividade, Amanda is Rosa\'s new classmate. - Você respondeu: <strong>' + resp3 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria false.</p>');			
			}

			if (resp4 == 'false') {
				$('.form-12').append('<p> Quarta atividade, Carly is from New York. - Você respondeu: <strong>' + resp4 + '. </strong><em>A Resposta está Correta!</em></p>');
			}
			else if (resp4 == '') {
				$('.form-12').append('<p> Quarta atividade - Você Não preencheu este campo!');
			}
			else {
				$('.form-12').append('<p> Quarta atividade, Carly is from New York. - Você respondeu: <strong>' + resp4 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria False.</p>');			
			}

			if (resp5 == 'false') {
				$('.form-12').append('<p> Quinta atividade, Christine and Amanda are professors. - Você respondeu: <strong>' + resp5 + '. </strong><em>A Resposta está Correta!</em></p>');
			}
			else if (resp5 == '') {
				$('.form-12').append('<p> Quinta atividade - Você Não preencheu este campo!');
			}
			else {
				$('.form-12').append('<p> Quinta atividade, Christine and Amanda are professors. - Você respondeu: <strong>' + resp5 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria False.</p>');	
			}

			if (resp6 == 'true') {
				$('.form-12').append('<p> Sexta atividade, Amanda isn\'t very friendly. - Você respondeu: <strong>' + resp6 + '. </strong><em>A Resposta está Correta!</em></p>');
			}
			else if (resp6 == '') {
				$('.form-12').append('<p> Sexta atividade - Você Não preencheu este campo!');
			}
			else {
				$('.form-12').append('<p> Sexta atividade, Amanda isn\'t very friendly. - Você respondeu: <strong>' + resp6 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria True.</p>');	
			}

			if (resp7 == 'false') {
				$('.form-12').append('<p> Sétima atividade, Rosa never meets new people. - Você respondeu: <strong>' + resp7 + '. </strong><em>A Resposta está Correta!</em></p>');
			}
			else if (resp7 == '') {
				$('.form-12').append('<p> Sétima atividade - Você Não preencheu este campo!');
			}
			else {
				$('.form-12').append('<p> Sétima atividade, Rosa never meets new people. - Você respondeu: <strong>' + resp7 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria False.</p>');	
			}

			if (resp8 == 'true') {
				$('.form-12').append('<p> Oitava atividade, They are at the cafeteria. - Você respondeu: <strong>' + resp8 + '. </strong><em>A Resposta está Correta!</em></p>');
			}
			else if (resp8 == '') {
				$('.form-12').append('<p> Oitava atividade - Você Não preencheu este campo!');
			}
			else {
				$('.form-12').append('<p> Oitava atividade, They are at the cafeteria. - Você respondeu: <strong>' + resp8 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria True.</p>');	
			}

			if (resp9 == 'true') {
				$('.form-12').append('<p> Nona atividade, Ms. Jackson is good to Rosa. - Você respondeu: <strong>' + resp9 + '. </strong><em>A Resposta está Correta!</em></p>');
			}
			else if (resp9 == '') {
				$('.form-12').append('<p> Nona atividade - Você Não preencheu este campo!');
			}
			else {
				$('.form-12').append('<p> Nona atividade, Ms. Jackson is good to Rosa. - Você respondeu: <strong>' + resp9 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria True.</p>');	
			}

			if (resp10 == 'false') {
				$('.form-12').append('<p> Décima atividade, Rex is a cat. - Você respondeu: <strong>' + resp10 + '. </strong><em>A Resposta está Correta!</em></p>');
			}
			else if (resp10 == '') {
				$('.form-12').append('<p> Décima atividade - Você Não preencheu este campo!');
			}
			else {
				$('.form-12').append('<p> Décima atividade, Rex is a cat. - Você respondeu: <strong>' + resp10 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria False.</p>');	
			}															

		} else {
			$('.form-12').html('<h3>Você não preencheu todas as questões. Clique no botão abaixo para tentar novamente!</h3>');
			$('.form-12').append('<a href="index.html" role="button" class="btn btn-primary">Reiniciar</a>');

		}						
	


		$('.form-' + x).hide();
		x++;

		$('.form-' + x).show();
		$('.text-center').html(x + ' <span lang="en">out of 10</span>');
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