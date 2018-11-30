x = 1;
$(function(){


   
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
    $('#descricao').bind('mouseover',function(){
        $('#descricao p ').html('Qual é a saudação a ser usada em cada uma das situações a seguir? Selecione a saudação de acordo com o momento do dia e o que está acontecendo.');
    });
    $('#descricao').bind('mouseout',function(){
        $('#descricao p ').html('<p>What\'s the greeting to be used en each of the following situations? Select it according to the moment of the day and what is happening. <a href="#">Português</a></p>');
    });
    $('.btn-'+x).bind('click',function(){
    	$('.form-'+x).hide();
        var Y = $('.form-'+x).find("input[name='Go']:checked").val();
        
        if(Y == 'right'){
            $('.form-'+x).find("div[class='correct']").show();
        }else{
            $('.form-'+x).find("div[class='wrong']").show();
        }
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
    $('label').bind('mouseover',function(){
        $(this).css('background-color','red');
    });
    $('label').bind('mouseout',function(){
        $(this).css('background-color','unset');
    });

});