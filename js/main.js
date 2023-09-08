$(document).ready(function(){
    

    $(".mcs-horizontal-example").mCustomScrollbar({
      axis:"x",
      theme:"dark-3",
      horizontalScroll:true,    
      advanced:{
        updateOnContentResize:true //optional (remove or set to false for non-dynamic/static elements)
      },
      mouseWheel:{
		scrollAmount: 1000
      },
      mouseWheelPixels : 700,    
      scrollInertia: 400,
    });
    
    


    


});

$(".mcs-horizontal-example").removeClass("mCustomScrollbar");
    
    $(".mcs-horizontal-example").css("-webkit-overflow-scrolling", "touch");



/* 모달창 (팝업창) */

window.onload = function(){ if((parseInt(document.getElementByClass('content').offsetHeight) - parseInt(window.document.body.clientHeight)) > 20) { window.document.body.scroll = "auto"; window.resizeBy(18,0); } }


$(document).ready(function(){
    
    var scroll = 0;
    var scroll2 = 0;

    $(window).scroll(function () {
        scroll = $(window).scrollTop();
    })

    //팝업창 첫번째
    $(".popWrap1,.popCon1").hide();
    
    $(".img01").click(function(e){
        e.preventDefault();
        $(".popWrap1,.popCon1").fadeIn();
        $("html,body").css("overflow", "hidden");
        $(".close span").show();
        $("html,body").on("scroll touchmove mousewheel", function (e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        })
        $("html ,body").scrollTop(scroll)
        scroll2 = scroll;
    })
    
    $(".popWrap1,.close").click(function(){ 
        $(".popWrap1,.popCon1").fadeOut();
        $("html,body").css("overflow", "visible");
        $("html,body").off("scroll touchmove mousewheel");
        $("html,body").scrollTop(scroll2);
    })
    
    
    //팝업창 두번째
    $(".popWrap2,.popCon2").hide();
    
    $(".img02").click(function(e){
        e.preventDefault();
        $(".popWrap2,.popCon2").fadeIn();
        $("html,body").css("overflow", "hidden");
        $(".close span").show();
        $("html,body").on("scroll touchmove mousewheel", function (e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        })
        $("html ,body").scrollTop(scroll)
        scroll2 = scroll;
    })
    
    $(".popWrap2,.close").click(function(){ 
        $(".popWrap2,.popCon2").fadeOut();
        $("html,body").css("overflow", "visible");
        $("html,body").off("scroll touchmove mousewheel");
        $("html,body").scrollTop(scroll2);
    })
    
    
    //팝업창 세번째
    $(".popWrap3,.popCon3").hide();
    
    $(".img03").click(function(e){
        e.preventDefault();
        $(".popWrap3,.popCon3").fadeIn();
        $("html,body").css("overflow", "hidden");
        $(".close span").show();
        $("html,body").on("scroll touchmove mousewheel", function (e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        })
        $("html ,body").scrollTop(scroll)
        scroll2 = scroll;
    })
    
    $(".popWrap3,.close").click(function(){ 
        $(".popWrap3,.popCon3").fadeOut();
        $("html,body").css("overflow", "visible");
        $("html,body").off("scroll touchmove mousewheel");
        $("html,body").scrollTop(scroll2);
    })
    
    
    //팝업창 네번째
    $(".popWrap4,.popCon4").hide();
    
    $(".img04").click(function(e){
        e.preventDefault();
        $(".popWrap4,.popCon4").fadeIn();
        $("html,body").css("overflow", "hidden");
        $(".close span").show();
        $("html,body").on("scroll touchmove mousewheel", function (e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        })
        $("html ,body").scrollTop(scroll)
        scroll2 = scroll;
    })
    
    $(".popWrap4,.close").click(function(){ 
        $(".popWrap4,.popCon4").fadeOut();
        $("html,body").css("overflow", "visible");
        $("html,body").off("scroll touchmove mousewheel");
        $("html,body").scrollTop(scroll2);
    })
    
    
    //팝업창 다섯번째
    $(".popWrap5,.popCon5").hide();
    
    $(".img05").click(function(e){
        e.preventDefault();
        $(".popWrap5,.popCon5").fadeIn();
        $("html,body").css("overflow", "hidden");
        $(".close span").show();
        $("html,body").on("scroll touchmove mousewheel", function (e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        })
        $("html ,body").scrollTop(scroll)
        scroll2 = scroll;
    })
    
    $(".popWrap5,.close").click(function(){ 
        $(".popWrap5,.popCon5").fadeOut();
        $("html,body").css("overflow", "visible");
        $("html,body").off("scroll touchmove mousewheel");
        $("html,body").scrollTop(scroll2);
    })
    
    
    //팝업창 여섯번째
    $(".popWrap6,.popCon6").hide();
    
    $(".img06").click(function(e){
        e.preventDefault();
        $(".popWrap6,.popCon6").fadeIn();
        $("html,body").css("overflow", "hidden");
        $(".close span").show();
        $("html,body").on("scroll touchmove mousewheel", function (e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        })
        $("html ,body").scrollTop(scroll)
        scroll2 = scroll;
    })
    
    $(".popWrap6,.close").click(function(){ 
        $(".popWrap6,.popCon6").fadeOut();
        $("html,body").css("overflow", "visible");
        $("html,body").off("scroll touchmove mousewheel");
        $("html,body").scrollTop(scroll2);
    })
    
    
    //팝업창 666
    $(".popWrap666,.popCon666").hide();
    
    $(".img0666").click(function(e){
        e.preventDefault();
        $(".popWrap666,.popCon666").fadeIn();
        $("html,body").css("overflow", "hidden");
        $(".close span").show();
        $("html,body").on("scroll touchmove mousewheel", function (e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        })
        $("html ,body").scrollTop(scroll)
        scroll2 = scroll;
    })
    
    $(".popWrap666,.close").click(function(){ 
        $(".popWrap666,.popCon666").fadeOut();
        $("html,body").css("overflow", "visible");
        $("html,body").off("scroll touchmove mousewheel");
        $("html,body").scrollTop(scroll2);
    })
    
    
    //팝업창 일곱번째
    $(".popWrap7,.popCon7").hide();
    
    $(".img07").click(function(e){
        e.preventDefault();
        $(".popWrap7,.popCon7").fadeIn();
        $("html,body").css("overflow", "hidden");
        $(".close span").show();
        $("html,body").on("scroll touchmove mousewheel", function (e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        })
        $("html ,body").scrollTop(scroll)
        scroll2 = scroll;
    })
    
    $(".popWrap7,.close").click(function(){ 
        $(".popWrap7,.popCon7").fadeOut();
        $("html,body").css("overflow", "visible");
        $("html,body").off("scroll touchmove mousewheel");
        $("html,body").scrollTop(scroll2);
    })
    
    
    
    //팝업창 8번째
    $(".popWrap8,.popCon8").hide();
    
    $(".img08").click(function(e){
        e.preventDefault();
        $(".popWrap8,.popCon8").fadeIn();
        $("html,body").css("overflow", "hidden");
        $(".close span").show();
        $("html,body").on("scroll touchmove mousewheel", function (e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        })
        $("html ,body").scrollTop(scroll)
        scroll2 = scroll;
    })
    
    $(".popWrap8,.close").click(function(){ 
        $(".popWrap8,.popCon8").fadeOut();
        $("html,body").css("overflow", "visible");
        $("html,body").off("scroll touchmove mousewheel");
        $("html,body").scrollTop(scroll2);
    })
    
    
    //팝업창 9번째
    $(".popWrap9,.popCon9").hide();
    
    $(".img09").click(function(e){
        e.preventDefault();
        $(".popWrap9,.popCon9").fadeIn();
        $("html,body").css("overflow", "hidden");
        $(".close span").show();
        $("html,body").on("scroll touchmove mousewheel", function (e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        })
        $("html ,body").scrollTop(scroll)
        scroll2 = scroll;
    })
    
    $(".popWrap9,.close").click(function(){ 
        $(".popWrap9,.popCon9").fadeOut();
        $("html,body").css("overflow", "visible");
        $("html,body").off("scroll touchmove mousewheel");
        $("html,body").scrollTop(scroll2);
    })
    
    
    //팝업창 10번째
    $(".popWrap10,.popCon10").hide();
    
    $(".img10").click(function(e){
        e.preventDefault();
        $(".popWrap10,.popCon10").fadeIn();
        $("html,body").css("overflow", "hidden");
        $(".close span").show();
        $("html,body").on("scroll touchmove mousewheel", function (e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        })
        $("html ,body").scrollTop(scroll)
        scroll2 = scroll;
    })
    
    $(".popWrap10,.close").click(function(){ 
        $(".popWrap10,.popCon10").fadeOut();
        $("html,body").css("overflow", "visible");
        $("html,body").off("scroll touchmove mousewheel");
        $("html,body").scrollTop(scroll2);
    })
    
    
    //팝업창 11번째
    $(".popWrap11,.popCon11").hide();
    
    $(".img11").click(function(e){
        e.preventDefault();
        $(".popWrap11,.popCon11").fadeIn();
        $("html,body").css("overflow", "hidden");
        $(".close span").show();
        $("html,body").on("scroll touchmove mousewheel", function (e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        })
        $("html ,body").scrollTop(scroll)
        scroll2 = scroll;
    })
    
    $(".popWrap11,.close").click(function(){ 
        $(".popWrap11,.popCon11").fadeOut();
        $("html,body").css("overflow", "visible");
        $("html,body").off("scroll touchmove mousewheel");
        $("html,body").scrollTop(scroll2);
    })
    
    
    //팝업창 12번째
    $(".popWrap12,.popCon12").hide();
    
    $(".img12").click(function(e){
        e.preventDefault();
        $(".popWrap12,.popCon12").fadeIn();
        $("html,body").css("overflow", "hidden");
        $(".close span").show();
        $("html,body").on("scroll touchmove mousewheel", function (e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        })
        $("html ,body").scrollTop(scroll)
        scroll2 = scroll;
    })
    
    $(".popWrap12,.close").click(function(){ 
        $(".popWrap12,.popCon12").fadeOut();
        $("html,body").css("overflow", "visible");
        $("html,body").off("scroll touchmove mousewheel");
        $("html,body").scrollTop(scroll2);
    })
    
    
})    




var swiper = new Swiper(".swiper", {
  autoplay : {
      delay : 4000
        },
  speed: 1000,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 3,
    slideShadows: true
  },
  keyboard: {
    enabled: true
  },
  mousewheel: {
    thresholdDelta: 70
  },
  loop: true,
  loopFillGroupWithBlank: true,    
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },    
  breakpoints: {
    640: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 1
    },
    1024: {
      slidesPerView: 2
    },
    1560: {
      slidesPerView: 3
    }
  }
});





/*스크롤하면 스크롤표시 특정부분에서 안보이게 하기*/
$(".item_text").mousewheel(function(event, delta) {
  this.scrollLeft -= (delta * 100);
  event.preventDefault();
        /*스크롤시 스크롤아이콘 안보이게 하기*/
        $('.scroll').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element){
                $(this).animate({'opacity':'0'},1000);
            }
    });
                
});


