$(document).ready(function(){
    
 $('.input').click(function(){
 if($('.active').length){
$('.active').not($(this)).removeClass('active').addClass('box');
}      
$(this).removeClass('box').addClass('active');     
}); 
     
});