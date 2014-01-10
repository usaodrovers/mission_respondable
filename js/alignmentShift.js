(function ($) {
  Drupal.behaviors.misc = {
    attach: function (context, settings) {
      if (screen.width > 850){
        worx_resizer();
      }  
 
      function worx_resizer() {
        var fishing = $('.front .region-three-33-first .region-inner').height();
        var news = $('.front .region-three-33-second .region-inner').height();
        var tournament = $('.front .region-three-33-third .region-inner').height();
        if (news > fishing && news > tournament) {
          $('.front .region-three-33-first .region-inner').height(news);
          $('.front .region-three-33-third .region-inner').height(news);
        }  
        else if (fishing > news && fishing > tournament) {
          $('.front .region-three-33-second .region-inner').height(fishing);
          $('.front .region-three-33-third .region-inner').height(fishing);
        }  
        else {
          $('.front .region-three-33-second .region-inner').height(tournament);
          $('.front .region-three-33-first .region-inner').height(tournament);
        }  
    }
  };
})(jQuery);
