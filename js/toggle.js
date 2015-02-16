(function ($) {
   Drupal.behaviors.fscodes = {
       attach: function (context, settings) {
           $('.is-collapsed').hide();

           $('.button__toggle').click(function () {
               $(this).next('.is-collapsed').slideToggle();
           });
       }
   };
})(jQuery);
