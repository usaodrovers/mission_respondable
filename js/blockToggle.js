(function ($) {
  Drupal.behaviors.blockToggle = {
    attach: function (context, settings) {
      if ($(".l-sidebar-left").css("float") != "left"){
        $(".l-box__toggle ul.menu__vertical").hide();
        $(".l-box__toggle h2").click(
          function () {
            console.log("Hello");
            $(".l-box__toggle ul.menu__vertical").toggle();
          }
        );
      }

      if ($(".l-sidebar-left").css("float") == "left"){
        $(".l-box__toggle ul.menu__vertical").show();
      }
    }
  }
})(jQuery);
