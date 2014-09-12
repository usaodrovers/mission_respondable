(function ($) {
  Drupal.behaviors.printshop = {
    attach: function (context, settings) {
      $('.webform-component--ncr-form-information').addClass('collapsed');
      $('#edit-submitted-ncr-forms').click(function () {
        if ($('.webform-component--ncr-form-information').is('.collapsed')) {
          Drupal.toggleFieldset('.webform-component--ncr-form-information');
          $('.webform-component--ncr-form-information').removeClass('collapsed');
        }
      });
    }
  };
})(jQuery);