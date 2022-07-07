/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.bootstrap_barrio_subtheme = {
    attach: function (context, settings) {
      var actCategory = $('.view-tabs a.active').attr('data-title');
      getCategory(actCategory);
      $('.view-tabs a').on('click', function(e){
        e.preventDefault();
        $('.carousel-item.active').removeClass('done');
        $('.carousel-item.active').removeClass('d-none');
        $('.view-tabs a').removeClass('active');
        $(this).addClass('active');
        var actCategory = $(this).attr('data-title');
        getCategory(actCategory);
      });
    }
  };
  function getCategory(actCategory) {
    $('.carousel-item.active').each( function() {
      if($(this).hasClass('done')){
        return false;
      }else {
        var categories = $(this).attr('data-category');
        var categories = categories.split(",");
        console.log(categories);
        if(categories.indexOf(actCategory) == -1) {
          $(this).addClass('d-none');
        }
      }
      $(this).addClass('done');
    });
  }
})(jQuery, Drupal);
