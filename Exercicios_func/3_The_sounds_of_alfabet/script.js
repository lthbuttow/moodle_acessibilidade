x = 1;
$(function(){
  var audio11 = document.getElementById('audio1-1');
  var audio12 = document.getElementById('audio1-2');
  var audio13 = document.getElementById('audio1-3');
  var audio14 = document.getElementById('audio1-4');
  var audio21 = document.getElementById('audio2-1');
  var audio22 = document.getElementById('audio2-2');
  var audio23 = document.getElementById('audio2-3');
  var audio24 = document.getElementById('audio2-4');
  var audio31 = document.getElementById('audio3-1');
  var audio32 = document.getElementById('audio3-2');
  var audio33 = document.getElementById('audio3-3');
  $('.btn-img').bind('click',function(e){
    e.preventDefault();
  })
  $('.btn-audio1-1').bind('click',function(){
    audio11.play();
  });
  $('.img1').bind('keydown',function(e){
    var key = e.which;
    if (key == 13) {
      console.log('13');
      audio11.play();
    }

  });
  $('.img2').bind('keydown',function(e){
    var key = e.which;
    if (key == 13) {
      console.log('13');
      audio12.play();
    }

  });
  $('.img3').bind('keydown',function(e){
    var key = e.which;
    if (key == 13) {
      console.log('13');
      audio13.play();
    }

  });
  $('.img4').bind('keydown',function(e){
    var key = e.which;
    if (key == 13) {
      console.log('13');
      audio14.play();
    }
  });
  $('.img5').bind('keydown',function(e){
    var key = e.which;
    if (key == 13) {
      console.log('13');
      audio21.play();
    }
  });
  $('.img6').bind('keydown',function(e){
    var key = e.which;
    if (key == 13) {
      console.log('13');
      audio22.play();
    }
  });
  $('.img7').bind('keydown',function(e){
    var key = e.which;
    if (key == 13) {
      console.log('13');
      audio23.play();
    }
  });
  $('.img8').bind('keydown',function(e){
    var key = e.which;
    if (key == 13) {
      console.log('13');
      audio24.play();
    }
  });
  $('.img9').bind('keydown',function(e){
    var key = e.which;
    if (key == 13) {
      console.log('13');
      audio31.play();
    }
  });
  $('.img10').bind('keydown',function(e){
    var key = e.which;
    if (key == 13) {
      console.log('13');
      audio32.play();
    }
  });
  $('.img11').bind('keydown',function(e){
    var key = e.which;
    if (key == 13) {
      console.log('13');
      audio33.play();
    }
  });
  $('.img0').bind('keydown',function(e){
    var key = e.which;
    if (key == 13) {
      console.log('13');
      audio_enunciado.play();
    }
  });
  $('.btn-audio1-2').bind('click',function(){
    audio12.play();
  });
  $('.btn-audio1-3').bind('click',function(){
    audio13.play();
  });
  $('.btn-audio1-4').bind('click',function(){
    audio14.play();
  });
  $('.btn-audio2-1').bind('click',function(){
    audio21.play();
  });
  $('.btn-audio2-2').bind('click',function(){
    audio22.play();
  });
  $('.btn-audio2-3').bind('click',function(){
    audio23.play();
  });
  $('.btn-audio2-4').bind('click',function(){
    audio24.play();
  });
  $('.btn-audio3-1').bind('click',function(){
    audio31.play();
  });
  $('.btn-audio3-2').bind('click',function(){
    audio32.play();
  });
  $('.btn-audio3-3').bind('click',function(){
    audio33.play();
  });
  var speeding1 = document.getElementById('audio1');
  $('.btn-speeding-1').bind('click',function(){
    speeding1.play();
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
    $('#descricao p ').html('Que tal praticar as letras do alfabeto? Ouça o som das letras do alfabeto e escreva a letra que você ouvir no espaço ao lado.');
  });
  $('#descricao').bind('mouseout',function(){
    $('#descricao p ').html('<p>How about practicing the letters of the alphabet? Listen to the sound of the letters of the letters of the alphabet and write the letter you hear in the box. <a href="#">Português</a></p>');
  });
  $('.btn-1').bind('click', function () {
    $('.form-' + x).hide();
    x++;

    $('.form-' + x).show();
    $('.text-center').html(x + ' <span lang="en">out of 6</span>');
    if (x == 7) {
      $('#descricao').hide();
      $('.desc').hide();
      // $('.text-center').hide();
      // $('.right').attr('disabled', '');
      // $('.left').attr('disabled', '');
    }
    // $('.btn-3').bind('click', function () {
    //  $('.form-' + x).hide();
    //  x = 1;
    //  $('.text-center').show();
    //  $('.text-center').html(x + ' out of 5');
    //  $('.form-' + x).show();
    // });
  });
});


