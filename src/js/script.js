// $(document).ready(function(){
//     $('.carusel__inner').slick(
//         // {
//         //     infinite: true,
//         //     slidesToShow: 2,
//         //     slidesToScroll: 2
//         //   }
//         //{
//         //dots: true,
//         // infinite: true,
//         // speed: 1200,
//         // slidesToShow: 1,
//         // centerMode: true,
//         // variableWidth: true,
//         // autoplay: true,
//         // autoplaySpeed: 2000,
//         // }
//         {
//             dots: true,
//             dotsClass:'classStyleDotCaruselSlick',
//             //adaptiveHeight: false,
//             speed: 1200,
//             prevArrow: '<button type="button" class="slick-prev"><img src="../icons/carusel/chevron_left.png"></button>',
//             nextArrow: '<button type="button" class="slick-next"><img src="../icons/carusel/chevron_right.png"></button>'
//             // ,
//             // responsive: [
//             //     {
//             //       breakpoint: 991,
//             //       settings: {
//             //         dots: true,
//             //         //dotsClass:'testDotSlide',
//             //         arrows: false,
//             //         centerMode: true,
//             //         centerPadding: '40px',
//             //         slidesToShow: 1
//             //       }
//             //     }
//             // ] 
//         }
        
//     );
//   });

  $(document).ready(function(){
    $('.owl-carousel').owlCarousel(
      {
        items:1,
        margin:10,
        loop: true,
        nav:true,
        navText: ['<img src="../icons/carusel/chevron_left.png">'
                  , '<img src="../icons/carusel/chevron_right.png">'],
        autoWidth: false,
        dots: true,
        autoHeight: true
      }
    );

    $('.carusel__inner').slick(
              // {
              //     infinite: true,
              //     slidesToShow: 2,
              //     slidesToScroll: 2
              //   }
              //{
              //dots: true,
              // infinite: true,
              // speed: 1200,
              // slidesToShow: 1,
              // centerMode: true,
              // variableWidth: true,
              // autoplay: true,
              // autoplaySpeed: 2000,
              // }
              {
                  dots: true,
                  dotsClass:'classStyleDotCaruselSlick',
                  //adaptiveHeight: false,
                  speed: 1200,
                  prevArrow: '<button type="button" class="slick-prev"><img src="../icons/carusel/chevron_left.png"></button>',
                  nextArrow: '<button type="button" class="slick-next"><img src="../icons/carusel/chevron_right.png"></button>'
                  // ,
                  // responsive: [
                  //     {
                  //       breakpoint: 991,
                  //       settings: {
                  //         dots: true,
                  //         //dotsClass:'testDotSlide',
                  //         arrows: false,
                  //         centerMode: true,
                  //         centerPadding: '40px',
                  //         slidesToShow: 1
                  //       }
                  //     }
                  // ] 
              }
              
          );
  });

  const slider = tns({
    container: '.carusel-tinyslider__inner',
    items: 1,
    slideBy: 'page',
    speed: 1200,
    gutter: 0,
    autoHeight: true,
    controls:false,
    autoplay:false,
    nav: true
   // controlsText: ['<img src="../icons/carusel/chevron_left.png">','<img src="../icons/carusel/chevron_right.png">']
    });

    document.querySelector('.prev').addEventListener('click', function () {
      slider.goTo('prev');
    });
    document.querySelector('.next').addEventListener('click', function () {
      slider.goTo('next');
    });