(function ($) {
  Drupal.behaviors.quicktab_select = {
    attach: function (context, settings) {
      /* Build the Quick Tabs Select list based on the text and IDs of
      * the tabs for each Quick Tab instance (.quicktabs_wrapper).
      */

      //$.each($('.quicktabs-wrapper'), function(i) {
      $('.quicktabs-wrapper').once('quicktabSelect', function() {
        $.each($('.quicktabs-wrapper'), function() {
          // Create the dropdown base
          var wrapperId = '#' + $(this).attr('id');
          $("<select />").prependTo(wrapperId);
          $(wrapperId + ' select').attr('class', 'qt-mobile-select tinynav');
          // Populate dropdown based on tab links/text
          $(wrapperId + " a.active").each(function() {
            var el = $(this);
            var value = el.attr('id');
            /* we need to change the tab link ID to a tab content ID */
            value = value.replace('-tab-', '-tabpage-');
            var tabText = el.text();
            var optionStr = '<option value="' + value + '">' + tabText + '</option>';
            $(optionStr).appendTo(wrapperId + " select");
          });
        });
      });

      // watch the select list for changes
      $(".quicktabs-wrapper select").change(function() {
        var parentId = '#' + $(this).parent().attr('id');
        $(parentId + ' .quicktabs-tabpage').addClass('quicktabs-hide');
        $('#' + $(this).val()).removeClass('quicktabs-hide');
      });

      $(document).ready(function () {
        showHide();//run when page first loads
      });

      $(window).resize(function () {
        showHide();//run on every window resize
      });
    }
  };

  function showHide() {  
    if ($(window).width() > 651) {
      $('.qt-mobile-select').hide();
      $('.quicktabs-tabs').show();
    }
    if ($(window).width() < 651) {
      $('.quicktabs-tabs').hide();
      $('.qt-mobile-select').show();
    }
  }
})(jQuery);
