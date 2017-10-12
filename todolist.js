window.addEventListener('load', function load(event){
//check off to dos by clicking
    $('ul').on('click', 'li', function(){
        $(this).toggleClass('completed'); 
    }); 

//click on x to delete todo

    $('ul').on('click', 'span', function(event){
        $(this).parent().fadeOut(500, function(){
            $(this).remove(); 
        }); 
        event.stopPropagation(); 
    }); 

    $("input[type='text']").keypress(function (event){
        if(event.which === 13) {
            //grabbing new text from input
            let toDoText = $(this).val();  
            $(this).val(""); 
            //create new li and add to ul
            $('ul').append("<li><span>X</span> " + toDoText + "</li>"); 
        }
    }); 


}); 