$('.form').bind('submit', function (e){
    e.preventDefault();
    

    $('.col-1').hide();
    $('.col-10').hide();

    var dados = $(".form").serializeArray();

    if (dados.length == 4) {

      resp1 = dados[0].value;
      resp2 = dados[1].value;
      resp3 = dados[2].value;
      resp4 = dados[3].value;
      // resp5 = dados[4].value;
      // resp6 = dados[5].value;


      $('.form-3').html('<h3>Confira o resultado</h3>');  

      if (resp1 == 'a' || resp1 == 'a') {
        $('.form-3').append('<p> Primeira atividade. Você respondeu: <strong>'+ resp1 +'</strong><em>A Resposta está Correta!</em></p>');
      }
      else if (resp1 == '') {
        $('.form-3').append('<p> Primeira atividade - Você Não preencheu este campo!');
      }
      else {
        $('.form-3').append('<p> Primeira atividade, Você respondeu: <strong>' + resp1 + '. </strong><em>A Resposta está Errada!</em> A resposta correta A.</p>'); 
      }   

      if (resp2 == 'J' || resp2 == 'j') {
        $('.form-3').append('<p> Segunda atividade, Você respondeu: <strong>' + resp2 + '</strong><em>A Resposta está Correta!</em></p>');
      }
      else if (resp2 == '') {
        $('.form-3').append('<p> Segunda atividade - Você Não preencheu este campo!');
      }
      else {
        $('.form-3').append('<p> Segunda atividade, Você respondeu: <strong>' + resp2 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria J.</p>');      
      }

      if (resp3 == 'y' || resp3 == 'Y' ) {
        $('.form-3').append('<p> Terceira atividade, Você respondeu: <strong>'+ resp3 +'</strong><em>A Resposta está Correta!</em></p>');
      }
      else if (resp3 == '') {
        $('.form-3').append('<p> Terceira atividade - Você Não preencheu este campo!');
      }
      else {
        $('.form-3').append('<p> Terceira atividade, Você respondeu: <strong>' + resp3 + '.</strong><em>A Resposta está Errada!</em> A resposta correta seria Y.</p>');      
      }

      if (resp4 == 'K' || resp4 == 'k') {
        $('.form-3').append('<p> Quarta atividade, Você respondeu: <strong>' + resp4 + '</strong><em>A Resposta está Correta!</em></p>');
      }
      else if (resp4 == '') {
        $('.form-3').append('<p> Quarta atividade - Você Não preencheu este campo!');
      }
      else {
        $('.form-3').append('<p> Quarta atividade, Você respondeu: <strong>' + resp4 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria K.</p>');     
      }

      // if (resp5 == 'true') {
      //   $('.form-3').append('<p> Quinta atividade, The capital of United States____Washington, D.C.____not distant from Chicago. - Você respondeu: <strong>is - It\'s</strong><em>A Resposta está Correta!</em></p>');
      // }
      // else if (resp5 == '') {
      //   $('.form-3').append('<p> Quinta atividade - Você Não preencheu este campo!');
      // }
      // else {
      //   $('.form-3').append('<p> Quinta atividade, The capital of United States____Washington, D.C.____not distant from Chicago. - Você respondeu: <strong>' + resp5 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria is - It\'s.</p>'); 
      // }

      // if (resp6 == 'true') {
      //   $('.form-3').append('<p> Sexta atividade, Rosa and Victor____classmates.____friends. - Você respondeu: <strong>aren\'t - They\'re</strong><em>A Resposta está Correta!</em></p>');
      // }
      // else if (resp6 == '') {
      //   $('.form-3').append('<p> Sexta atividade - Você Não preencheu este campo!');
      // }
      // else {
      //   $('.form-3').append('<p> Sexta atividade, Rosa and Victor____classmates.____friends. - Você respondeu: <strong>' + resp6 + '. </strong><em>A Resposta está Errada!</em> A resposta correta seria aren\'t - They\'re.</p>'); 
      // }                 

    } else {
      $('.form-3').html('<h3>Você não preencheu todas as questões. Clique no botão abaixo para tentar novamente!</h3>');
      $('.form-3').append('<a href="index.html" role="button" class="btn btn-primary">Reiniciar</a>');

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

var i = 0;
$('.btn-speeding-2').bind('click', function (e) {

  if (i == 0) {
    document.getElementById('audioTitle').play();
    i++;
  } else{
    document.getElementById('audioTitle').pause();
    i--;
  }   
});

