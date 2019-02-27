x = 1;
$(function () {
	$('#descricao').bind('mouseover', function () {
		$('#descricao p ').html('Rosa está falando com sua professora. Leia a conversa e complete as frases escrevendo as palavras da caixa para o lugar correto.');
	});
	$('#descricao').bind('mouseout', function () {
		$('#descricao p ').html('Rosa is talking to her professor. Read the conversation and complete the sentences by typing the words from the box into the correct space.');
	});
	$('.btn-1').bind('click', function () {
		var t1 = document.getElementById('t1').value;
		var t2 = document.getElementById('t2').value;
		var t3 = document.getElementById('t3').value;
		var t4 = document.getElementById('t4').value;
		var t5 = document.getElementById('t5').value;
		var t6 = document.getElementById('t6').value;
		var t7 = document.getElementById('t7').value;
		localStorage.setItem('t1',t1);
		localStorage.setItem('t2',t2);
		localStorage.setItem('t3',t3);
		localStorage.setItem('t4',t4);
		localStorage.setItem('t5',t5);
		localStorage.setItem('t6',t6);
		localStorage.setItem('t7',t7);
		window.location.href = 'page_2.html';		
	});
	$('.btn-2').bind('click', function () {
		var t8 = document.getElementById('t8').value;
		var t9 = document.getElementById('t9').value;
		localStorage.setItem('t8',t8);
		localStorage.setItem('t9',t9);
		window.location.href = 'result.html';		
	});
	$('.btn-restart').bind('click',function(){
		for (var i = 1; i <= 9; i++) {
			localStorage.removeItem('t'+i);
		}
		window.location.href = "index.html";
	});
});

