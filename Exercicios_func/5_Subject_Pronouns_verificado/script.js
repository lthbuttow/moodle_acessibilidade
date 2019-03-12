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

		if (dados.length == 7) {

			resp1 = dados[0].value;
			resp2 = dados[1].value;
			resp3 = dados[2].value;
			resp4 = dados[3].value;
			resp5 = dados[4].value;
			resp6 = dados[5].value;
			resp7 = dados[6].value;


			$('.form-3').html('<h3>Confira o resultado</h3>');	

			if (resp1 == 'I' || resp1 == 'i' ) {
				$('.form-3').append('<p> Primeiro campo, Você respondeu: <strong>'+ resp1 +'</strong><em>A Resposta está Correta!</em></p>');
			}
			else if (resp1 == '') {
				$('.form-3').append('<p> Primeiro campo - Você Não preencheu este campo!');
			}
			else {
				$('.form-3').append('<p> Primeiro campo, Você respondeu: <strong>' + resp1 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria I.</p>');	
			}		

			if (resp2 == 'She' || resp2 == 'she' ) {
				$('.form-3').append('<p> Segundo campo, Você respondeu: <strong>'+ resp2 +'</strong><em>A Resposta está Correta!</em></p>');
			}
			else if (resp2 == '') {
				$('.form-3').append('<p> Segundo campo - Você Não preencheu este campo!');
			}
			else {
				$('.form-3').append('<p> Segundo campo, Você respondeu: <strong>' + resp2 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria She.</p>');	
			}	

			if (resp3 == 'We' || resp3 == 'we' ) {
				$('.form-3').append('<p> Terceiro campo, Você respondeu: <strong>'+ resp3 +'</strong><em>A Resposta está Correta!</em></p>');
			}
			else if (resp3 == '') {
				$('.form-3').append('<p> Terceiro campo - Você Não preencheu este campo!');
			}
			else {
				$('.form-3').append('<p> Terceiro campo, Você respondeu: <strong>' + resp3 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria We.</p>');	
			}

			if (resp4 == 'They' || resp4 == 'they' ) {
				$('.form-3').append('<p> Quarto campo, Você respondeu: <strong>'+ resp4 +'</strong><em>A Resposta está Correta!</em></p>');
			}
			else if (resp4 == '') {
				$('.form-3').append('<p> Quarto campo - Você Não preencheu este campo!');
			}
			else {
				$('.form-3').append('<p> Quarto campo, Você respondeu: <strong>' + resp4 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria they.</p>');	
			}

			if (resp5 == 'We' || resp5 == 'we' ) {
				$('.form-3').append('<p> Quinto campo, Você respondeu: <strong>'+ resp5 +'</strong><em>A Resposta está Correta!</em></p>');
			}
			else if (resp5 == '') {
				$('.form-3').append('<p> Quinto campo - Você Não preencheu este campo!');
			}
			else {
				$('.form-3').append('<p> Quinto campo, Você respondeu: <strong>' + resp5 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria We.</p>');	
			}

			if (resp6 == 'She' || resp6 == 'she' ) {
				$('.form-3').append('<p> Sexto campo, Você respondeu: <strong>'+ resp6 +'</strong><em>A Resposta está Correta!</em></p>');
			}
			else if (resp6 == '') {
				$('.form-3').append('<p> Sexto campo - Você Não preencheu este campo!');
			}
			else {
				$('.form-3').append('<p> Sexto campo, Você respondeu: <strong>' + resp6 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria She.</p>');	
			}

			if (resp7 == 'It' || resp7 == 'it' ) {
				$('.form-3').append('<p> Sétimo campo, Você respondeu: <strong>'+ resp7 +'</strong><em>A Resposta está Correta!</em></p>');
			}
			else if (resp7 == '') {
				$('.form-3').append('<p> Sétimo campo - Você Não preencheu este campo!');
			}
			else {
				$('.form-3').append('<p> Sétimo campo, Você respondeu: <strong>' + resp7 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria it.</p>');	
			}												

		} else {
			$('.form-3').html('<h3>Você não preencheu todas as questões. Clique no botão abaixo para tentar novamente!</h3>');
			$('.form-3').append('<a href="index.html" role="button" class="btn btn-primary">Reiniciar</a>');

		}						
	

		$('.form-' + x).hide();
		x++;

		$('.form-' + x).show();
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