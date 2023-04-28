function menuBarOn(speed){
    
        $('#menu_window').stop();
        $('#menu_window').show();
        $('#menu_window').animate({width:550+'px'},speed);
        $('#container1_blur').show();
        $('#container1_blur').css({zIndex:5});
        $('#container1_blur').animate({backgroundColor:'rgba(0, 0, 0, 0.589)'},speed);
   
}
function menuBarOff(speed){

        $('#menu_window').stop();
        $('#menu_window').animate({width:0},speed-"500");
        $('#container1_blur').animate({backgroundColor:'rgba(0, 0, 0, 0)'},speed-"500").css({zIndex:-1});
      
        
 
}
$(document).ready(function(){
    $('#menu_window').hide()
    $('#container1_blur').hide()

})