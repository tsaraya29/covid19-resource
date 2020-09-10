jQuery(function ($) {

  //#main-slider
  $(function () {
    $('#main-slider.carousel').carousel({
      interval: 8000
    });
  });


  //Initiat WOW JS
  new WOW().init();

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });
  $('.scrollup').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
  });

  // portfolio filter
  $(window).load(function () {
    'use strict';
    var $portfolio_selectors = $('.portfolio-filter >li>a');
    var $portfolio = $('.portfolio-items');
    $portfolio.isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $portfolio_selectors.on('click', function () {
      $portfolio_selectors.removeClass('active');
      $(this).addClass('active');
      var selector = $(this).attr('data-filter');
      $portfolio.isotope({ filter: selector });
      return false;
    });
  });


  //Pretty Photo
  $("a[rel^='prettyPhoto']").prettyPhoto({
    social_tools: false
  });

});
 //Smooth Scrolling

 $('.feature a').on('click', function(e){
   //check for hash tag value
   if(this.hash !== '') {
     e.preventDefault();
     //store hash

     const hash = this.hash
     //animate smooth scroll
     $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 900, function() {
       window.location.hash = hash;
     })
   }

 });