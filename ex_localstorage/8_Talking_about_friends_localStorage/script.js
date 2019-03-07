x = 1;
$(function () {
	$('#descricao').bind('mouseover', function () {
		$('#descricao p ').html('Rosa está apresentando alguns amigos e a si mesma. Você pode ajudá-la? Leia as frases e escreva a palavra correta de acordo com sobre quem Rosa está falando.');
	});
	$('#descricao').bind('mouseout', function () {
		$('#descricao p ').html('Rosa is introducing herself and some friends. Can you help her? Read the sentences and write the correct word according to whom Rosa is talking about.<a href="#">Português</a>');
	});
	$('.btn-1').bind('click', function () {
		localStorage.setItem("input_1",document.getElementById('1').value);
		localStorage.setItem("input_2",document.getElementById('2').value);
		window.location.href = "page_2.html";
	});
	$('.btn-2').bind('click', function () {
		localStorage.setItem("input_3",document.getElementById('3').value);
		localStorage.setItem("input_4",document.getElementById('4').value);
		window.location.href = "page_3.html";
	});
	$('.btn-3').bind('click', function () {
		localStorage.setItem("input_5",document.getElementById('5').value);
		localStorage.setItem("input_6",document.getElementById('6').value);
		window.location.href = "page_4.html";
	});
	$('.btn-4').bind('click', function () {
		localStorage.setItem("input_7",document.getElementById('7').value);
		localStorage.setItem("input_8",document.getElementById('8').value);
		window.location.href = "page_5.html";
	});
	$('.btn-5').bind('click', function () {
		localStorage.setItem("input_9",document.getElementById('9').value);
		localStorage.setItem("input_10",document.getElementById('10').value);
		window.location.href = "result.html";
	});
	$('.btn-restart').bind('click',function(){
		for (var i = 1; i <= 10; i++) {
			localStorage.removeItem('input_'+i);
		}
		window.location.href = "index.html";

	})
});

