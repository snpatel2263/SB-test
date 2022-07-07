/**
 * @file
 * Global utilities.
 *
 */
(function($, Drupal) {

  'use strict';

  Drupal.behaviors.bootstrap_sass = {
    attach: function(context, settings) {
      var featured = $('#block-views-block-carousel-block-1-2');
      var recommend = $('#block-views-block-carousel-block-2');
      var past = $('#block-views-block-carousel-block-3');
      featured.addClass('active');
      $('.view-tabs a').on('click', function(e){
        e.preventDefault();
        var actCategory = $(this).attr('data-title');
        $('.region-featured-top .block').removeClass('active');
        if(actCategory == 'featured-conferences') {
          var target = featured;
        } else if(actCategory == 'recommended-conferences') {
          var target = recommend;
        } else if(actCategory == 'past-conferences') {
          var target = past;
        }
        $('.view-tabs a').removeClass('active');
        $(this).addClass('active');
        target.addClass('active');
      });
      $('.owl-carousel').owlCarousel({
        loop:true,
        responsiveClass:true,
        margin:20,
        responsive:{
            0:{
              items:1,
              nav:false,
              dots:true
            },
            767:{
              items:3,
              nav:true
            }
        }
    })
    }
  };

})(jQuery, Drupal);