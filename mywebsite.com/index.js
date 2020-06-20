$(function(){
   $("#loader").fadeOut(2000,function()
                       {
       $("#page").fadeIn(500);
       $(document).ready(function () {
    
   // $('body').css("background-color","white");
    function loop(){
   $('.down')
     .animate({fontSize :40},600)
     .animate({fontSize:60},600, loop);
       
  }
    
    

    
    loop();
    $(".menu").click(function() {
                $("ul").toggleClass('active');
            });
    $('.navbar-collapse a').click(function () {
        $(".navbar-collapse").collapse('hide');
    });
   
});

   }); 
});

