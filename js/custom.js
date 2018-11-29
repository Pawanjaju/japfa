var POTENZA = {};
 
 (function($){
  "use strict";

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

/*************************
      Predefined Variables
*************************/ 
var $window = $(window),
	$document = $(document);

//Check if function exists
$.fn.exists = function () {
	return this.length > 0;
};


/*************************
      Predefined Variables
*************************/ 
   var $window = $(window),
        $document = $(document),
        $body = $('body');

    //Check if function exists
     $.fn.exists = function () {
        return this.length > 0;
    };
	

 /*************************
        Preloader
*************************/  
  POTENZA.preloader = function () {
       $("#load").fadeOut();
       $('#preloader').delay(0).fadeOut('slow');
   };
	

/*************************
       Mega menu
*************************/    
 POTENZA.megaMenu = function () {   
      $('#menu').megaMenu({
               // DESKTOP MODE SETTINGS
              logo_align          : 'left',         // align the logo left or right. options (left) or (right)
              links_align         : 'left',        // align the links left or right. options (left) or (right)
              socialBar_align     : 'left',    // align the socialBar left or right. options (left) or (right)
              searchBar_align     : 'right',   // align the search bar left or right. options (left) or (right)
              trigger             : 'hover',           // show drop down using click or hover. options (hover) or (click)
              effect              : 'fade',             // drop down effects. options (fade), (scale), (expand-top), (expand-bottom), (expand-left), (expand-right)
              effect_speed        : 400,          // drop down show speed in milliseconds
              sibling             : true,              // hide the others showing drop downs if this option true. this option works on if the trigger option is "click". options (true) or (false)
              outside_click_close : true,  // hide the showing drop downs when user click outside the menu. this option works if the trigger option is "click". options (true) or (false)
              top_fixed           : false,           // fixed the menu top of the screen. options (true) or (false)
              sticky_header       : true,       // menu fixed on top when scroll down down. options (true) or (false)
              sticky_header_height: 250,  // sticky header height top of the screen. activate sticky header when meet the height. option change the height in px value.
              menu_position       : 'horizontal',    // change the menu position. options (horizontal), (vertical-left) or (vertical-right)
              full_width          : false,           // make menu full width. options (true) or (false)
             // MOBILE MODE SETTINGS
              mobile_settings     : {
                collapse            : true,    // collapse the menu on click. options (true) or (false)
                sibling             : true,      // hide the others showing drop downs when click on current drop down. options (true) or (false)
                scrollBar           : true,    // enable the scroll bar. options (true) or (false)
                scrollBar_height    : 400,  // scroll bar height in px value. this option works if the scrollBar option true.
                top_fixed           : false,       // fixed menu top of the screen. options (true) or (false)
                sticky_header       : false,   // menu fixed on top when scroll down down. options (true) or (false)
                sticky_header_height: 200   // sticky header height top of the screen. activate sticky header when meet the height. option change the height in px value.
             }
      });
  }

  /*************************
       owl-carousel 
*************************/

 POTENZA.carousel = function () {
    $(".owl-carousel").each(function () {
        var $this = $(this),
            $items = ($this.data('items')) ? $this.data('items') : 1,
            $loop = ($this.data('loop')) ? $this.data('loop') : true,
            $navdots = ($this.data('nav-dots')) ? $this.data('nav-dots') : false,
            $navarrow = ($this.data('nav-arrow')) ? $this.data('nav-arrow') : false,
            $autoplay = ($this.attr('data-autoplay')) ? $this.data('autoplay') : false,
            $space = ($this.attr('data-space')) ? $this.data('space') : 15;     
            $(this).owlCarousel({
                loop: $loop,
                items: $items,
                responsive: {
                  0:{items: $this.data('xx-items') ? $this.data('xx-items') : 1},
                  480:{items: $this.data('xs-items') ? $this.data('xs-items') : 1},
                  768:{items: $this.data('sm-items') ? $this.data('sm-items') : 2},
                  980:{items: $this.data('md-items') ? $this.data('md-items') : 3},
                  1200:{items: $items}
                },
                dots: $navdots,
                margin:$space,
                nav: $navarrow,
                navText:["<i class='fa fa-angle-left fa-2x'></i>","<i class='fa fa-angle-right fa-2x'></i>"],
                autoplay: $autoplay,
                autoplayHoverPause: true ,
                center: true  
            }); 
           
    }); 
}

/*************************
     Back to top
*************************/
 POTENZA.goToTop = function () {
  var $goToTop = $('#back-to-top');
  var $floating_btn=$('.floating-container');
      $goToTop.hide();
      $floating_btn.hide();
    	$window.scroll(function(){
        if ($window.scrollTop()>100){
          if($window.width()>767)
              $goToTop.fadeIn();
          $floating_btn.fadeIn();
        }
        else{
          if($window.width()>767)
             $goToTop.fadeOut();
          $floating_btn.fadeOut();
        }
  	  });
  	$goToTop.on("click", function () {
  		$('body,html').animate({scrollTop:0},1000);
  		return false;
    });
  }

/****************************************************
     POTENZA Window load and functions
****************************************************/

  //Window load functions
    $window.load(function () {
          POTENZA.preloader();
    });

 //Document ready functions
    $document.ready(function () {
        POTENZA.megaMenu(),
        POTENZA.carousel(),
        POTENZA.goToTop();
    });

    /*=============== Image parallax ============== */
    // if ($("#card").exists()) {
    //   const move = (e) => {
    //       const element = document.getElementById("card");
    //       let distx = e.clientX;
    //       let disty = e.clientY;
    //       let data = element.getBoundingClientRect()
    //       let {
    //           x,
    //           y,
    //           width,
    //           height
    //       } = data;
    //       let elemx = x + width / 2;
    //       let elemy = y + height / 2;

    //       let a = elemy - disty;
    //       let b = distx - elemx;

    //       element.setAttribute("style", `transform:perspective(500px) rotateX(${a/20}deg) rotateY(${b/20}deg) rotateZ(0deg)`);
    //   }
    //   document.onmousemove = move;
    // }
/*=============== ============== */
// (function () {
//   var delay = false;

//   $(document).on('mousewheel DOMMouseScroll', function (event) {
//     event.preventDefault();
//     if (delay) return;

//     delay = true;
//     setTimeout(function () {
//       delay = false
//     }, 200)

//     var wd = event.originalEvent.wheelDelta || -event.originalEvent.detail;

//     var a = document.getElementsByTagName('section');
//     if (wd < 0) {
//       for (var i = 0; i < a.length; i++) {
//         var t = a[i].getClientRects()[0].top;
//         if (t >= 40) break;
//       }
//     } else {
//       for (var i = a.length - 1; i >= 0; i--) {
//         var t = a[i].getClientRects()[0].top;
//         if (t < -20) break;
//       }
//     }
//     $('html,body').animate({
//       scrollTop: a[i].offsetTop
//     });
//   });
// })();
   // JavaScript for label effects only
   $(window).load(function () {
     $(".col-3 input").val("");
     $(".col-3 select").val("");
     $(".input-effect .effect-21").focusout(function () {
       if ($(this).val() != "") {
         $(this).addClass("has-content");
       } else {
         $(this).removeClass("has-content");
       }
     })
   });
   
   

})(jQuery);

