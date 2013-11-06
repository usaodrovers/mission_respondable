(function ($) {
     Drupal.behaviors.qtabborder = {
             attach: function (context, settings) {
             $('.view-id-featured_testimonials li a').click(
               function () {
                console.log("Fired");
                $(this).parent().siblings().find('.hide-border').removeClass('hide-border');
                $(this).parent().prev().children('a').addClass('hide-border');
               });
             }
     }
})(jQuery);
