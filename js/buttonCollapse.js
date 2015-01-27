(function ($) {
    Drupal.behaviors.buttonCollapse = {
        attach: function (context, settings) {
            /* Get the window's width, and check whether it is narrower than 480 pixels */
            var windowWidth = $(window).width();
            if (windowWidth <= 480) {
                /* Clone our navigation */
                var mainNavigation = $('.button-block').clone();

                /* Replace unordered list with a "select" element to be populated with options, and create a variable to select our new empty option menu */
                $('.button-block').html('<select class="button-block_menu"></select>');
                var selectMenu = $('select.button-block_menu');

                // Create default option "Go to..."
                $("<option />", {
                   "selected": "selected",
		   "value"   : "",
		   "text"    : "Go to..."
		}).appendTo("select.button-block_menu");

                /* Navigate our nav clone for information needed to populate options */
                $(mainNavigation).children('a').each(function() {

                    /* Get top-level link and text */
                    var href = $(this).attr('href');
                    var text = $(this).text();

                    /* Append this option to our "select" */
                    $(selectMenu).append('<option value="'+href+'">'+text+'</option>');
                });
            }

            /* When our select menu is changed, change the window location to match the value of the selected option. */
            $(selectMenu).change(function() {
                location = this.options[this.selectedIndex].value;
            });
        }
    }
})(jQuery);
