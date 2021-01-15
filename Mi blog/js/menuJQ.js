$(document).ready(function(){
    
    var altura = $('.menu').offset().top;
    var medida = 600; //medida en px
    
    $(window).on('scroll',function(){
       
        if($(window).scrollTop() > altura){ // dinamismo para hacer nuestro sticky header
            $('.menu').addClass('menuPegajoso');
            
            if($(window).scrollTop() > medida){ // dinamismo para desaparecer nuestro sticky header
                $(".menu").css({opacity: 0});
            }else{
                $(".menu").css({opacity: 1});
            }
            
        }else{
            $('.menu').removeClass('menuPegajoso');
        }
        
    });
});