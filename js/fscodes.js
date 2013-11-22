(function ($) {
     Drupal.behaviors.fscodes = {
             attach: function (context, settings) {
                $('.contact-block__jtrigger').hover(
                  function () {
                    $(this).children().toggleClass('element-hidden');
                });
             }
     }
})(jQuery);
