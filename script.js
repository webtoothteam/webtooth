
const maxRotationDegreesX = 31;
const maxRotationDegreesY = 31;
const perspectivePx = 600;

$(document).ready(function () {

  const trackingAreaShiftX = $(".wear").offset().left;
  const trackingAreaShiftY = $(".wear").offset().top;

  const halfTrackingAreaWidth = $(".wear").width() / 2;
  const halfTrackingAreaHeight = $(".wear").height() / 2;

  const mouseCoordinateCorrectionX = trackingAreaShiftX + halfTrackingAreaWidth * 2;
  const mouseCoordinateCorrectionY = trackingAreaShiftY + halfTrackingAreaHeight * 2;


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

      let rotationY = x * 2.9 / halfTrackingAreaWidth;
      // let rotationX = -y * maxRotationDegreesY / halfTrackingAreaHeight;
      let rotationX = (-y * 1.9 / halfTrackingAreaHeight) * (0.8);

      let transform = `perspective(${perspectivePx}px) rotate3d(1, 0, 0, ${rotationX * 0.2}deg) rotate3d(0, 1, 0, ${rotationY * 2}deg ) scale(1.2, 1.2)`;
      let transform2 = `perspective(${perspectivePx}px) rotate3d(1, 0, 0, ${rotationX}deg) rotate3d(0, 1, 0, ${rotationY * 2}deg ) scale(1.3, 1.3)`;
      // let transform = `perspective(${perspectivePx}px) rotateX(${rotationX}deg) rotateY( ${rotationY}deg ) scale3d(1.04, 1.04, 1.04);`;

      $(ellipse).css("-webkit-transform", transform);
      $(ellipse).css("-webkit-transform", transform);
      $(ellipse).css("-moz-transform", transform);
      $(ellipse).css("-ms-transform", transform);
      $(ellipse).css("-o-transform", transform);
      $(ellipse).css("transform", transform);
      $(ellipse).css("transform", transform);
      $(`.el-txt${wear}`).css({
        "transform": transform2,
        'text-shadow': `${rotationY * 0.15}px ${rotationX * 0.15}px 2px #A0968F`
      });
      $(ellipse).css("box-shadow", "0px 4px 30px 4px rgba(249, 180, 24, 0.2)");
      $(ellipse).css("background-color", " #000");
      $(ellipse).css("z-index", " 999");

    });

    $(`.wear${wear}`).on("mouseleave", function () {

      // let ind = $(".wear").index(ellipse);
      // let ellipse = $(".wear").children()[ind];

      let transform = `perspective(0px) rotate3d(0, 0, 0, 0deg) rotate3d(0, 0, 0, 0deg) scale(1, 1)`;
      $(ellipse).css("transform", transform);
      $(ellipse).css("box-shadow", "none");

      $(`.el-txt${wear}`).css({
        "transform": transform,
        'text-shadow': `0px 0px 0px `
      });
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
  // prevArrow: '<img class="prev" src="Style/Images/Arrow 2.png" alt="" style="height: 10px; cursor: pointer;">',
  // nextArrow: '<img class="next" src="Style/Images/Arrow 2.png" alt="" style="transform: rotate(180deg); height: 10px; cursor: pointer;">',
  prevArrow: '<a class="prev" style="height: 10px; cursor: pointer; color: #FFFFFF"> &#10229; </a>',
  nextArrow: '<a class="next" style="height: 10px; cursor: pointer; color: #FFFFFF"> &#10230; </a>',
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
  arrows: true,
  prevArrow: '<a class="fornone" style="height: 10px; cursor: pointer; color: #FFFFFF; display: none"> </a>',
  nextArrow: '<a class="fornone" style="height: 10px; cursor: pointer; color: #FFFFFF; display: none"> </a>',

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
        slidesToShow: 2,
        //   slidesToScroll: 1,
        //   infinite: true,
        //   dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 8,
        arrows: false,
        slidesToScroll: 1,
        dots: false

      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
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




//parallax scroll
$(document).ready(function () {
  // if ($(window).width() < 992){ 
  if ($(window).width() > 850) {

    $(window).on("load scroll", function () {

      var parallaxElement = $(".about-members"),
        parallaxQuantity = parallaxElement.length;
      window.requestAnimationFrame(function () {
        for (var i = 0; i < parallaxQuantity; i++) {
          var currentElement = parallaxElement.eq(i),
            windowTop = $(window).scrollTop(),
            elementTop = currentElement.offset().top,
            elementHeight = currentElement.height(),
            // viewPortHeight = window.innerHeight * 0.5 - elementHeight * 0.5;
            viewPortHeight = window.innerHeight * 0.5 - elementHeight;
          scrolled = windowTop - elementTop + viewPortHeight;

          viewPortHeight2 = window.innerHeight * 0.05 - ($('.hi').scrollTop()) * 0.05;

          shiftDistance2 = ($('.hi').offset().top - windowTop) * 0.8;
          scrolled2 = windowTop - $('.hi').offset().top + viewPortHeight2;



          var shiftDistance = (elementTop - windowTop) * 0.05;

          speed = currentElement.data('animation-speed') + 's';

          currentElement.css({
            // transform: "translateY("+shiftDistance+"px)",
            transform: "translate3d(0," + scrolled * -0.06 + "px, 0)",
            // transition: `transform  ${speed} cubic-bezier(.19,1,.22,1)`
            transition: `0.6s linear`

            // transition: `transform cubic-bezier(.19,1,.22,1) ${speed}`

            // transition: `transform cubic-bezier(.19,1,.22,1) `
          });
          $('.members-photo').css({
            transform: "translate3d(0," + scrolled * 0.02 + "px, 0)",
            transition: `0.6s linear`
            // transition: `transform cubic-bezier(.19,1,.22,1) ${speed}`
          })
          // $(".lef").css({

          //   transform: "translateX(" + -shiftDistance + "px)",
          //   transition: `0.6s linear`
          // });
          // $(".rig").css({

          //   transform: "translateX(" + shiftDistance + "px)",
          //   transition: `0.6s linear`
          // });
          $('.hello').css({
            transform: "translate3d(0," + scrolled2 * -0.05 + "px, 0)",
            transition: `transform cubic-bezier(.19,1,.22,1) ${speed}`

            // transform: "translateY(" + shiftDistance2 + "px)",
            // transition: `linear`

          });
          // $('.we').css({
          //   transform: "translateX(" + shiftDistance2 * -0.2 + "px)",
          //   transition: `linear`

          // })


        }
      });
    });


  }
  else {
    $('.out-best-team-mobile').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      infinite: true,
      // prevArrow: '<a class="prev" style="height: 10px; cursor: pointer; color: #FFFFFF"> &#10229; </a>',
      // nextArrow: '<a class="next" style="height: 10px; cursor: pointer; color: #FFFFFF"> &#10230; </a>',
      // asNavFor: '.slider-nav',
      variableWidth: true,
      adaptiveHeight: true,

    });
  }
});