$('.btn-result').bind('click', function (e){
	e.preventDefault();
	$('.form-6').hide();
	$('.form-7').show();

	resp1 = localStorage.getItem("input_1");
	resp2 = localStorage.getItem("input_2");
	resp3 = localStorage.getItem("input_3");
	resp4 = localStorage.getItem("input_4");
	resp5 = localStorage.getItem("input_5");
	resp6 = localStorage.getItem("input_6");
	resp7 = localStorage.getItem("input_7");
	resp8 = localStorage.getItem("input_8");			
	resp9 = localStorage.getItem("input_9");	
	resp10 = localStorage.getItem("input_10");

console.log(resp1+'-'+resp2+'-'+resp3+'-'+resp4+'-'+resp5+'-'+resp6+'-'+resp7+'-'+resp8+'-'+resp9+'-'+resp10);



	if (resp1 != '' && resp2 != '' && resp3 != '' && resp4 != '' &&resp5 != '' && resp6 != '' && resp7 != '' && resp8 != '' &&resp9 != '' && resp10 != '') {

		$('.form-7 .check').append('<h3>Confira o resultado</h3>');	

		if (resp1 == 'I\'m' || resp1 == 'im') {
			$('.form-7 .check').append('<p> Primeira atividade - Você respondeu: <strong>' + resp1 + '. </strong><em>A Resposta está Correta!</em></p>');
		}
		else if (resp1 == '') {
			$('.form-7 .check').append('<p> Primeira atividade - Você Não preencheu este campo!');
		}
		else {
			$('.form-7 .check').append('<p> Primeira atividade - Você respondeu: <strong>' + resp1 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria I\'am from Brazil.</p>');			
		}		

		if (resp2 == 'My' || resp2 == 'my') {
			$('.form-7 .check').append('<p> Segunda atividade - Você respondeu: <strong>' + resp2 + '. </strong><em>A Resposta está Correta!</em></p>');
		}
		else if (resp2 == '') {
			$('.form-7 .check').append('<p> Segunda atividade - Você Não preencheu este campo!');
		}
		else {
			$('.form-7 .check').append('<p> Segunda atividade - Você respondeu: <strong>' + resp2 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria My name\'s rosa.</p>');			
		}

		if (resp3 == 'She\'s' || resp3 == 'she\'s' || resp3 == 'shes' ) {
			$('.form-7 .check').append('<p> Terceira atividade - Você respondeu: <strong>' + resp3 + '. </strong><em>A Resposta está Correta!</em></p>');
		}
		else if (resp3 == '') {
			$('.form-7 .check').append('<p> Terceira atividade - Você Não preencheu este campo!');
		}
		else {
			$('.form-7 .check').append('<p> Terceira atividade - Você respondeu: <strong>' + resp3 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria She\'s from New York</p>');			
		}

		if (resp4 == 'Her' || resp4 == 'her') {
			$('.form-7 .check').append('<p> Quarta atividade - Você respondeu: <strong>' + resp4 + '. </strong><em>A Resposta está Correta!</em></p>');
		}
		else if (resp4 == '') {
			$('.form-7 .check').append('<p> Quarta atividade - Você Não preencheu este campo!');
		}
		else {
			$('.form-7 .check').append('<p> Quarta atividade - Você respondeu: <strong>' + resp4 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria Her name\'s Christine.</p>');			
		}

		if (resp5 == 'He\'s' || resp5 == 'hes' || resp5 == 'he\'s') {
			$('.form-7 .check').append('<p> Quinta atividade - Você respondeu: <strong>' + resp5 + '. </strong><em>A Resposta está Correta!</em></p>');
		}
		else if (resp5 == '') {
			$('.form-7 .check').append('<p> Quinta atividade - Você Não preencheu este campo!');
		}
		else {
			$('.form-7 .check').append('<p> Quinta atividade - Você respondeu: <strong>' + resp5 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria He\'s from Chicago.</p>');	
		}

		if (resp6 == 'His' || resp6 == 'his') {
			$('.form-7 .check').append('<p> Sexta atividade - Você respondeu: <strong>' + resp6 + '. </strong><em>A Resposta está Correta!</em></p>');
		}
		else if (resp6 == '') {
			$('.form-7 .check').append('<p> Sexta atividade - Você Não preencheu este campo!');
		}
		else {
			$('.form-7 .check').append('<p> Sexta atividade - Você respondeu: <strong>' + resp6 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria His name\'s John</p>');	
		}

		if (resp7 == 'We\'re' || resp7 == 'we\'re') {
			$('.form-7 .check').append('<p> Quinta atividade - Você respondeu: <strong>' + resp7 + '. </strong><em>A Resposta está Correta!</em></p>');
		}
		else if (resp7 == '') {
			$('.form-7 .check').append('<p> Quinta atividade - Você Não preencheu este campo!');
		}
		else {
			$('.form-7 .check').append('<p> Quinta atividade - Você respondeu: <strong>' + resp7 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria We\'re students at Columbus College.</p>');	
		}

		if (resp8 == 'Our' || resp8 == 'our') {
			$('.form-7 .check').append('<p> Quinta atividade - Você respondeu: <strong>' + resp8 + '. </strong><em>A Resposta está Correta!</em></p>');
		}
		else if (resp8 == '') {
			$('.form-7 .check').append('<p> Quinta atividade - Você Não preencheu este campo!');
		}
		else {
			$('.form-7 .check').append('<p> Quinta atividade - Você respondeu: <strong>' + resp8 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria Our names are Rosa and Carly.</p>');	
		}

		if (resp9 == 'They\'re'|| resp9 == 'they\'re') {
			$('.form-7 .check').append('<p> Quinta atividade - Você respondeu: <strong>' + resp9 + '. </strong><em>A Resposta está Correta!</em></p>');
		}
		else if (resp9 == '') {
			$('.form-7 .check').append('<p> Quinta atividade - Você Não preencheu este campo!');
		}
		else {
			$('.form-7 .check').append('<p> Quinta atividade - Você respondeu: <strong>' + resp9 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria They\'re from Argentina.</p>');	
		}

		if (resp10 == 'Their' || resp10 == 'their') {
			$('.form-7 .check').append('<p> Quinta atividade - Você respondeu: <strong>' + resp10 + '. </strong><em>A Resposta está Correta!</em></p>');
		}
		else if (resp10 == '') {
			$('.form-7 .check').append('<p> Quinta atividade - Você Não preencheu este campo!');
		}
		else {
			$('.form-7 .check').append('<p> Quinta atividade - Você respondeu: <strong>' + resp10 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria Their names are Fernanda and Esteban.</p>');	
		}															

	} else {
		$('.form-7 .check').html('<h3>Você não preencheu todas as questões. Clique no botão abaixo para tentar novamente!</h3>');
		$('.form-7 .check').append('<a href="index.html" role="button" class="btn btn-primary">Reiniciar</a>');

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