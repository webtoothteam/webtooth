const maxRotationDegreesX = 31;
const maxRotationDegreesY = 31;
const perspectivePx = 600;

$(document).ready(function () {

  const trackingAreaShiftX = $(".wear").offset().left;
  const trackingAreaShiftY = $(".wear").offset().top;

  const halfTrackingAreaWidth = $(".wear").width() / 2;
  const halfTrackingAreaHeight = $(".wear").height() / 2;

  const mouseCoordinateCorrectionX = trackingAreaShiftX + halfTrackingAreaWidth;
  const mouseCoordinateCorrectionY = trackingAreaShiftY + halfTrackingAreaHeight;

  $.each($(".wear"), function (index, value) {

    let wear = index + 1;
    let ellipse = $(".wear").children()[index];
    // let ellipse = $(".wear").children()[index] && $(".fill-brief").children()[0] ;
    console.log('ellipse', ellipse);


    $(`.wear${wear}`).on("mousemove", function () {

      // let ind = $(".wear").index(this);
      // let ellipse = $(".wear").children()[ind];

      let x = event.clientX - mouseCoordinateCorrectionX;
      let y = event.clientY - mouseCoordinateCorrectionY;

      let rotationY = x * 15 / halfTrackingAreaWidth;
      let rotationX = -y * maxRotationDegreesY / halfTrackingAreaHeight;

      let transform = `perspective(${perspectivePx}px) rotate3d(1, 0, 0, ${rotationX}deg) rotate3d(0, 1, 0, ${rotationY}deg ) scale(1.2, 1.2)`;
      let transform2 = `perspective(${perspectivePx}px) rotate3d(1, 0, 0, ${rotationX}deg) rotate3d(0, 1, 0, ${rotationY}deg ) scale(1.4)`;

      $(ellipse).css("-webkit-transform", transform);
      $(ellipse).css("-webkit-transform", transform);
      $(ellipse).css("-moz-transform", transform);
      $(ellipse).css("-ms-transform", transform);
      $(ellipse).css("-o-transform", transform);
      $(ellipse).css("transform", transform);
      $(ellipse).css("transform", transform);
      $(`.el-txt${wear}`).css("transform", transform2);
      $(ellipse).css("box-shadow", "0px 4px 30px 9px rgba(249, 180, 24, 0.2)");
      $(ellipse).css("background-color", " #000");
      $(ellipse).css("z-index", " 999");

    });

    $(`.wear${wear}`).on("mouseleave", function () {

      // let ind = $(".wear").index(ellipse);
      // let ellipse = $(".wear").children()[ind];

      let transform = `perspective(0px) rotate3d(0, 0, 0, 0deg) rotate3d(0, 0, 0, 0deg) scale(1, 1)`;
      $(ellipse).css("transform", transform);
      $(ellipse).css("box-shadow", "none");

      $(`.el-txt${wear}`).css("transform", transform);
      $(ellipse).css("background-color", " transparent");
      $(ellipse).css("z-index", " -1");

    });

  });
});


//Мої правки

$('.slide-box').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<img class="prev" src="Style/Images/Arrow 2.png" alt="" style="height: 10px; cursor: pointer;">',
  nextArrow: '<img class="next" src="Style/Images/Arrow 2.png" alt="" style="transform: rotate(180deg); height: 10px; cursor: pointer;">',
  asNavFor: '.slider-nav',
  variableWidth: true,
  adaptiveHeight: true,
});
$('.slider-nav').slick({
  slidesToShow: 8,
  // slidesToScroll: 1,
  asNavFor: '.slide-box',
  variableWidth: true,
  // dots: true,
  // centerMode: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1040,
      settings: {
        slidesToShow: 4,
        // slidesToScroll: 1,
        // infinite: true,
        // dots: true
      }
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 4,
        //   slidesToScroll: 1,
        //   infinite: true,
        //   dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        // slidesToScroll: 1,
        dots: false

      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        // slidesToScroll: 1,
        dots: false

      }
    }
  ]
});


$('.slide-box').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  $('#external-buttons p.active').removeClass('active');
  $('#external-buttons p').eq(nextSlide).addClass('active');
});


$('#external-buttons p').on('click', function (e) {
  e.preventDefault();
  $('#external-buttons p.active').removeClass('active');
  $(this).addClass('active');
  var targetSlide = $(this).data('target');
  $('.slide-box').slick('slickGoTo', targetSlide);
});

  // $('.link-item img').parallaxBackground({
  //   event: 'mouse_move',
  //   animation_type: 'shift',
  //   animate_duration: 2
  // });

//   $(document).ready(function(){
//     $('div[data-type="background"]').each(function(){
//         var $bgobj = $(this); 
//         $(window).scroll(function() {
//             var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
//             var coords = 'center '+ yPos + 'px';
//             $bgobj.css({ backgroundPosition: coords });
//         });
//     });
// });


// $(window).scroll(function () {

//   $('.anim').css({
//       'top': 200-($(this).scrollTop() / 3) + "px"
//   });

// });

