x = 1;
$(function () {
	$('#descricao').bind('mouseover', function () {
		$('#descricao p ').html('Momento geografia! Olhe as bandeiras com diferentes países ao redor do mundo e escreva o nome da nacionalidade correspondente. Boa viagem!');
	});
	$('#descricao').bind('mouseout', function () {
		$('#descricao p ').html('Geography time! Look at the flags from different countries around the world and write the name of the corresponding nationality. Have a good trip!<a href="#">Português</a>');
	});
	$('.btn-1').bind('click', function () {
		$('.form-' + x).hide();
		x++;

		$('.form-' + x).show();
		$('.text-center').html(x + ' <span lang="en">out of 6</span>');
		if (x == 6) {
			$('#descricao').hide();
			$('.col-md-4').hide();
		}
		// $('.btn-3').bind('click', function () {
		// 	$('.form-' + x).hide();
		// 	x = 1;
		// 	$('.text-center').show();
		// 	$('.text-center').html(x + ' <span lang="en">out of 4</span>');
		// 	$('.form-' + x).show();
		// });
	});
});

	$(".form").bind('submit', function (e){
		e.preventDefault();
		
		$('.enunciado').hide();

		var dados = $(".form").serializeArray();
		console.log(dados);


		var resp1 = dados[0].value;
		var resp2 = dados[1].value;
		var resp3 = dados[2].value;
		var resp4 = dados[3].value;
		var resp5 = dados[4].value;
		var resp6 = dados[5].value;
		var resp7 = dados[6].value;
		var resp8 = dados[7].value;
		var resp9 = dados[8].value;
		var resp10 = dados[9].value;
		var resp11 = dados[10].value;

		$('.form-6').html('<h3>Confira o resultado</h3>');

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
		// Fim				


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