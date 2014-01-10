(function ($) {
  Drupal.behaviors.blockToggle = {
    attach: function (context, settings) {
      if ($(".l-sidebar-left").css("float") != "left"){
        $(".academics-menu-block ul.menu__vertical").hide();
        $(".academics-menu-block h2").click(
          function () {
            console.log("Hello");
            $(".academics-menu-block ul.menu__vertical").toggle();
          }
        );
      }

      if ($(".l-sidebar-left").css("float") == "left"){
        $(".academics-menu-block ul.menu__vertical").show();
      }
    }
  }
})(jQuery);
