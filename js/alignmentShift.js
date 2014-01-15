(function ($) {
  Drupal.behaviors.alignmentShift = {
    attach: function (context, settings) {
      if (screen.width > 850){
        worx_resizer();
      }  
      function worx_resizer() {
        var directory = $('.node-type-divisons .pane-directory-mini-panes-divisions-directory').height();
        var divInfo = $('.node-type-divisons .pane-divisons-division-info').height();
        var contact = $('.node-type-divisons .pane-divisons-divison-contact').height(); 
        var diff = directory - divInfo;
        if (diff < 0 ) {
          $('.node-type-divisons .pane-divisons-division-side-menu').css("position", "absolute");
          $('.node-type-divisons .pane-divisons-division-side-menu').css("top", directory);
        }
        console.log('goodbye, world!');
        console.log(directory);
        console.log(divInfo);
        //else if (fishing > news && fishing > tournament) {
          //$('.front .region-three-33-second .region-inner').height(fishing);
          //$('.front .region-three-33-third .region-inner').height(fishing);
        //}  
        //else {
          //$('.front .region-three-33-second .region-inner').height(tournament);
          //$('.front .region-three-33-first .region-inner').height(tournament);
        //}  
      }
    }
  }
})(jQuery);