/* Journey of bird process line    */
// if($('.process').exists()){
// var process = $('.process');
// var canvas = document.getElementById('canvas');
// var ctx = canvas.getContext('2d');

// var SECTION_WIDTH = 400;

// var sections = [];
// var create = function(start) {
//   var section = {
//     start: start,
//     width: SECTION_WIDTH,
//     height: 45,
//     hMax: 35,
//     hMod: 0,
//     progress: 0,
//     dot: {
//       x: 0,
//       y: 0
//     }
//   };
//   section.end = section.start + section.width;
//   section.dot.x = section.start + section.width/2;
//   section.dot.y = section.height;
//   sections.push(section);
// };

// var draw = function(s) {
//   var wMod = s.width * 0.3;
//   ctx.beginPath();
//   ctx.moveTo(s.start, s.height);
//   ctx.bezierCurveTo(
//     s.start+wMod, s.height,
//     s.start+wMod, s.height - s.hMod,
//     s.start + s.width/2, s.height - s.hMod
//   );
//   ctx.bezierCurveTo(
//     s.end-wMod, s.height - s.hMod,
//     s.end-wMod, s.height,
//     s.end, s.height
//   );
//   ctx.lineWidth = 4;
//   ctx.strokeStyle = '#fff';
//   ctx.stroke();
  
