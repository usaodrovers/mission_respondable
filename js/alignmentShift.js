jQuery(window).load(function (){
  var lPos = 0;
  var rPos = 0;
  if (screen.width > 850){
    jQuery('.panel-display .l-sidebar-left').each(function(i, j){
      worx_resizer_l(i, j);
    });
    jQuery('.panel-display .l-content-right').each(function(i, j){
      worx_resizer_r(i, j);
    });
  }
  function worx_resizer_l(i, j) {
    var dHeight = jQuery(j).height();
    if (i) {
      jQuery(j).css("position", "absolute");
      jQuery(j).css("top", lPos);
    }
    lPos = lPos + dHeight + 15;
  }
  function worx_resizer_r(i, j) {
    var dHeight = jQuery(j).height();
    if (i) {
      jQuery(j).css("position", "absolute");
      jQuery(j).css("top", rPos);
      jQuery(j).css("left", "100%");
    }
    rPos = rPos + dHeight + 15;
    if (lPos >= rPos) {
      jQuery("#main").height(lPos + 100);
    }
    else {
      jQuery("#main").height(rPos + 100);
    }
  }
});
