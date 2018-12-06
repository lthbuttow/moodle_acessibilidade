x = 1;
$(function () {
	$('#descricao').bind('mouseover', function () {
		$('#descricao p ').html('Rosa está falando com sua professora. Leia a conversa e complete as frases escrevendo as palavras da caixa para o lugar correto.');
	});
	$('#descricao').bind('mouseout', function () {
		$('#descricao p ').html('Rosa is talking to her professor. Read the conversation and complete the sentences by typing the words from the box into the correct space.');
	});
	$('.btn-1').bind('click', function () {
		$('.form-' + x).hide();
		x++;

		$('.form-' + x).show();
		$('.text-center').html(x + ' out of 2');
		if (x == 3) {
			$('#descricao').hide();
			$('.col-md-4').hide();
			$('.text-center').hide();
			$('.right').attr('disabled', '');
			$('.left').attr('disabled', '');
		}
		$('.btn-3').bind('click', function () {
			$('.form-' + x).hide();
			x = 1;
			$('.text-center').show();
			$('.text-center').html(x + ' out of 2');
			$('.form-' + x).show();
		});
	});
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