//   ctx.beginPath();
//   ctx.fillStyle = '#fff';
//   ctx.arc(s.dot.x, s.dot.y, 8, 0, Math.PI * 2);
//   ctx.fill();
// };

// function quad(progress) {
//   return Math.pow(progress, 2);
// }
// function makeEaseOut(delta) { 
//   return function(progress) {
//     return 1 - delta(1 - progress);
//   }
// }
// var quadOut = makeEaseOut(quad);

// var bend = function(s) {
//   if(s.progress < s.hMax) {
//     var delta = quadOut(s.progress/s.hMax);
//     s.hMod = s.hMax*delta;
//     s.dot.y = s.height - s.hMax*delta;
//     s.progress++;
//   }
// };
// var reset = function(s) {
//   if(s.progress > 0) {
//     var delta = quadOut(s.progress/s.hMax);
//     s.hMod = s.hMax*delta;
//     s.dot.y = s.height - s.hMax*delta;
//     s.progress -= 2;
//   } else {
//     s.hMod = 0;
//     s.dot.y = s.height;
//     s.progress = 0;
//   }
// };

// var currentSection = 0;
// process.on('mousemove', function(event) {
//   var scroll = $(process).scrollLeft();
//   var section = Math.floor((event.clientX - process.offset().left + scroll) / SECTION_WIDTH);
//   currentSection = section;
//   process.find('.active').removeClass('active');
//   process.find('li').eq(section).addClass('active');
//   if(scroll==0){
//     $(".process").animate({
//         scrollLeft: 500
//     });
//   }
//   else{
//     $(".process").animate({
//         scrollLeft: -300
//     });
//   }
// });

// create(0);
// create(400);
// create(800);
// create(1200);
// create(1600);
// create(2000);
// create(2400);
// create(2800);
// var loop = function() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
  
//   sections.forEach(function(s, index) {
//     if(currentSection === index) {
//       bend(s);
//     } else {
//       reset(s);
//     }
//     draw(s);
//   });
  
//   window.requestAnimationFrame(loop);
// };
// loop();
// }

$(document).ready(function () {
  var panelRight = document.querySelector('.panels__side--right');
  
  var openRight = function() {
    panelRight.classList.toggle('panels__side--right-active');
    document.querySelector('.wemake_block').classList.toggle('wemake_block-active');
  };
  if($(window).width() < 641){
    $('.arrow--right').on('click', openRight);
  }
  $('.arrow--right').on('click', openRight);
  $('.wemake_block').hover(function(){
    $('.panels__side--right').addClass('panels__side--right-active');
    $('.wemake_block').addClass('wemake_block-active');
    setTimeout(function(){
        $('.wemake_block p').fadeIn();
    },800);
  }, function(){
      $('.panels__side--right').removeClass('panels__side--right-active');
      $('.wemake_block').removeClass('wemake_block-active');
      $('.wemake_block p').fadeOut();
  });
});

$(document).ready(function () {
    var block_sec=$('.business_sec');
    var block=$('.business_block');
    var block_img=$('.business_block img');
    var block_hov=$('.business_block_hov');
    var block_hov_content=$('.business_block_hov .fig_content');
    var ht=block_img.height();
    if($(window).width()>768){
      $('.business_sec').hover(function(){
        $(this).find(block).hide();
        $(this).find(block_hov).addClass('active');
        $(this).find(block_hov_content).css('height',ht);
      }, function(){
        $(this).find(block).show();
        $(this).find(block_hov).removeClass('active');
        $(this).find(block_hov_content).css('height',0);
      });
    }
    else{
      $('.business_sec').on('click',function(){
        if($(this).find('.business_block_hov.active').exists()){
          $(block).show();
          $(block_hov).removeClass('active');
          $(this).find(block).show();
          $(this).find(block_hov).removeClass('active');
        }
        else{
          $(block).show();
          $(block_hov).removeClass('active');
          $(this).find(block).hide();
          $(this).find(block_hov).addClass('active');
        }
      });
    }
});

