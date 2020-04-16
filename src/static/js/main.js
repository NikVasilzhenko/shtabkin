//поля ввода
function addClassValue($this){	
  if($this.value.trim() != false){
    $this.parentElement.classList.add('value');
  } else{
    $this.parentElement.classList.remove('value');
  }
}
function addClassFocused($this){
  $this.parentElement.classList.add('focused');
}
function removeClassFocused($this){
  $this.parentElement.classList.remove('focused');
}
function addTelPrefix($this){
  $this.value = '+7(';
}

$(document).ready(function () {  
  //up
  $('#js-up').click(function(){
    $('html, body').animate({ scrollTop: 0}, 250); 
  });
  
  //bar menu
  $('.js-hide-menu-btn').on('click', function(){
    $('#js-burger').add('#js-hide-menu').add('#js-hide-menu').toggleClass('open');
    $('#js-hide-menu-overlay').fadeToggle(250);
  });
  
  //video-popup
  if($('#js-video-vrapper').length){
    let iframe = $('#js-video-container iframe');
  	$('.js-blind').on('click', function(){
      let winHeight = $(window).height() / 2,
          blinPos = $(this).offset().top + ($(this).height() / 2),
          scrollPos = blinPos - winHeight;
      $('#js-video-vrapper').fadeIn(250).addClass('show');
      $('html, body').animate({ scrollTop: scrollPos}, 250);
      let srcAttr = $(this).attr('data-href');
      iframe.attr("src", srcAttr + "?autohide=1&amp;autoplay=1");
  	});
  
    $('.js-video-close').on('click', function(){
      $('#js-video-vrapper').fadeOut(250).removeClass('show');
      iframe.removeAttr("src");
    });
  }
  
  //accordion
  $('.js-accordion-btn').on('click', function(){
    if($(this).hasClass('open')){
      $(this).removeClass('open').next('.js-accordion-main').slideUp(250);
    } else{
      $('.js-accordion-btn').removeClass('open');
      $('.js-accordion-main').slideUp(250);
      $(this).addClass('open').next('.js-accordion-main').slideDown(250);
    }
  });
  
  //tab
  $(".js-tab-item").not(":first-child").hide();
  $(".js-tab").click(function() {
    if(!$(this).hasClass('active')){
      let tabsContainer = $(this).closest(".js-tabs"),
          tabs = tabsContainer.find(".js-tab"),
          tabsItems = tabsContainer.find(".js-tab-item");                
      tabs.removeClass("active").eq($(this).index()).addClass("active");
  
      tabsItems.hide().eq($(this).index()).fadeIn()
    }
  }).eq(0).addClass("active");
  
  //close popup
  $('.js-popup-close').on('click', function(){
    $(this).closest('.js-popup').fadeOut(250);
  });
  
  //big-menu acordion
  $('.js-big-nav-sec-title a').on('click', function(e){    
    if($(window).width() < 1024){
      e.preventDefault();
      if($(this).hasClass('open')){
        $(this).removeClass('open');
        $(this).closest('.js-big-nav-sec-title').next().slideUp(250);
      } else{
        $('.js-big-nav-sec-title a').removeClass('open');
        $('.js-big-nav-sec-title a').closest('.js-big-nav-sec-title').next().slideUp(250);
        $(this).addClass('open');
        $(this).closest('.js-big-nav-sec-title').next().slideDown(250);
      }
    }
  });
  
  /*кнопка скролл*/
  $('.js-scroll').click(function(e){
    e.preventDefault();
    let anchor = $(this).attr("href");
    let scroll_el = $(anchor);
    if ($(scroll_el).length != 0) { 
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top - 70}, 250); 
    }
  });
  
  /*тарифы*/
  $('.js-tarrifs-btn').on('click', function(){
    if($(this).hasClass('open')){
      $(this).removeClass('open').find('span').text('ПОКАЗАТЬ СПИСОК РАБОТ');
      $(this).closest('.js-tarrifs').find('.js-tarrifs-col-hide').slideUp(250);
    } else{
      $(this).addClass('open').find('span').text('СВЕРНУТЬ СПИСОК РАБОТ');
      $(this).closest('.js-tarrifs').find('.js-tarrifs-col-hide').slideDown(250);
    }
  });
  function setButtonPosition(){  
    if($(window).width() < 768){
      let left = -($('.js-tarrifs-btn').offset().left) + ($(window).width() / 2);
      $('.js-tarrifs-btn span').css('left', left + 'px');
    } else{
      $('.js-tarrifs-btn span').attr('style', '');
    }
  }
  function setButtonPositionThis($this){ 
    let left = -($this.find('.js-tarrifs-btn').offset().left) + ($(window).width() / 2);
    $this.find('.js-tarrifs-btn span').css('left', left + 'px');
  }
  setButtonPosition();
  $('.js-tarrifs').on('scroll', function(){
    setButtonPositionThis($(this));
  });
  $(window).on('resize', function(){
    setButtonPosition();
  });
  
  $('.js-tarrifs-arrow-next').on('click', function(){
    let tarrifsWrap = $(this).siblings('.js-tarrifs');
    let tarrifsSlideWidth = 258;
    let tarrifsScrollPos = tarrifsWrap[0].scrollLeft;
    let tarrifsScrollParts = Math.floor((tarrifsScrollPos) / tarrifsSlideWidth);
    let tarrifsScrollMoov = tarrifsScrollParts * tarrifsSlideWidth + tarrifsSlideWidth;
    $(this).siblings('.js-tarrifs').animate({ scrollLeft: tarrifsScrollMoov}, 250);
  });
  $('.js-tarrifs-arrow-prev').on('click', function(){
    let tarrifsWrap = $(this).siblings('.js-tarrifs');
    let tarrifsSlideWidth = 258;
    let tarrifsScrollPos = tarrifsWrap[0].scrollLeft;
    let tarrifsScrollParts = Math.round((tarrifsScrollPos) / tarrifsSlideWidth);
    let tarrifsScrollMoov = tarrifsScrollParts * tarrifsSlideWidth - tarrifsSlideWidth;
    $(this).siblings('.js-tarrifs').animate({ scrollLeft: tarrifsScrollMoov}, 250);
  });
});