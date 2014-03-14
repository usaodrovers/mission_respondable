jQuery(window).load(function (){
  var lPos = 0;
  var rPos = 0;
  var lcPos = 0
  var ccPos = 0
  var rcPos = 0
  if (screen.width > 850){
    jQuery('.panel-flexible .l-sidebar-left').each(function(i, j){
      var side = 'left';
      worx_resizer(i, j, side);
    });
    jQuery('.panel-flexible .l-content-right').each(function(i, j){
      var side = 'right';
      worx_resizer(i, j, side);
    });
    jQuery('.panel-flexible .l-3col-left').each(function(i, j){
      var side = 'leftc';
      worx_resizer(i, j, side);
    });
    jQuery('.panel-flexible .l-3col-center').each(function(i, j){
      var side = 'centerc';
      worx_resizer(i, j, side);
    });
    jQuery('.panel-flexible .l-3col-right').each(function(i, j){
      var side = 'rightc';
      worx_resizer(i, j, side);
    });
  }
  function worx_resizer(i, j, side) {
    var dHeight = jQuery(j).height();
    if (side == 'left') {
      if (i) {
        jQuery(j).addClass("ashift-pos")
        jQuery(j).css("top", lPos);
      }
      lPos = lPos + dHeight + 15;
    }
    else if (side == 'right') {
      if (i) {
        jQuery(j).addClass("ashift-pos")
        jQuery(j).addClass("ashift-right")
        jQuery(j).css("top", rPos);
      }
      rPos = rPos + dHeight + 15;
    }
    else if (side == 'leftc') {
      if (i) {
        jQuery(j).addClass("ashift-pos")
        jQuery(j).css("top", lcPos);
      }
      lcPos = lcPos + dHeight + 15;
    }
    else if (side == 'centerc') {
      if (i) {
        jQuery(j).addClass("ashift-pos")
        jQuery(j).css("top", ccPos);
      }
      ccPos = ccPos + dHeight + 15;
    }
    else if (side == 'rightc') {
      if (i) {
        jQuery(j).addClass("ashift-pos")
        jQuery(j).css("top", rcPos);
      }
      rcPos = rcPos + dHeight + 15;
    }
    var column = worx_bigger(lcPos, ccPos, rcPos);
    worx_footer_fix(lPos, rPos, column);
  }
  function worx_bigger(lcPos, ccPos, rcPos) {
    if (lcPos > ccPos && lcPos > rcPos) {
      return lcPos;
    }
    else if (ccPos > rcPos && ccPos > lcPos) {
      return ccPos;
    }
    else {
      return rcPos;
    }
  }
  function worx_footer_fix(lPos, rPos, column) {
    if (column > 0) {
      var top = column;
    }
    else {
      var top = jQuery('.p-box-full').height();
    }
    if (lPos >= rPos) {
      jQuery("#main").height(top + lPos + 100);
    }
    else {
      jQuery("#main").height(top + rPos + 100);
    }
  }
});