$('.btn-result').bind('click',function(e){
	e.preventDefault();
	$('.form-3').hide();
	$('.form-4').show();

	var resp1 = localStorage.getItem('t1');
	var resp2 = localStorage.getItem('t2');
	var resp3 = localStorage.getItem('t3');
	var resp4 = localStorage.getItem('t4');
	var resp5 = localStorage.getItem('t5');
	var resp6 = localStorage.getItem('t6');
	var resp7 = localStorage.getItem('t7');
	var resp8 = localStorage.getItem('t8');
	var resp9 = localStorage.getItem('t9');


	$('.form-4').append('<h3>Confira o resultado</h3>');

		// Primeira Resposta
		if (resp1 == 'Good afternoon' || resp1 == 'good afternoon' ) {
			$('.form-4').append('<p> Na frase <em>espaço para edição</em> . Are you a new student? - Você respondeu: <strong>' + resp1 + '. </strong><em>A Resposta está Correta!</em></p>');
		}
		else if (resp1 == '') {
			$('.form-4').append('<p> Na frase <em>espaço para edição</em> . Are you a new student? - Você Não preencheu este campo!');
		}
		else {
			$('.form-4').append('<p> Na frase <em>espaço para edição</em> . Are you a new student? - Você respondeu: <strong>' + resp1 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria Good afternoon.</p>');			
		}

		// Segunda Resposta
		if (resp2 == 'Good afternoon' || resp2 == 'good afternoon' ) {
			$('.form-4').append('<p> Na frase <em>espaço para edição</em> ! - Você respondeu: <strong>' + resp2 + '. </strong><em>A Resposta está Correta!</em></p>');
		}
		else if (resp2 == '') {
			$('.form-4').append('<p> Na frase <em>espaço para edição</em> ! - Você Não preencheu este campo!');
		}
		else {
			$('.form-4').append('<p> Na frase <em>espaço para edição</em> ! - Você respondeu: <strong>' + resp2 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria Good afternoon.</p>');			
		}

		// Terceira Resposta
		if (resp3 == 'Name' || resp3 == 'name' ) {
			$('.form-4').append('<p> Na frase My <em>espaço para edição</em> is Rosa. - Você respondeu: <strong>' + resp3 + '. </strong><em>A Resposta está Correta!</em></p>');
		}
		else if (resp3 == '') {
			$('.form-4').append('<p> Na frase My <em>espaço para edição</em> is Rosa. - Você Não preencheu este campo!');
		}
		else {
			$('.form-4').append('<p> Na frase My <em>espaço para edição</em> is Rosa. - Você respondeu: <strong>' + resp3 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria name.</p>');			
		}

		// Quarta Resposta
		if (resp4 == 'Please to meet' || resp4 == 'please to meet' ) {
			$('.form-4').append('<p> Na frase <em>espaço para edição</em> you. - Você respondeu: <strong>' + resp4 + '. </strong><em>A Resposta está Correta!</em></p>');
		}
		else if (resp4 == '') {
			$('.form-4').append('<p> Na frase <em>espaço para edição</em> you. - Você Não preencheu este campo!');
		}
		else {
			$('.form-4').append('<p> Na frase <em>espaço para edição</em> you. - Você respondeu: <strong>' + resp4 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria please to meet.</p>');			
		}

		// Quinta Resposta
		if (resp5 == 'I\'m' || resp5 == 'i\'m' ) {
			$('.form-4').append('<p> Na frase <em>espaço para edição</em> Ms. Borrows, the english professor. - Você respondeu: <strong>' + resp5 + '. </strong><em>A Resposta está Correta!</em></p>');
		}
		else if (resp5 == '') {
			$('.form-4').append('<p> Na frase <em>espaço para edição</em> Ms. Borrows, the english professor. - Você Não preencheu este campo!');
		}
		else {
			$('.form-4').append('<p> Na frase <em>espaço para edição</em> Ms. Borrows, the english professor. - Você respondeu: <strong>' + resp5 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria i\'m.</p>');		
		}

		// Sexta Resposta
		if (resp6 == 'too' || resp6 == 'too' ) {
			$('.form-4').append('<p> Na frase Pleased to meet you, <em>espaço para edição</em>. - Você respondeu: <strong>' + resp6 + '. </strong><em>A Resposta está Correta!</em></p>');
		}
		else if (resp6 == '') {
			$('.form-4').append('<p> Na frase Pleased to meet you, <em>espaço para edição</em>. - Você Não preencheu este campo!');
		}
		else {
			$('.form-4').append('<p> Na frase Pleased to meet you, <em>espaço para edição</em>. - Você respondeu: <strong>' + resp6 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria too.</p>');		
		}

		// Sétima Resposta
		if (resp7 == 'Sorry' || resp7 == 'Sorry' ) {
			$('.form-4').append('<p> Na frase Ms... <em>espaço para edição</em>? - Você respondeu: <strong>' + resp7 + '. </strong><em>A Resposta está Correta!</em></p>');
		}
		else if (resp7 == '') {
			$('.form-4').append('<p> Na frase Ms... <em>espaço para edição</em>? - Você Não preencheu este campo!');
		}
		else {
			$('.form-4').append('<p> Na frase Ms... <em>espaço para edição</em>? - Você respondeu: <strong>' + resp7 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria Sorry.</p>');		
		}

		// Oitava Resposta
		if (resp8 == 'email address' || resp8 == 'Email address' ) {
			$('.form-4').append('<p> Na frase Borrows. What\'s your <em>espaço para edição</em>? - Você respondeu: <strong>' + resp8 + '. </strong><em>A Resposta está Correta!</em></p>');
		}
		else if (resp8 == '') {
			$('.form-4').append('<p> Na frase Borrows. What\'s your <em>espaço para edição</em>? - Você Não preencheu este campo!');
		}
		else {
			$('.form-4').append('<p> Na frase Borrows. What\'s your <em>espaço para edição</em>? - Você respondeu: <strong>' + resp8 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria email address.</p>');		
		}

		// Nona Resposta
		if (resp9 == 'Thank you' || resp9 == 'thank you' ) {
			$('.form-4').append('<p> Na frase <em>espaço para edição</em>. - Você respondeu: <strong>' + resp9 + '. </strong><em>A Resposta está Correta!</em></p>');
		}
		else if (resp9 == '') {
			$('.form-4').append('<p> Na frase <em>espaço para edição</em>. - Você Não preencheu este campo!');
		}
		else {
			$('.form-4').append('<p> Na frase <em>espaço para edição</em>. - Você respondeu: <strong>' + resp9 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria Thank you.</p>');		
		}														

		$('.form-' + x).hide();
		x++;

		$('.form-' + x).show();
		$('.text-center').html(x + ' <span lang="en">out of 3</span>');
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