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
		$('.text-center').html(x + ' <span lang="en">out of 6</span>');
		if (x == 7) {
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

		if (dados.length == 6) {

			resp1 = dados[0].value;
			resp2 = dados[1].value;
			resp3 = dados[2].value;
			resp4 = dados[3].value;
			resp5 = dados[4].value;
			resp6 = dados[5].value;


			$('.form-8').html('<h3>Confira o resultado</h3>');	

			if (resp1 == 'true') {
				$('.form-8').append('<p> Primeira atividade, Rosa_____from Brazil._____in the United States now._____family is from Brasil too. - Você respondeu: <strong> is - She is - Her </strong><em>A Resposta está Correta!</em></p>');
			}
			else if (resp1 == '') {
				$('.form-8').append('<p> Primeira atividade - Você Não preencheu este campo!');
			}
			else {
				$('.form-8').append('<p> Primeira atividade, Rosa_____from Brazil._____in the United States now._____family is from Brasil too. - Você respondeu: <strong>' + resp1 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria is - She is - Her.</p>');	
			}		

			if (resp2 == 'true') {
				$('.form-8').append('<p> Segunda atividade. Chicago____ in Canada.____in the USA. - Você respondeu: <strong>isn\'t - It\'s. </strong><em>A Resposta está Correta!</em></p>');
			}
			else if (resp2 == '') {
				$('.form-8').append('<p> Segunda atividade - Você Não preencheu este campo!');
			}
			else {
				$('.form-8').append('<p> Segunda atividade, Chicago____ in Canada.____in the USA. - Você respondeu: <strong>' + resp2 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria isn\'t - It\'s.</p>');			
			}

			if (resp3 == 'true') {
				$('.form-8').append('<p> Terceira atividade, Mr. Taylor and Ms. Jackson____professors at College.____friendly.____classes are great. - Você respondeu: <strong>are - They\'re - Their.</strong><em>A Resposta está Correta!</em></p>');
			}
			else if (resp3 == '') {
				$('.form-8').append('<p> Terceira atividade - Você Não preencheu este campo!');
			}
			else {
				$('.form-8').append('<p> Terceira atividade, Mr. Taylor and Ms. Jackson____professors at College.____friendly.____classes are great. - Você respondeu: <strong>' + resp3 + '.</strong><em>A Resposta está Errada!</em> A resposta correta seria are - They\'re - Their.</p>');			
			}

			if (resp4 == 'true') {
				$('.form-8').append('<p> Quarta atividade, Chicago____in Illinois.The city____near Lake Michigan. Illinois is famous for____famous lakes. - Você respondeu: <strong> is - is - its </strong><em>A Resposta está Correta!</em></p>');
			}
			else if (resp4 == '') {
				$('.form-8').append('<p> Quarta atividade - Você Não preencheu este campo!');
			}
			else {
				$('.form-8').append('<p> Quarta atividade, Chicago____in Illinois.The city____near Lake Michigan. Illinois is famous for____famous lakes. - Você respondeu: <strong>' + resp4 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria is - is - its.</p>');			
			}

			if (resp5 == 'true') {
				$('.form-8').append('<p> Quinta atividade, The capital of United States____Washington, D.C.____not distant from Chicago. - Você respondeu: <strong>is - It\'s</strong><em>A Resposta está Correta!</em></p>');
			}
			else if (resp5 == '') {
				$('.form-8').append('<p> Quinta atividade - Você Não preencheu este campo!');
			}
			else {
				$('.form-8').append('<p> Quinta atividade, The capital of United States____Washington, D.C.____not distant from Chicago. - Você respondeu: <strong>' + resp5 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria is - It\'s.</p>');	
			}

			if (resp6 == 'true') {
				$('.form-8').append('<p> Sexta atividade, Rosa and Victor____classmates.____friends. - Você respondeu: <strong>aren\'t - They\'re</strong><em>A Resposta está Correta!</em></p>');
			}
			else if (resp6 == '') {
				$('.form-8').append('<p> Sexta atividade - Você Não preencheu este campo!');
			}
			else {
				$('.form-8').append('<p> Sexta atividade, Rosa and Victor____classmates.____friends. - Você respondeu: <strong>' + resp6 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria aren\'t - They\'re.</p>');	
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