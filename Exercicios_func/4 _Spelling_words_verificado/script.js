x = 1;
$(function () {
	$('#descricao').bind('mouseover', function () {
		$('#descricao p ').html('Entender nomes e nacionalidades pode ser complicado. Vamos checar sua habilidade em ouvi-los. Ouça as conversas e clique na resposta correta.');
	});
	$('#descricao').bind('mouseout', function () {
		$('#descricao p ').html('Understanding names and nationalities can be tricky. Let\'s check your ability and listen to some. Listen to the conversations and click on the correct answer.<a href="#">Português</a>');
	});
	$('.btn-1').bind('click', function () {
		$('.form-' + x).hide();
		x++;

		$('.form-' + x).show();
		$('.text-center').html(x + ' out of 6');
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
		console.log(dados);

		if (dados.length == 5) {

			// var resp1 = '';
			// var resp2 = '';
			// var resp3 = '';
			// var resp4 = '';
			// var resp5 = '';

			resp1 = dados[0].value;
			resp2 = dados[1].value;
			resp3 = dados[2].value;
			resp4 = dados[3].value;
			resp5 = dados[4].value;
			


			$('.form-7').html('<h3>Confira o resultado</h3>');	

			if (resp1 == 'Smirt') {
				$('.form-7').append('<p> Primeira atividade - Você respondeu: <strong>' + resp1 + '. </strong><em>A Resposta está Correta!</em></p>');
			}
			else if (resp1 == '') {
				$('.form-7').append('<p> Primeira atividade - Você Não preencheu este campo!');
			}
			else {
				$('.form-7').append('<p> Primeira atividade - Você respondeu: <strong>' + resp1 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria Smirt.</p>');			
			}		

			if (resp2 == 'Peterson') {
				$('.form-7').append('<p> Segunda atividade - Você respondeu: <strong>' + resp2 + '. </strong><em>A Resposta está Correta!</em></p>');
			}
			else if (resp2 == '') {
				$('.form-7').append('<p> Segunda atividade - Você Não preencheu este campo!');
			}
			else {
				$('.form-7').append('<p> Segunda atividade - Você respondeu: <strong>' + resp2 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria Peterson.</p>');			
			}

			if (resp3 == 'Norwegian') {
				$('.form-7').append('<p> Terceira atividade - Você respondeu: <strong>' + resp3 + '. </strong><em>A Resposta está Correta!</em></p>');
			}
			else if (resp3 == '') {
				$('.form-7').append('<p> Terceira atividade - Você Não preencheu este campo!');
			}
			else {
				$('.form-7').append('<p> Terceira atividade - Você respondeu: <strong>' + resp3 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria Norwegian.</p>');			
			}

			if (resp4 == 'German') {
				$('.form-7').append('<p> Quarta atividade - Você respondeu: <strong>' + resp4 + '. </strong><em>A Resposta está Correta!</em></p>');
			}
			else if (resp4 == '') {
				$('.form-7').append('<p> Quarta atividade - Você Não preencheu este campo!');
			}
			else {
				$('.form-7').append('<p> Quarta atividade - Você respondeu: <strong>' + resp4 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria See you tomorrow.</p>');			
			}

			if (resp5 == 'Timothy') {
				$('.form-7').append('<p> Quinta atividade - Você respondeu: <strong>' + resp5 + '. </strong><em>A Resposta está Correta!</em></p>');
			}
			else if (resp5 == '') {
				$('.form-7').append('<p> Quinta atividade - Você Não preencheu este campo!');
			}
			else {
				$('.form-7').append('<p> Quinta atividade - Você respondeu: <strong>' + resp5 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria Timothy.</p>');	
			}

		} else {
			$('.form-7').html('<h3>Você não preencheu todas as questões. Clique no botão abaixo para tentar novamente!</h3>');
			$('.form-7').append('<a href="spellingWords.html" role="button" class="btn btn-primary">Reiniciar</a>');
		}						
	


		$('.form-' + x).hide();
		x++;

		$('.form-' + x).show();
		$('.text-center').html(x + ' <span lang="en">out of 6</span>');
	});


	var speeding1 = document.getElementById('audio1');
    $('.btn-speeding-1').bind('click',function(){
        speeding1.play();
    });
    var speeding2 = document.getElementById('audio2');
    $('.btn-speeding-2').bind('click',function(){
        speeding2.play();
    });
    var speeding3 = document.getElementById('audio3');
    $('.btn-speeding-3').bind('click',function(){
        speeding3.play();
    });
    var speeding4 = document.getElementById('audio4');
    $('.btn-speeding-4').bind('click',function(){
        speeding4.play();
    });
    var speeding5 = document.getElementById('audio5');
    $('.btn-speeding-5').bind('click',function(){
        speeding5.play();
    });
    var audio_enunciado = document.getElementById('audio_enunciado');
    $('.btn-speeding-enunciado').bind('click',function(){
        audio_enunciado.play();
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