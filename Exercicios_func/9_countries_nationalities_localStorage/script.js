x = 1;
$(function () {
	$('#descricao').bind('mouseover', function () {
		$('#descricao p ').html('Momento geografia! Olhe as bandeiras com diferentes países ao redor do mundo e escreva o nome da nacionalidade correspondente. Boa viagem!');
	});
	$('#descricao').bind('mouseout', function () {
		$('#descricao p ').html('Geography time! Look at the flags from different countries around the world and write the name of the corresponding nationality. Have a good trip!<a href="#">Português</a>');
	});
	$('.btn-1').bind('click', function () {
		localStorage.setItem('input_1', document.getElementById('bra').value);
		localStorage.setItem('input_2', document.getElementById('per').value);
		localStorage.setItem('input_3', document.getElementById('arg').value);
		window.location.href = "page_2.html";
	});
	$('.btn-2').bind('click', function () {
		localStorage.setItem('input_4', document.getElementById('uk').value);
		localStorage.setItem('input_5', document.getElementById('fra').value);
		localStorage.setItem('input_6', document.getElementById('ger').value);
		window.location.href = "page_3.html";
	});
	$('.btn-3').bind('click', function () {
		localStorage.setItem('input_7', document.getElementById('jap').value);
		localStorage.setItem('input_8', document.getElementById('ita').value);
		localStorage.setItem('input_9', document.getElementById('can').value);
		window.location.href = "page_4.html";
	});
	$('.btn-4').bind('click', function () {
		localStorage.setItem('input_10', document.getElementById('usa').value);
		localStorage.setItem('input_11', document.getElementById('mex').value);
		window.location.href = "result.html";
	});
	$('.btn-restart').bind('click',function(){
		for (var i = 1; i <= 11; i++) {
			localStorage.removeItem('input_'+i);
		}
		window.location.href = "index.html";

	})
});

	$(".btn-result").bind('click', function (e){
		e.preventDefault();
		$('.form-5').hide();
		$('.form-6').show();
		
		
		var resp1 = localStorage.getItem('input_1');
		var resp2 = localStorage.getItem('input_2');
		var resp3 = localStorage.getItem('input_3');
		var resp4 = localStorage.getItem('input_4');
		var resp5 = localStorage.getItem('input_5');
		var resp6 = localStorage.getItem('input_6');
		var resp7 = localStorage.getItem('input_7');
		var resp8 = localStorage.getItem('input_8');
		var resp9 = localStorage.getItem('input_9');
		var resp10 = localStorage.getItem('input_10');
		var resp11 = localStorage.getItem('input_11');

		$('.form-6').append('<h3>Confira o resultado</h3>');

		// Primeira Resposta
		if (resp1 == 'Brazilian' || resp1 == 'brazilian' ) {
			$('.form-6').append('<p> Primeira atividade - Você respondeu: <strong>' + resp1 + '. </strong><em>A Resposta está Correta!</em></p>');
		}
		else if (resp1 == '') {
			$('.form-6').append('<p> Primeira atividade - Você Não preencheu este campo!');
		}
		else {
			$('.form-6').append('<p> Primeira atividade - Você respondeu: <strong>' + resp1 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria Brazilian.</p>');			
		}
		// Fim				

		// Segunda Resposta
		if (resp2 == 'Peruvian' || resp2 == 'peruvian' ) {
			$('.form-6').append('<p> Segunda atividade - Você respondeu: <strong>' + resp2 + '. </strong><em>A Resposta está Correta!</em></p>');
		}
		else if (resp2 == '') {
			$('.form-6').append('<p> Segunda atividade - Você Não preencheu este campo!');
		}
		else {
			$('.form-6').append('<p> Segunda atividade - Você respondeu: <strong>' + resp2 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria Peruvian.</p>');			
		}
		// Fim		

		// Terceira Resposta
		if (resp3 == 'Argentinian' || resp3 == 'argentinian' ) {
			$('.form-6').append('<p> Terceira atividade - Você respondeu: <strong>' + resp3 + '. </strong><em>A Resposta está Correta!</em></p>');
		}
		else if (resp3 == '') {
			$('.form-6').append('<p> Terceira atividade - Você Não preencheu este campo!');
		}
		else {
			$('.form-6').append('<p> Terceira atividade - Você respondeu: <strong>' + resp3 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria Argentinian.</p>');			
		}
		// Fim

		// Quarta Resposta
		if (resp4 == 'British' || resp4 == 'british' ) {
			$('.form-6').append('<p> Quarta atividade - Você respondeu: <strong>' + resp4 + '. </strong><em>A Resposta está Correta!</em></p>');
		}
		else if (resp4 == '') {
			$('.form-6').append('<p> Quarta atividade - Você Não preencheu este campo!');
		}
		else {
			$('.form-6').append('<p> Quarta atividade - Você respondeu: <strong>' + resp4 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria British.</p>');		
		}
		// Fim

		// Quinta Resposta
		if (resp5 == 'French' || resp5 == 'french' ) {
			$('.form-6').append('<p> Quinta atividade - Você respondeu: <strong>' + resp5 + '. </strong><em>A Resposta está Correta!</em></p>');
		}
		else if (resp5 == '') {
			$('.form-6').append('<p> Quinta atividade - Você Não preencheu este campo!');
		}
		else {
			$('.form-6').append('<p> Quinta atividade - Você respondeu: <strong>' + resp5 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria French.</p>');		
		}
		// Fim		

		// Sexta Resposta
		if (resp6 == 'German' || resp6 == 'german' ) {
			$('.form-6').append('<p> Sexta atividade - Você respondeu: <strong>' + resp6 + '. </strong><em>A Resposta está Correta!</em></p>');
		}
		else if (resp6 == '') {
			$('.form-6').append('<p> Sexta atividade - Você Não preencheu este campo!');
		}
		else {
			$('.form-6').append('<p> Sexta atividade - Você respondeu: <strong>' + resp6 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria German.</p>');		
		}
		// Fim

		// Sétima Resposta
		if (resp7 == 'Japanese' || resp7 == 'japanese' ) {
			$('.form-6').append('<p> Sétima atividade - Você respondeu: <strong>' + resp7 + '. </strong><em>A Resposta está Correta!</em></p>');
		}
		else if (resp7 == '') {
			$('.form-6').append('<p> Sétima atividade - Você Não preencheu este campo!');
		}
		else {
			$('.form-6').append('<p> Sétima atividade - Você respondeu: <strong>' + resp7 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria Japanese.</p>');		
		}
		// Fim

		// Oitava Resposta
		if (resp8 == 'Italian' || resp8 == 'italian' ) {
			$('.form-6').append('<p> Oitava atividade - Você respondeu: <strong>' + resp8 + '. </strong><em>A Resposta está Correta!</em></p>');
		}
		else if (resp8 == '') {
			$('.form-6').append('<p> Oitava atividade - Você Não preencheu este campo!');
		}
		else {
			$('.form-6').append('<p> Oitava atividade - Você respondeu: <strong>' + resp8 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria Italian.</p>');		
		}
		// Fim		

		// Nona Resposta
		if (resp9 == 'Canadian' || resp9 == 'canadian' ) {
			$('.form-6').append('<p> Nona atividade - Você respondeu: <strong>' + resp9 + '. </strong><em>A Resposta está Correta!</em></p>');
		}
		else if (resp9 == '') {
			$('.form-6').append('<p> Nona atividade - Você Não preencheu este campo!');
		}
		else {
			$('.form-6').append('<p> Nona atividade - Você respondeu: <strong>' + resp9 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria Canadian.</p>');		
		}
		// Fim			

		// Décima Resposta
		if (resp10 == 'American' || resp10 == 'american' ) {
			$('.form-6').append('<p> Décima atividade - Você respondeu: <strong>' + resp10 + '. </strong><em>A Resposta está Correta!</em></p>');
		}
		else if (resp10 == '') {
			$('.form-6').append('<p> Décima atividade - Você Não preencheu este campo!');
		}
		else {
			$('.form-6').append('<p> Décima atividade - Você respondeu: <strong>' + resp10 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria American.</p>');		
		}
		// Fim			

		// Décima Resposta
		if (resp11 == 'Mexican' || resp11 == 'mexican' ) {
			$('.form-6').append('<p> Décima primeira atividade - Você respondeu: <strong>' + resp11 + '. </strong><em>A Resposta está Correta!</em></p>');
		}
		else if (resp11 == '') {
			$('.form-6').append('<p> Décima primeira atividade - Você Não preencheu este campo!');
		}
		else {
			$('.form-6').append('<p> Décima primeira atividade - Você respondeu: <strong>' + resp11 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria Mexican.</p>');		
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