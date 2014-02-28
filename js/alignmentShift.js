jQuery(window).load(function (){
  if (screen.width > 850){
    //setTimeout(worx_resizer, 1000)
    worx_resizer();
  }
  function worx_resizer() {
    var directory = jQuery('.node-type-divisons .pane-directory-mini-panes-divisions-directory').height() + 25;
    var divInfo = jQuery('.node-type-divisons .pane-divisons-division-info').height();
    var contact = jQuery('.node-type-divisons .pane-divisons-divison-contact').height();
    var diff = directory - divInfo;
    console.log(diff);
    if (diff < 0 ) {
      jQuery('.node-type-divisons .pane-divisons-division-side-menu').css("position", "absolute");
      jQuery('.node-type-divisons .pane-divisons-division-side-menu').css("top", directory);
    }
    console.log('goodbye, world!');
    console.log(directory);
    console.log(divInfo);
  }
});
