x = 1;
$(function () {
	$('#descricao').bind('mouseover', function () {
		$('#descricao p ').html('Entender nomes e nacionalidades pode ser complicado. Vamos checar sua habilidade em ouvi-los. Ouça as conversas e clique na resposta correta.');
	});
	$('#descricao').bind('mouseout', function () {
		$('#descricao p ').html('Understanding names and nationalities can be tricky. Let\'s check your ability and listen to some. Listen to the conversations and click on the correct answer.<a href="#">Português</a>');
	});
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
		window.location.href = "result.html";
	});
	
	$('.btn-restart').bind('click',function(){
		for (var i = 1; i <= 5; i++) {
			localStorage.removeItem('Radio_btn_'+i);
		}
		window.location.href = "index.html";

	})

});

$('.btn-result').bind('click', function (e){
	e.preventDefault();


	$('.form-6').hide();
	$('.form-7').show();
	resp1 = localStorage.getItem('Radio_btn_1');
	resp2 = localStorage.getItem('Radio_btn_2');
	resp3 = localStorage.getItem('Radio_btn_3');
	resp4 = localStorage.getItem('Radio_btn_4');
	resp5 = localStorage.getItem('Radio_btn_5');

	if(resp1 == null ||resp2 == null ||resp3 == null ||resp4 == null ||resp5){

		$('.form-7 .check').append('<h3>Confira o resultado</h3>');	

		if (resp1 == 'Smirt') {
			$('.form-7 .check').append('<p> Primeira atividade - Você respondeu: <strong>' + resp1 + '. </strong><em>A Resposta está Correta!</em></p>');
		}
		else if (resp1 == 'undefined') {
			$('.form-7 .check').append('<p> Primeira atividade - Você Não preencheu este campo!');
		}
		else {
			$('.form-7 .check').append('<p> Primeira atividade - Você respondeu: <strong>' + resp1 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria Smirt.</p>');			
		}		

		if (resp2 == 'Peterson') {
			$('.form-7 .check').append('<p> Segunda atividade - Você respondeu: <strong>' + resp2 + '. </strong><em>A Resposta está Correta!</em></p>');
		}
		else if (resp2 == 'undefined') {
			$('.form-7 .check').append('<p> Segunda atividade - Você Não preencheu este campo!');
		}
		else {
			$('.form-7 .check').append('<p> Segunda atividade - Você respondeu: <strong>' + resp2 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria Peterson.</p>');			
		}

		if (resp3 == 'Norwegian') {
			$('.form-7 .check').append('<p> Terceira atividade - Você respondeu: <strong>' + resp3 + '. </strong><em>A Resposta está Correta!</em></p>');
		}
		else if (resp3 == 'undefined') {
			$('.form-7 .check').append('<p> Terceira atividade - Você Não preencheu este campo!');
		}
		else {
			$('.form-7 .check').append('<p> Terceira atividade - Você respondeu: <strong>' + resp3 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria Norwegian.</p>');			
		}

		if (resp4 == 'German') {
			$('.form-7 .check').append('<p> Quarta atividade - Você respondeu: <strong>' + resp4 + '. </strong><em>A Resposta está Correta!</em></p>');
		}
		else if (resp4 == 'undefined') {
			$('.form-7 .check').append('<p> Quarta atividade - Você Não preencheu este campo!');
		}
		else {
			$('.form-7 .check').append('<p> Quarta atividade - Você respondeu: <strong>' + resp4 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria See you tomorrow.</p>');			
		}

		if (resp5 == 'Timothy') {
			$('.form-7 .check').append('<p> Quinta atividade - Você respondeu: <strong>' + resp5 + '. </strong><em>A Resposta está Correta!</em></p>');
		}
		else if (resp5 == 'undefined') {
			$('.form-7 .check').append('<p> Quinta atividade - Você Não preencheu este campo!');
		}
		else {
			$('.form-7 .check').append('<p> Quinta atividade - Você respondeu: <strong>' + resp5 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria Timothy.</p>');	
		}
	}else {
		$('.form-7 .check').html('<h3>Você não preencheu todas as questões. Clique no botão abaixo para tentar novamente!</h3>');
		
	}				
});

$('#bt-1').bind('keyup', function(e) {
	e.preventDefault();
	console.log(e.keyCode);
	if (e.keyCode == 13 || e.keyCode == 32) {
	$('.btn-speeding-1').trigger('click');
	}
});
var x = 0;
$('.btn-speeding-1').on('click', function (e) {
	e.preventDefault();
	if (x == 0) {
		document.getElementById('audio1').play();
		x++;
	} else{
		document.getElementById('audio1').pause();
		x--;
	}

});

// var speeding1 = document.getElementById('audio1');
// $('.btn-speeding-1').bind('click',function(){
// 	speeding1.play();
// });

$('#bt-2').bind('keyup', function(e) {
	e.preventDefault();
	console.log(e.keyCode);
	if (e.keyCode == 13 || e.keyCode == 32) {
	$('.btn-speeding-2').trigger('click');
	}
});
var y = 0;
$('.btn-speeding-2').on('click', function (e) {
	e.preventDefault();
	if (y == 0) {
		document.getElementById('audio2').play();
		y++;
	} else{
		document.getElementById('audio2').pause();
		y--;
	}

});
// var speeding2 = document.getElementById('audio2');
// $('.btn-speeding-2').bind('click',function(){
// 	speeding2.play();
// });
$('#bt-3').bind('keyup', function(e) {
	e.preventDefault();
	console.log(e.keyCode);
	if (e.keyCode == 13 || e.keyCode == 32) {
	$('.btn-speeding-3').trigger('click');
	}
});
var t = 0;
$('.btn-speeding-3').on('click', function (e) {
	e.preventDefault();
	if (t == 0) {
		document.getElementById('audio3').play();
		t++;
	} else{
		document.getElementById('audio3').pause();
		t--;
	}

});

// var speeding3 = document.getElementById('audio3');
// $('.btn-speeding-3').bind('click',function(){
// 	speeding3.play();
// });

$('#bt-4').bind('keyup', function(e) {
	e.preventDefault();
	console.log(e.keyCode);
	if (e.keyCode == 13 || e.keyCode == 32) {
	$('.btn-speeding-4').trigger('click');
	}
});
var o = 0;
$('.btn-speeding-4').on('click', function (e) {
	e.preventDefault();
	if (o == 0) {
		document.getElementById('audio4').play();
		o++;
	} else{
		document.getElementById('audio4').pause();
		o--;
	}

});
// var speeding4 = document.getElementById('audio4');
// $('.btn-speeding-4').bind('click',function(){
// 	speeding4.play();
// });
$('#bt-5').bind('keyup', function(e) {
	e.preventDefault();
	console.log(e.keyCode);
	if (e.keyCode == 13 || e.keyCode == 32) {
	$('.btn-speeding-5').trigger('click');
	}
});
var p = 0;
$('.btn-speeding-5').on('click', function (e) {
	e.preventDefault();
	if (p == 0) {
		document.getElementById('audio5').play();
		p++;
	} else{
		document.getElementById('audio5').pause();
		p--;
	}

});

// var speeding5 = document.getElementById('audio5');
// $('.btn-speeding-5').bind('click',function(){
// 	speeding5.play();
// });

$('#bt-enunciado').bind('keyup', function(e) {
	console.log(e.keyCode);
	if (e.keyCode == 13 || e.keyCode == 32) {
	$('.btn-speeding-enunciado').trigger('click');
	}
});

var i = 0;
var audio_enunciado = document.getElementById('audioTitle');
$('.btn-speeding-enunciado').bind('click',function(){
	if (i == 0) {
		audio_enunciado.play();
		i++;
	} else{
		audio_enunciado.pause();
		i--;
	}
	
});

// var i = 0;
// $('.btn-speeding-2').on('click', function () {
// 	if (i == 0) {
// 		document.getElementById('audioTitle').play();
// 		i++;
// 	} else{
// 		document.getElementById('audioTitle').pause();
// 		i--;
// 	}

// });