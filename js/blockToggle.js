(function ($) {
  Drupal.behaviors.blockToggle = {
    attach: function (context, settings) {
      $(window).resize(function(){  
        if ($(".l-sidebar-left").css("float") != "left"){
          $(".academics-menu-block ul.menu__vertical").hide();
        }

        $(".academics-menu-block h2").click(
          function () {
            $(".academics-menu-block ul.menu__vertical").toggle();
          }
        );
      });

      $(window).resize(function(){  
        if ($(".l-sidebar-left").css("float") == "left"){
          $(".academics-menu-block ul.menu__vertical").show();
        }
      });
    }
  }
})(jQuery);