$(document).ready(function () {

  const trackingAreaShiftX = $(".art-item-box").offset().left;
  const trackingAreaShiftY = $(".art-item-box").offset().top;

  const halfTrackingAreaWidth = $(".art-item-box").width() / 2;
  const halfTrackingAreaHeight = $(".art-item-box").height() / 2;

  const mouseCoordinateCorrectionX = trackingAreaShiftX + halfTrackingAreaWidth * 2;
  const mouseCoordinateCorrectionY = trackingAreaShiftY + halfTrackingAreaHeight * 2;


  $.each($(".art-item"), function (index, value) {

    let wear = index + 1;
    let ellipse = $(".art-item").children()[index];
    console.log('ellipse2', ellipse);


    $(`.art-item${wear}`).on("mousemove", function () {


      let x = event.clientX - mouseCoordinateCorrectionX;
      let y = event.clientY - mouseCoordinateCorrectionY;

      let rotationY = x * 2.9 / halfTrackingAreaWidth;
      let rotationX = (-y * 1.9 / halfTrackingAreaHeight) * (0.8);

      let transform = `perspective(${perspectivePx}px) rotate3d(1, 0, 0, ${rotationX}deg) rotate3d(0, 1, 0, ${rotationY}deg ) scale(1.05, 1.05)`;

      // $(ellipse).css({ right: rotationX*4 + 'px', top: rotationY*4 + 'px' ,
      // transition: `linear`});

      $(ellipse).css("-webkit-transform", transform);
      $(ellipse).css("-webkit-transform", transform);
      $(ellipse).css("-moz-transform", transform);
      $(ellipse).css("-ms-transform", transform);
      $(ellipse).css("-o-transform", transform);
      $(ellipse).css("transform", transform);
      $(ellipse).css("transform", transform);
      $(ellipse).css({ "background-size": "100%" });

    });

    $(`.art-item${wear}`).on("mouseleave", function () {
      let transform = `perspective(0px) rotate3d(0, 0, 0, 0deg) rotate3d(0, 0, 0, 0deg) scale(1, 1)`;
      $(ellipse).css("transform", transform);
      $(ellipse).css({ "background-size": "0%" });


    });

  });
});




