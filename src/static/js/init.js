$(document).ready(function () {	
  //blog sec slider     
  $('#js-blog-sec-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 1239,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
      },{
        breakpoint: 767,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });
  
  //video sec slider     
  $('#js-video-sec-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 1239,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
      },{
        breakpoint: 767,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });
  
  //docs-sec-slider     
  $('#js-docs-sec-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 1239,
        settings: {
          arrows: false,
          slidesToShow: 3
        }
      },{
        breakpoint: 767,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });
  
  //article slider     
  $('.js-article-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    fade: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          arrows: false
        }
      }
    ]
  });  
  
  //diag slider     
  $('#js-diag-sec-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    fade: true,
    responsive: [
      {
        breakpoint: 1239,
        settings: {
          arrows: false
        }
      },
      {
        breakpoint: 1025,
        settings: {
          arrows: false
        }
      }
    ]
  });
  
  //maskedinput
  $('.input_tel').mask("+7 (999) 999-9999");
});