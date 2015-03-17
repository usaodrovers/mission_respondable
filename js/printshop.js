(function ($) {
  Drupal.behaviors.printshop = {
    attach: function (context, settings) {
      $('.webform-component--ncr-forms-information').addClass('collapsed');
      $('#edit-submitted-ncr-forms').click(function () {
        if ($('.webform-component--ncr-forms-information').is('.collapsed')) {
          $('.webform-component--ncr-forms-information').removeClass('collapsed');
        }
      });
    }
  };
})(jQuery);