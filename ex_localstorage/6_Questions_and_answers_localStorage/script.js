x = 1;
$(function () {
	$('#descricao').bind('mouseover', function () {
		$('#descricao p ').html('Estas perguntas são fundamentais para se conhecer as pessoas. Para praticar o uso delas, relacione as respostas com as perguntas.');
	});
	$('#descricao').bind('mouseout', function () {
		$('#descricao p ').html('These are fundamental questions to get to know people. In order to practice their use, match the answers to the corresponding questions.<a href="#">Português</a>');
	});
	$('.btn-1').bind('click', function () {
		localStorage.setItem('input_1',document.getElementById('1').value);
		localStorage.setItem('input_2',document.getElementById('2').value);
		localStorage.setItem('input_3',document.getElementById('3').value);
		localStorage.setItem('input_4',document.getElementById('4').value);
		window.location.href = 'page_2.html';
	});
	$('.btn-2').bind('click', function () {
		localStorage.setItem('input_5',document.getElementById('5').value);
		localStorage.setItem('input_6',document.getElementById('6').value);
		localStorage.setItem('input_7',document.getElementById('7').value);
		window.location.href = 'result.html';
	});
	$('.btn-restart').bind('click',function(){
		for (var i = 1; i <= 7; i++) {
			localStorage.removeItem('input_'+i);
		}
		window.location.href = "index.html";

	})
});

$('.btn-result').bind('click', function (e){
	e.preventDefault();


	$('.form-3').hide();
	$('.form-4').show();



	resp1 = localStorage.getItem('input_1');
	resp2 = localStorage.getItem('input_2');
	resp3 = localStorage.getItem('input_3');
	resp4 = localStorage.getItem('input_4');
	resp5 = localStorage.getItem('input_5');
	resp6 = localStorage.getItem('input_6');
	resp7 = localStorage.getItem('input_7');

console.log(resp1+'-'+resp2+'-'+resp3+'-'+resp4+'-'+resp5+'-'+resp6+'-'+resp7)

	if (resp1 != '' || resp2 != '' || resp3 != '' || resp4 != '' || resp5 != '' || resp6 != '' || resp7 != '') {

		$('.form-4 .check').append('<h3>Confira o resultado</h3>');	

		if (resp1 == 2 || resp1 == 'dois') {
			$('.form-4 .check').append('<p> Primeira atividade - Você respondeu: <strong>' + resp1 + '. </strong><em>A Resposta está Correta!</em></p>');
		}
		else if (resp1 == '') {
			$('.form-4 .check').append('<p> Primeira atividade - Você Não preencheu este campo!');
		}
		else {
			$('.form-4 .check').append('<p> Primeira atividade - Você respondeu: <strong>' + resp1 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria 1 - Where are you from?</p>');			
		}		

		if (resp2 == 1 || resp2 == 'um') {
			$('.form-4 .check').append('<p> Segunda atividade - Você respondeu: <strong>' + resp2 + '. </strong><em>A Resposta está Correta!</em></p>');
		}
		else if (resp2 == '') {
			$('.form-4 .check').append('<p> Segunda atividade - Você Não preencheu este campo!');
		}
		else {
			$('.form-4 .check').append('<p> Segunda atividade - Você respondeu: <strong>' + resp2 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria 2 - What\'s your name?</p>');			
		}

		if (resp3 == '3' || resp3 == 'tres') {
			$('.form-4 .check').append('<p> Terceira atividade - Você respondeu: <strong>' + resp3 + '. </strong><em>A Resposta está Correta!</em></p>');
		}
		else if (resp3 == '') {
			$('.form-4 .check').append('<p> Terceira atividade - Você Não preencheu este campo!');
		}
		else {
			$('.form-4 .check').append('<p> Terceira atividade - Você respondeu: <strong>' + resp3 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria 3 -  Is Victor your host brother?</p>');			
		}

		if (resp4 == '4' || resp4 == 'quatro') {
			$('.form-4 .check').append('<p> Quarta atividade - Você respondeu: <strong>' + resp4 + '. </strong><em>A Resposta está Correta!</em></p>');
		}
		else if (resp4 == '') {
			$('.form-4 .check').append('<p> Quarta atividade - Você Não preencheu este campo!');
		}
		else {
			$('.form-4 .check').append('<p> Quarta atividade - Você respondeu: <strong>' + resp4 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria 4 - Is Whashington, D.C. the capital of the United States?</p>');			
		}

		if (resp5 == '6' || resp5 == 'seis') {
			$('.form-4 .check').append('<p> Quinta atividade - Você respondeu: <strong>' + resp5 + '. </strong><em>A Resposta está Correta!</em></p>');
		}
		else if (resp5 == '') {
			$('.form-4 .check').append('<p> Quinta atividade - Você Não preencheu este campo!');
		}
		else {
			$('.form-4 .check').append('<p> Quinta atividade - Você respondeu: <strong>' + resp5 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria 6 - No, I\'m from Germany.</p>');	
		}

		if (resp6 == '5' || resp6 == 'cinco') {
			$('.form-4 .check').append('<p> Sexta atividade - Você respondeu: <strong>' + resp6 + '. </strong><em>A Resposta está Correta!</em></p>');
		}
		else if (resp6 == '') {
			$('.form-4 .check').append('<p> Sexta atividade - Você Não preencheu este campo!');
		}
		else {
			$('.form-4 .check').append('<p> Sexta atividade - Você respondeu: <strong>' + resp6 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria 5 - It\'s rosa.souza@facul24.com.br</p>');	
		}

		if (resp7 == '7' || resp7 == 'sete') {
			$('.form-4 .check').append('<p> Sétima atividade - Você respondeu: <strong>' + resp7 + '. </strong><em>A Resposta está Correta!</em></p>');
		}
		else if (resp7 == '') {
			$('.form-4 .check').append('<p> Sétima atividade - Você Não preencheu este campo!');
		}
		else {
			$('.form-4 .check').append('<p> Sétima atividade - Você respondeu: <strong>' + resp7 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria 7 - No, she isn\'t.</p>');	
		}						

	} else {
		$('.form-4 .check').html('<h3>Você não preencheu todas as questões. Clique no botão abaixo para tentar novamente!</h3>');
		$('.form-4 .check').append('<a href="index.html" role="button" class="btn btn-primary">Reiniciar</a>');
	}	
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
