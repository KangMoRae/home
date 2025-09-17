/*해더 메뉴 드롭다운*/
$(document).ready(function (){
    $('.menu_warp > li').each(function(){
        var t = null;
        var li = $(this);
        li.hover(function(){
            t = setTimeout(function(){
                li.find("ul").fadeIn(150);
                t = null;
            }, 50);
        }, function(){
            if (t){
                clearTimeout(t);
                t = null;
            }
            else
                li.find("ul").fadeOut(150);
        });
    });

});


/*반응형 햄버거 사이드메뉴 아코디언*/
    $("#menu .d1 .m").click(function(){
        var d = $(this).siblings(".sub").css("display");
        if(d=="none"){
           $("#menu .d1 .m").removeClass("active");
           $(this).addClass("active");
           $("#menu .d1 .sub").slideUp();
           $(this).siblings(".sub").slideDown();
        } else {
            $("#menu .d1 .m").removeClass("active");
            $("#menu .d1 .sub").slideUp();
        }    
        return false; //이미작동된것 중복 작동하지않게
    });
	
	
	$('#cssmenu li.active').addClass('open').children('ul').show();
	$('#cssmenu li.has-sub>a').on('click', function(){
		$(this).removeAttr('href');
		var element = $(this).parent('li');
		if (element.hasClass('open')) {
			element.removeClass('open');
			element.find('li').removeClass('open');
			element.find('ul').slideUp(200);
		}
		else {
			element.addClass('open');
			element.children('ul').slideDown(200);
			element.siblings('li').children('ul').slideUp(200);
			element.siblings('li').removeClass('open');
			element.siblings('li').find('li').removeClass('open');
			element.siblings('li').find('ul').slideUp(200);
		}
	});


/* 클릭시 배경색상 변경*/
$(".tnb li a").click(function() {
    $(".tnb li a").removeClass()
    $(this).addClass('on')
});  



/*메인화면*/
    var swiper = new Swiper(".mySwiper", {
        autoplay : {
        delay : 6000
        },
        speed: 1000,
        effect: "fade",
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        
   });


/*유튜브*/
var swiper = new Swiper(".mySwiper2", {
        slidesPerView: 2,
        spaceBetween: 20,
        slidesPerGroup: 1,
        autoplay : { 
          delay : 4500, // 시간 설정
          disableOnInteraction : false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        },
        speed: 1000,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },    
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
         1200: {
            slidesPerView: 2,
            spaceBetween: 30,
        },    
            
        }
     });


/*갤러리*/
var swiper = new Swiper(".mySwiper3", {
        slidesPerView: 2,
        spaceBetween: 20,
        slidesPerGroup: 1,
        autoplay : { 
          delay : 4500, // 시간 설정
          disableOnInteraction : false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        },
        speed: 1000,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next2',
            prevEl: '.swiper-button-prev2',
        },
        breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },    
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
         1200: {
            slidesPerView: 2,
            spaceBetween: 30,
        },    
            
        }
     });



/*탭메뉴*/
$('.tab-contents').hide();
$('.commonTab a').bind('click', function(e){
    $('.commonTab a.on').removeClass('on');
    $('.tab-contents:visible').hide();
    $(this.hash).fadeIn(300);
    $(this).addClass('on')
    e.preventDefault();
})
.filter(':eq(0)').click(); 

//클릭했을시 탭메뉴 색상 변경
   $(".commonTab li").click(function() {
        $(".commonTab li").removeClass()
            $(this).addClass('on')
  })  



/* 오시는길 sub14 탭메뉴*/
$('.tab-contents2').hide();
$('.commonTab2 a').bind('click', function(e){
    $('.commonTab2 a.on').removeClass('on');
    $('.tab-contents2:visible').hide();
    $(this.hash).fadeIn(300);
    $(this).addClass('on')
    e.preventDefault();
})
.filter(':eq(0)').click(); 

//클릭했을시 탭메뉴 색상 변경
   $(".commonTab2 li").click(function() {
        $(".commonTab2 li").removeClass()
            $(this).addClass('on')
  })  



/* 게시판 페이지 넘버 클릭시 배경색상 변경*/
$(".page_num li").click(function() {
    $(".page_num li").removeClass()
	$(this).addClass('on')
}); 



/* 기숙사 사진 슬라이드 */
var swiper = new Swiper(".mySwiper4", {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next2',
            prevEl: '.swiper-button-prev2',
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },    
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 30,
            }, 
        }
});


