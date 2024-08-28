// $(document).ready(function(){
//     $('.carousel').slick({
//       dots: true,
//       infinite: true,
//       speed: 500,
//       autoplay: true,
//       autoplaySpeed: 3000,
//       slidesToShow: 5,
//       slidesToScroll: 1,
//       responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 1,
//             infinite: true,
//             dots: true
//           }
//         },
//         {
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 1,
//             initialSlide: 2
//           }
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1
//           }
//         }
//       ]
//     });
  
//     $('.image-container').on('mouseenter', function() {
//       $('.carousel').slick('slickPause');
//     }).on('mouseleave', function() {
//       $('.carousel').slick('slickPlay');
//     });
//   });

$(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 8,
        loop: true,
        margin: 20,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 0,
        autoplaySpeed: 3000,
        autoplayHoverPause: false

    });

});
//Alternate Direction
$(document).ready(function () {
    var owl = $('.owl-carousel2');
    owl.owlCarousel({
        items: 8,
        rtl: true,
        loop: true,
        margin: 20,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 0,
        autoplaySpeed: 3000,
        autoplayHoverPause: false

    });

});

