$(function() {
  new WOW().init();
});

$(function() {
  $('.burger-btn').click(function() {
    $(this).toggleClass('cross');
    $('.header-nav').fadeToggle(300);
    $('body').toggleClass('noscroll');
  });
  if ($(window).width() < 768) {
    $('.sp-nav').click(function() {
      $('.burger-btn').toggleClass('cross');
      $('.header-nav').fadeToggle(300);
    });

  }
});

$(function() {
  const headerHeight = 760;
  
  $(window).scroll(function() {
    if ($(this).scrollTop() > headerHeight) {
      $('.header').addClass('bgcolor-change');
      $('.header-link').css('color', 'black');
      $('.bar').css('background-color', 'black');
    } else {
      $('.header').removeClass('bgcolor-change');
      $('.header-link').css('color', 'white');
      $('.bar').css('background-color', 'white');
    }
  });
});

$(function() {
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 1000,
    fade: true,
    cssEase: 'linear'
  });
});