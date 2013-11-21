(function ($) {
     Drupal.behaviors.fscodes = {
             attach: function (context, settings) {
                $('.contact-jtrigger').hover(
                  function () {
                    $(this).children().toggleClass('element-hidden');
                });
             }
     }
})(jQuery);
