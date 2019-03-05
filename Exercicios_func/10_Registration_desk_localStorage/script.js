x = 1;
$(function () {
	$('#descricao').bind('mouseover', function () {
		$('#descricao p ').html('É hora de ouvir! Uma nova estudante está no balcão de matrícula. Ouça cuidadosamente e selecione a opção correta sobre as informações da estudante.');
	});
	$('#descricao').bind('mouseout', function () {
		$('#descricao p ').html('It\'s time for listening! A new student is at the registration desk! Listen carefully and select the correct option about this new students\'s profile.<a href="#">Português</a>');
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
	resp1 = localStorage.getItem('resp1');
	resp2 = localStorage.getItem('resp2');
	resp3 = localStorage.getItem('resp3');
	resp4 = localStorage.getItem('resp4');
	resp5 = localStorage.getItem('resp5');


	if (resp1 != '' && resp2 != '' && resp3 != '' && resp4 != '' && resp5 != '') {


		$('.form-7').append('<h3>Confira o resultado</h3>');	

		if (resp1 == 'Morning') {
			$('.form-7').append('<p> Primeira atividade - Você respondeu: <strong>' + resp1 + '. </strong><em>A Resposta está Correta!</em></p>');
		}
		else if (resp1 == '') {
			$('.form-7').append('<p> Primeira atividade - Você Não preencheu este campo!');
		}
		else {
			$('.form-7').append('<p> Primeira atividade - Você respondeu: <strong>' + resp1 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria Morning.</p>');			
		}		

		if (resp2 == 'Schwartzbold') {
			$('.form-7').append('<p> Segunda atividade - Você respondeu: <strong>' + resp2 + '. </strong><em>A Resposta está Correta!</em></p>');
		}
		else if (resp2 == '') {
			$('.form-7').append('<p> Segunda atividade - Você Não preencheu este campo!');
		}
		else {
			$('.form-7').append('<p> Segunda atividade - Você respondeu: <strong>' + resp2 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria Schwartzbold.</p>');			
		}

		if (resp3 == 'Adhelle') {
			$('.form-7').append('<p> Terceira atividade - Você respondeu: <strong>' + resp3 + '. </strong><em>A Resposta está Correta!</em></p>');
		}
		else if (resp3 == '') {
			$('.form-7').append('<p> Terceira atividade - Você Não preencheu este campo!');
		}
		else {
			$('.form-7').append('<p> Terceira atividade - Você respondeu: <strong>' + resp3 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria Adhelle</p>');			
		}

		if (resp4 == 'Germany') {
			$('.form-7').append('<p> Quarta atividade - Você respondeu: <strong>' + resp4 + '. </strong><em>A Resposta está Correta!</em></p>');
		}
		else if (resp4 == '') {
			$('.form-7').append('<p> Quarta atividade - Você Não preencheu este campo!');
		}
		else {
			$('.form-7').append('<p> Quarta atividade - Você respondeu: <strong>' + resp4 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria Germany.</p>');			
		}

		if (resp5 == 'adhels@hitmail.de') {
			$('.form-7').append('<p> Quarta atividade - Você respondeu: <strong>' + resp5 + '. </strong><em>A Resposta está Correta!</em></p>');
		}
		else if (resp5 == '') {
			$('.form-7').append('<p> Quarta atividade - Você Não preencheu este campo!');
		}
		else {
			$('.form-7').append('<p> Quarta atividade - Você respondeu: <strong>' + resp5 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria adhels@hitmail.de</p>');			
		}			

	} else {
		$('.form-7').html('<h3>Você não preencheu todas as questões. Clique no botão abaixo para tentar novamente!</h3>');
		$('.form-7').append('<a href="index.html" role="button" class="btn btn-primary">Reiniciar</a>');

	}						
	


});


$('#bt-enunciado').bind('keyup', function(e) {
	console.log(e.keyCode);
	if (e.keyCode == 13 || e.keyCode == 32) {
		$('.btn-speeding-2').trigger('click');
	}
});

$('#bt-enunc').bind('keyup', function(e) {
	console.log(e.keyCode);
	if (e.keyCode == 13 || e.keyCode == 32) {
		$('.btn-speeding-1').trigger('click');
	}
});  

var t = 0
$('.btn-speeding-1').on('click', function (e) {
	if (t == 0) {
		document.getElementById('audio1').play();
		t++;
	} else{
		document.getElementById('audio1').pause();
		t--;
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