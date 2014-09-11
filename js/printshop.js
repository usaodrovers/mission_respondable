(function ($) {
  Drupal.behaviors.printshop = {
    attach: function (context, settings) {
      $('#edit-submitted-ncr-forms').click(function () {
        if ($('#webform-component--ncr-form-information').is('.collapsed')) {
          Drupal.toggleFieldset('#webform-component--ncr-form-information');
        }
      });
    }
  }
})(jQuery);