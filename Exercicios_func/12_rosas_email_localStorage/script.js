x = 1;
$(function () {
	$('#descricao').bind('mouseover', function () {
		$('#descricao p ').html('Rosa está finalmente atualizando sua família sobre sua nova vida. Leia seu e-mail e a seguir decida pro verdadeiro ou falso no final de cada frase.');
	});
	$('#descricao').bind('mouseout', function () {
		$('#descricao p ').html('Rosa is finally updating her family about her new life. Read her e-mail and decide if the sentences are true or false at the end of each sentence.<a href="#">Português</a>');
	});
	$('.btn-1').bind('click', function () {
		localStorage.setItem('resp1',$('.form').find('input:radio:checked').val());
		window.location.href = "page_2.html";
	});
	$('.btn-2').bind('click', function () {
		localStorage.setItem('resp2',$('.form').find('input:radio:checked').val());
		window.location.href = "page_3.html";
	});
	$('.btn-3').bind('click', function () {
		localStorage.setItem('resp3',$('.form').find('input:radio:checked').val());
		window.location.href = "page_4.html";
	});
	$('.btn-4').bind('click', function () {
		localStorage.setItem('resp4',$('.form').find('input:radio:checked').val());
		window.location.href = "page_5.html";
	});
	$('.btn-5').bind('click', function () {
		localStorage.setItem('resp5',$('.form').find('input:radio:checked').val());
		window.location.href = "page_6.html";
	});
	$('.btn-6').bind('click', function () {
		localStorage.setItem('resp6',$('.form').find('input:radio:checked').val());
		window.location.href = "page_7.html";
	});
	$('.btn-7').bind('click', function () {
		localStorage.setItem('resp7',$('.form').find('input:radio:checked').val());
		window.location.href = "page_8.html";
	});
	$('.btn-8').bind('click', function () {
		localStorage.setItem('resp8',$('.form').find('input:radio:checked').val());
		window.location.href = "page_9.html";
	});
	$('.btn-9').bind('click', function () {
		localStorage.setItem('resp9',$('.form').find('input:radio:checked').val());
		window.location.href = "page_10.html";
	});
	$('.btn-10').bind('click', function () {
		localStorage.setItem('resp10',$('.form').find('input:radio:checked').val());
		window.location.href = "result.html";
	});
	$('.btn-restart').bind('click',function(){
		for (var i = 1; i <= 10; i++) {
			localStorage.removeItem('resp'+i);
		}
		window.location.href = "index.html";

	})
});

$('.btn-result').bind('click', function (e){
	e.preventDefault();
	console.log(localStorage.getItem('resp1'));

	$('.form-11').hide();
	$('.form-12').show();

	resp1 = localStorage.getItem('resp1');
	resp2 = localStorage.getItem('resp2');
	resp3 = localStorage.getItem('resp3');
	resp4 = localStorage.getItem('resp4');
	resp5 = localStorage.getItem('resp5');
	resp6 = localStorage.getItem('resp6');
	resp7 = localStorage.getItem('resp7');
	resp8 = localStorage.getItem('resp8');
	resp9 = localStorage.getItem('resp9');
	resp10 = localStorage.getItem('resp10');


	if (resp1 != '') {

		$('.form-12').append('<h3>Confira o resultado</h3>');	

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