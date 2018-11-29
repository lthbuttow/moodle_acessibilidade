x = 1;
$(function(){
    $('#descricao1').bind('mouseover',function(){
        $('#descricao1 p').html('Rosa está finalmente atualizando sua família sobre sua nova vida. Leia seu e-mail e a seguir decida por verdadeiro ou falso no final de cada frase');
    });
    $('#descricao1').bind('mouseout',function(){
        $('#descricao1 p').html('Rosa is finally updating her family about her new life. Read her e-mail and decide if the sentences are true or false at the end of each sentence<a href="#">Português</a>');
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