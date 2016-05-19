(function ($) {
  Drupal.behaviors.qtabborder = {
    attach: function (context, settings) {
      $('.quicktab-block li a').click( function () {
        $(this).parent().siblings().find('.hide-border').removeClass('hide-border');
        $(this).parent().prev().children('a').addClass('hide-border');
      });
    }
  };
})(jQuery);
