$(document).ready(function(){
    

    $(".mcs-horizontal-example").mCustomScrollbar({
      axis:"x",
      theme:"dark-3",
      advanced:{
        updateOnContentResize:true //optional (remove or set to false for non-dynamic/static elements)
      },
      mouseWheel:{
		scrollAmount: 1000
      },
      mouseWheelPixels : 2200,    
      scrollInertia: 1100
    });
    


});

$(".mcs-horizontal-example").removeClass("mCustomScrollbar");
    
    $(".mcs-horizontal-example").css("-webkit-overflow-scrolling", "touch");