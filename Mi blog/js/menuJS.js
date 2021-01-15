var menu = document.getElementById("menu");
var altura = menu.offsetTop;
var medida = 600; //px en donde nuestro menu va a desaparecer


window.addEventListener('scroll', function(){
    
    if(window.pageYOffset > altura){
        
        menu.classList.add("menuPegajoso"); //dinamismo de nuestro menu pegajoso
        
        if(window.pageYOffset > medida){ // condicional para desaparecer nuestro stcky header
            menu.style.opacity = "0";
        }else{
           menu.style.opacity = "1";
        }
        
    }else{
        
        menu.classList.remove("menuPegajoso");
    }
    
    
})