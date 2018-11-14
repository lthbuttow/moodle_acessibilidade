x = 1;
$(function(){
    $('#descricao').bind('mouseover',function(){
        $('#descricao p ').html('Rosa está falando com sua professora. Leia a conversa e complete as frases escrevendo as palavras da caixa para o lugar correto.');
    });
    $('#descricao').bind('mouseout',function(){
        $('#descricao p ').html('<p>Rosa is talking to her professor. Read the conversation and complete the sentences by typing the words from the box into the correct space. <a href="#">Português</a></p>');
    });
    $('.btn-1').bind('click',function(){
    	$('.form-'+x).hide();
    	x++;

    	$('.form-'+x).show();
    	$('.text-center').html(x+' out of 5');
    	if(x==6){
            $('#descricao').hide();
    		$('.col-md-4').hide();
    		$('.text-center').hide();
    		$('.right').attr('disabled','');
    		$('.left').attr('disabled','');
       	}
    	$('.btn-3').bind('click',function(){
    		$('.form-'+x).hide();
    		x=1;
    		$('.text-center').show();
    		$('.text-center').html(x+' out of 5');
    		$('.form-'+x).show();
    	});
    });
});