$(window).load(function(){
  $(".input-effect input").val("");
  $("#contactForm .effect-21").focus(function(){
    $(this).parent().addClass('mt-20');
  });
  $("#contactForm .effect-21").focusout(function(){
    if($(this).val() != ""){
      $(this).addClass("has-content");
    }else{
      $(this).removeClass("has-content");
      $(this).parent().removeClass('mt-20');
    }
  })
});
$(window).load(function () {
  $('#btn-send').click(function(e){
    e.preventDefault();
    $('.form').addClass('wow bounceOutRight animated'); 
    // $('#slide-email').delay(2000).addClass('d-none');
    $('#slide-thanks').fadeIn(3200).removeClass('d-none');
  });
});

/*----------------Nab tabs----------------------*/
$(document).ready(function () {
  var nav_tab=$(".nav-tabs li a");
  nav_tab.on('click',function(){
    if($(window).scrollTop()>200){
      $('html, body').animate({
        scrollTop: $('.tab-content').offset().top-150 },
          1000);
      }
  });

});
$(document).ready(function () {
  if($('.nav.nav-tabs li').exists()){
    $('.nav.nav-tabs li').on('click',function(){
      var active_href=$('.nav-tabs li.active img').attr('src');
      var result=[];
      result=active_href.split('/');
      var new_activehref="images/Icons/"+result[2];
      $('.nav-tabs li.active img').attr('src',new_activehref);
      var href=$(this).find('img').attr('src');
      var res=[];
      res=href.split('/');
      var new_href="images/hover_icons/"+res[2];
      $(this).find('a img').attr('src',new_href);
    });
  }
});
$(document).ready(function () {
  if($('.nav.nav-tabs li').exists()){
    var active_href=$('.nav-tabs li.active img').attr('src');
    var result=[];
    result=active_href.split('/');
    var new_activehref="images/hover_icons/"+result[2];
    $('.nav-tabs li.active img').attr('src',new_activehref);
    
    $('.nav.nav-tabs li').hover(function(){
      var href=$(this).find('img').attr('src');
      var res=[];
      res=href.split('/');
      var new_href="images/hover_icons/"+res[2];
      $(this).find('a img').attr('src',new_href);
    }, function(){
      var href=$(this).find('img').attr('src');
        var res=[];
        res=href.split('/');
        if($(this).hasClass('active')){
          var new_href="images/hover_icons/"+res[2];
          $(this).find('a img').attr('src',new_href);
        }
        else{
          var new_href="images/Icons/"+res[2];
          $(this).find('a img').attr('src',new_href);
        }
    })
  }
});

// jQuery.easing['jswing'] = jQuery.easing['swing'];

