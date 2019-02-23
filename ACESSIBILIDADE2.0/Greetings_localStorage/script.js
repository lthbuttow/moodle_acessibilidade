x = 1;
$(function () {
	$('#descricao').bind('mouseover', function () {
		$('#descricao p ').html('Qual é a saudação a ser usada em cada uma das situações a seguir? Selecione a saudação de acordo com o momento do dia e o que está acontecendo.');
	});
	$('#descricao').bind('mouseout', function () {
		$('#descricao p ').html('<p>What\'s the greeting to be used en each of the following situations? Select it according to the moment of the day and what is happening. <a href="#">Português</a></p>');
	});
	// console.log(localStorage.getItem("Radio_btn_1"));
	// console.log(localStorage.getItem("Radio_btn_2"));
	// console.log(localStorage.getItem("Radio_btn_3"));
	// console.log(localStorage.getItem("Radio_btn_4"));
	// console.log(localStorage.getItem("Radio_btn_5"));
	$('.btn-1').bind('click', function () {
		var Select_1 = $('.form').find('input:radio:checked').val();
		localStorage.setItem("Radio_btn_1",Select_1);
		window.location.href = "page_2.html";
	});
	$('.btn-2').bind('click', function () {
		var Select_2 = $('.form').find('input:radio:checked').val();
		localStorage.setItem("Radio_btn_2",Select_2);
		window.location.href = "page_3.html";
	});
	$('.btn-3').bind('click', function () {
		var Select_3 = $('.form').find('input:radio:checked').val();
		localStorage.setItem("Radio_btn_3",Select_3);
		window.location.href = "page_4.html";
	});
	$('.btn-4').bind('click', function () {
		var Select_4 = $('.form').find('input:radio:checked').val();
		localStorage.setItem("Radio_btn_4",Select_4);
		window.location.href = "page_5.html";
	});
	$('.btn-5').bind('click', function () {
		var Select_5 = $('.form').find('input:radio:checked').val();
		localStorage.setItem("Radio_btn_5",Select_5);
		window.location.href = "page_6.html";
	});
});

$('.btn-6').bind('click', function (){

	$('.form-6').hide();

	resp1 = localStorage.getItem("Radio_btn_1");
	resp2 = localStorage.getItem("Radio_btn_2");
	resp3 = localStorage.getItem("Radio_btn_3");
	resp4 = localStorage.getItem("Radio_btn_4");
	resp5 = localStorage.getItem("Radio_btn_5");

	console.log(resp1);

	if (resp1!=null && resp2!=null && resp3!=null && resp4!=null && resp5!=null) {

		$('.form-7').html('<h3>Confira o resultado</h3>');	

		if (resp1 == 'Good evening') {
			$('.form-7').append('<p> Primeira atividade - Você respondeu: <strong>' + resp1 + '. </strong><em>A Resposta está Correta!</em></p>');
		}
		else if (resp1 == '') {
			$('.form-7').append('<p> Primeira atividade - Você Não preencheu este campo!');
		}
		else {
			$('.form-7').append('<p> Primeira atividade - Você respondeu: <strong>' + resp1 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria Good evening.</p>');			
		}		

		if (resp2 == 'Good bye') {
			$('.form-7').append('<p> Segunda atividade - Você respondeu: <strong>' + resp2 + '. </strong><em>A Resposta está Correta!</em></p>');
		}
		else if (resp2 == '') {
			$('.form-7').append('<p> Segunda atividade - Você Não preencheu este campo!');
		}
		else {
			$('.form-7').append('<p> Segunda atividade - Você respondeu: <strong>' + resp2 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria Good bye.</p>');			
		}

		if (resp3 == 'Good morning') {
			$('.form-7').append('<p> Terceira atividade - Você respondeu: <strong>' + resp3 + '. </strong><em>A Resposta está Correta!</em></p>');
		}
		else if (resp3 == '') {
			$('.form-7').append('<p> Terceira atividade - Você Não preencheu este campo!');
		}
		else {
			$('.form-7').append('<p> Terceira atividade - Você respondeu: <strong>' + resp3 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria Good morning.</p>');			
		}

		if (resp4 == 'See you tomorrow') {
			$('.form-7').append('<p> Quarta atividade - Você respondeu: <strong>' + resp4 + '. </strong><em>A Resposta está Correta!</em></p>');
		}
		else if (resp4 == '') {
			$('.form-7').append('<p> Quarta atividade - Você Não preencheu este campo!');
		}
		else {
			$('.form-7').append('<p> Quarta atividade - Você respondeu: <strong>' + resp4 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria See you tomorrow.</p>');			
		}

		if (resp5 == 'Good afternoon') {
			$('.form-7').append('<p> Quinta atividade - Você respondeu: <strong>' + resp5 + '. </strong><em>A Resposta está Correta!</em></p>');
		}
		else if (resp5 == '') {
			$('.form-7').append('<p> Quinta atividade - Você Não preencheu este campo!');
		}
		else {
			$('.form-7').append('<p> Quinta atividade - Você respondeu: <strong>' + resp5 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria Good afternoon.</p>');	
		}

	} else {
		$('.form-7').html('<h3>Você não preencheu todas as questões. Clique no botão abaixo para tentar novamente!</h3>');
		$('.form-7').append('<a href="index.html" role="button" class="btn btn-primary">Reiniciar</a>');

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