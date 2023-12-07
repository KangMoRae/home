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








var swiper = new Swiper(".mySwiper", {
  autoplay : {
      delay : 4000,
      disableOnInteraction : false,
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
  loopedSlides: 1000,
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