// jQuery.extend(jQuery.easing, {
//     def: 'easeOutQuad',
//     swing: function (x, t, b, c, d) {
//         //alert(jQuery.easing.default);
//         return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
//     },
//     easeInQuad: function (x, t, b, c, d) {
//         return c * (t /= d) * t + b;
//     },
//     easeOutQuad: function (x, t, b, c, d) {
//         return -c * (t /= d) * (t - 2) + b;
//     },
//     easeInOutQuad: function (x, t, b, c, d) {
//         if ((t /= d / 2) < 1) return c / 2 * t * t + b;
//         return -c / 2 * ((--t) * (t - 2) - 1) + b;
//     },
//     easeInCubic: function (x, t, b, c, d) {
//         return c * (t /= d) * t * t + b;
//     },
//     easeOutCubic: function (x, t, b, c, d) {
//         return c * ((t = t / d - 1) * t * t + 1) + b;
//     },
//     easeInOutCubic: function (x, t, b, c, d) {
//         if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
//         return c / 2 * ((t -= 2) * t * t + 2) + b;
//     },
//     easeInQuart: function (x, t, b, c, d) {
//         return c * (t /= d) * t * t * t + b;
//     },
//     easeOutQuart: function (x, t, b, c, d) {
//         return -c * ((t = t / d - 1) * t * t * t - 1) + b;
//     },
//     easeInOutQuart: function (x, t, b, c, d) {
//         if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
//         return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
//     },
//     easeInQuint: function (x, t, b, c, d) {
//         return c * (t /= d) * t * t * t * t + b;
//     },
//     easeOutQuint: function (x, t, b, c, d) {
//         return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
//     },
//     easeInOutQuint: function (x, t, b, c, d) {
//         if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
//         return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
//     },
//     easeInSine: function (x, t, b, c, d) {
//         return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
//     },
//     easeOutSine: function (x, t, b, c, d) {
//         return c * Math.sin(t / d * (Math.PI / 2)) + b;
//     },
//     easeInOutSine: function (x, t, b, c, d) {
//         return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
//     },
//     easeInExpo: function (x, t, b, c, d) {
//         return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
//     },
//     easeOutExpo: function (x, t, b, c, d) {
//         return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
//     },
//     easeInOutExpo: function (x, t, b, c, d) {
//         if (t == 0) return b;
//         if (t == d) return b + c;
//         if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
//         return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
//     },
//     easeInCirc: function (x, t, b, c, d) {
//         return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
//     },
//     easeOutCirc: function (x, t, b, c, d) {
//         return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
//     },
//     easeInOutCirc: function (x, t, b, c, d) {
//         if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
//         return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
//     },
//     easeInElastic: function (x, t, b, c, d) {
//         var s = 1.70158;
//         var p = 0;
//         var a = c;
//         if (t == 0) return b;
//         if ((t /= d) == 1) return b + c;
//         if (!p) p = d * .3;
//         if (a < Math.abs(c)) {
//             a = c;
//             var s = p / 4;
//         } else var s = p / (2 * Math.PI) * Math.asin(c / a);
//         return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
//     },
//     easeOutElastic: function (x, t, b, c, d) {
//         var s = 1.70158;
//         var p = 0;
//         var a = c;
//         if (t == 0) return b;
//         if ((t /= d) == 1) return b + c;
//         if (!p) p = d * .3;
//         if (a < Math.abs(c)) {
//             a = c;
//             var s = p / 4;
//         } else var s = p / (2 * Math.PI) * Math.asin(c / a);
//         return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
//     },
//     easeInOutElastic: function (x, t, b, c, d) {
//         var s = 1.70158;
//         var p = 0;
//         var a = c;
//         if (t == 0) return b;
//         if ((t /= d / 2) == 2) return b + c;
//         if (!p) p = d * (.3 * 1.5);
//         if (a < Math.abs(c)) {
//             a = c;
//             var s = p / 4;
//         } else var s = p / (2 * Math.PI) * Math.asin(c / a);
//         if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
//         return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
//     },
//     easeInBack: function (x, t, b, c, d, s) {
//         if (s == undefined) s = 1.70158;
//         return c * (t /= d) * t * ((s + 1) * t - s) + b;
//     },
//     easeOutBack: function (x, t, b, c, d, s) {
//         if (s == undefined) s = 1.70158;
//         return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
//     },
//     easeInOutBack: function (x, t, b, c, d, s) {
//         if (s == undefined) s = 1.70158;
//         if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
//         return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
//     },
//     easeInBounce: function (x, t, b, c, d) {
//         return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
//     },
//     easeOutBounce: function (x, t, b, c, d) {
//         if ((t /= d) < (1 / 2.75)) {
//             return c * (7.5625 * t * t) + b;
//         } else if (t < (2 / 2.75)) {
//             return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
//         } else if (t < (2.5 / 2.75)) {
//             return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
//         } else {
//             return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
//         }
//     },
//     easeInOutBounce: function (x, t, b, c, d) {
//         if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
//         return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
//     }
// });

// $(document).ready(function () {
//   var offset1=-95;
//     $.scrollify({
//       section : ".smooth_scroll",
//       interstitialSection:".header1,.footer1",
//       sectionName : "section-name",
//       offset: offset1,
//       setHeight:true,
//       scrollSpeed: 800,
//       easing: "easeInOutCirc"
//     });
// });