// $.each($(".art-item"), function (index, value) {

//       let wear = index + 1;
//       let ellipse2 = $(".art-item").children()[index];


//   $(".art-item1").mouseover(function() {
//     console.log('ellipse2', ellipse2);
//       var dWidth = $(document).width() - 100, // 100 = image width
//           dHeight = $(document).height() - 100, // 100 = image height
//           nextX = Math.floor(Math.random() * dWidth),
//           nextY = Math.floor(Math.random() * dHeight);
//       $(this).animate({ left: nextX + 'px', top: nextY + 'px' });
//   });
// });



$(document).ready(function () {

  const trackingAreaShiftX = $(".fill-brief").offset().left;
  const trackingAreaShiftY = $(".fill-brief").offset().top;

  const halfTrackingAreaWidth = $(".fill-brief").width() / 2;
  const halfTrackingAreaHeight = $(".fill-brief").height() / 2;

  const mouseCoordinateCorrectionX = trackingAreaShiftX + halfTrackingAreaWidth * 2;
  const mouseCoordinateCorrectionY = trackingAreaShiftY + halfTrackingAreaHeight * 2;


  // $.each($(".art-item"), function (index, value) {

  //   let wear = index + 1;
  let ellipse = $(".ellipse");
  let inner = $(".ellipse").html;
  //   console.log('ellipse2', ellipse);


  $(`.fill-brief`).on("mousemove", function () {


    let x = event.clientX - mouseCoordinateCorrectionX;
    let y = event.clientY - mouseCoordinateCorrectionY;

    let rotationY = x * 20 / halfTrackingAreaWidth;
    let rotationX = (-y * 10 / halfTrackingAreaHeight) * (0.8);

    let transform = `perspective(${perspectivePx}px) rotate3d(1, 0, 0, ${rotationX}deg) rotate3d(0, 1, 0, ${rotationY}deg ) scale(1.05, 1.05)`;
    let transform2 = `perspective(${perspectivePx}px) rotate3d(1, 0, 0, ${rotationX}deg) rotate3d(0, 1, 0, ${rotationY * 2}deg ) scale(1.3, 1.3)`;

    // $(ellipse).css({ right: rotationX*4 + 'px', top: rotationY*4 + 'px' ,
    // transition: `linear`});

    $(ellipse).css("transform", transform);
    $(inner).css({
      "transform": transform2,
      'text-shadow': `${rotationY * 0.15}px ${rotationX * 0.15}px 2px #A0968F`
    });
    $(ellipse).css("box-shadow", "0px 4px 30px 4px rgba(249, 180, 24, 0.2)");
    // $(ellipse).css("background-color", " #000");

  });

  $(`.fill-brief`).on("mouseleave", function () {

    // let ind = $(".wear").index(ellipse);
    // let ellipse = $(".wear").children()[ind];

    let transform = `perspective(0px) rotate3d(0, 0, 0, 0deg) rotate3d(0, 0, 0, 0deg) scale(1, 1)`;

    $(ellipse).css("transform", transform);
    $(ellipse).css("box-shadow", "none");

    $(inner).css({
      "transform": transform,
      'text-shadow': `0px 0px 0px `
    });
    $(ellipse).css("background-color", " transparent");
  });

  // });

  $(window).on({
    scroll: () => {
      if (window.scrollY > 1) {
        $('.header').css('position', 'fixed');
        $('.header').css('width', '100%');
        $('.header').css('margin-left', '-20px');
        $('.header').css('background-color', 'blck');
        $('#logo').css('opacity', '0');
        $('.menu').css('opacity', '0');
        $('.burger').css('opacity', '0');
      } else {
        $('.header').css('position', 'static');
        $('.header').css('width', '100%');
        $('#logo').css('opacity', '1');
        $('.menu').css('opacity', '1');
        $('.burger').css('opacity', '1');
        $('.header').css('margin-left', '0');
      }
    }
  })

  $('.arrow-up').click(() => {
    $('html').animate({
      scrollTop: -900
    }, 900)
  })

});