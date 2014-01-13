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
        $(".l-box__toggle div.view").hide();
        $(".l-box__toggle h2").click(
          function () {
            console.log("Hello 2");
            $(".l-box__toggle div.view").toggle();
          }
        );
      }

      if ($(".l-sidebar-left").css("float") == "left"){
        $(".l-box__toggle ul.menu__vertical").show();
      }
      if ($(".l-sidebar-left").css("float") == "left"){
        $(".l-box__toggle div.view").show();
      }
    }
  }
})(jQuery);
