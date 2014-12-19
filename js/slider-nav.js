(function ($) {
  Drupal.behaviors.slick_nav = {
    attach: function (context, settings) {
      $( '#mmenu_left, #mmenu_top' ).on('click', '.icon-close', function( event ) {
        $( '.icon-close' ).trigger( 'close.mm' );
      }); 
    }    
  } 
})(jQuery);
