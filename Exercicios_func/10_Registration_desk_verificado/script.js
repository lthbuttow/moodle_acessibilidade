x = 1;
$(function () {
	$('#descricao').bind('mouseover', function () {
		$('#descricao p ').html('É hora de ouvir! Uma nova estudante está no balcão de matrícula. Ouça cuidadosamente e selecione a opção correta sobre as informações da estudante.');
	});
	$('#descricao').bind('mouseout', function () {
		$('#descricao p ').html('It\'s time for listening! A new student is at the registration desk! Listen carefully and select the correct option about this new students\'s profile.<a href="#">Português</a>');
	});
	$('.btn-1').bind('click', function () {
		$('.form-' + x).hide();
		x++;

		$('.form-' + x).show();
		$('.text-center').html(x + ' <span lang="en">out of 6</span>');
		if (x == 6) {
			$('#descricao').hide();
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

		if (dados.length == 5) {

			var resp1 = '';
			var resp2 = '';
			var resp3 = '';
			var resp4 = '';
			var resp5 = '';

			resp1 = dados[0].value;
			resp2 = dados[1].value;
			resp3 = dados[2].value;
			resp4 = dados[3].value;
			resp5 = dados[4].value;
			


			$('.form-7').html('<h3>Confira o resultado</h3>');	

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
	

		$('.form-' + x).hide();
		x++;

		$('.form-' + x).show();
		$('.text-center').html(x + ' <span lang="en">out of 6</span>');
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