$(document).ready(function(){

      $(".write_icon").click(function(){
        $(".modal").fadeIn();
        $("html, body").addClass("not_scroll");
      });

      $(".close_btn").click(function(){
        $(".modal").fadeOut();
        $("html, body").removeClass("not_scroll");
      });

    
});


new fullpage('#fullpage', {
    navigation: true,
    responsiveWidth: 700,
    anchors: ['home', 'about-us', 'contact'],
    parallax: true,
    onLeave: function(origin, destination, direction){
        console.log("Leaving section" + origin.index);
    },
});