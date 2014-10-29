jQuery(window).load(function (e) {
  var lPos = 0;
  var rPos = 0;
  var lcPos = 0;
  var ccPos = 0;
  var rcPos = 0;
  var tourHeight = jQuery('.vtour').height();
  console.log(tourHeight); //Just to verify it exists.
  
  resize_init();
  
  function resize_init() {
    if (jQuery(window).width() > 481){
      if (tourHeight > 40) { 
        worx_resize_select();
      }
      else {
        setTimeout(function() {
          resize_init();
        }, 100);
      }
    }
  }
  function worx_resize_select() {
    lPos = 0;
    rPos = 0;
    lcPos = 0;
    ccPos = 0;
    rcPos = 0;

    jQuery('.panel-flexible .p-box-column .l-sidebar-left').each(function(i, j){
      var side = 'left';
      worx_resizer(i, j, side);
    });
    jQuery('.panel-flexible .p-box-column .l-content-right').each(function(i, j){
      var side = 'right';
      worx_resizer(i, j, side);
    });
    jQuery('.panel-flexible .p-box-column .l-3col-left').each(function(i, j){
      var side = 'leftc';
      worx_resizer(i, j, side);
    });
    jQuery('.panel-flexible .p-box-column .l-3col-center').each(function(i, j){
      var side = 'centerc';
      worx_resizer(i, j, side);
    });
    jQuery('.panel-flexible .p-box-column .l-3col-right').each(function(i, j){
      var side = 'rightc';
      worx_resizer(i, j, side);
    });
  }
  function worx_resizer(i, j, side) {
    var dHeight = jQuery(j).height();
    if (side == 'left') {
      if (i) {
        jQuery(j).addClass("ashift-pos");
        jQuery(j).css("top", lPos);
      }
      lPos = lPos + dHeight + 15;
    }
    else if (side == 'right') {
      if (i) {
        jQuery(j).addClass("ashift-pos");
        jQuery(j).addClass("ashift-right");
        jQuery(j).css("top", rPos);
      }
      rPos = rPos + dHeight + 15;
    }
    else if (side == 'leftc') {
      if (i) {
        jQuery(j).addClass("ashift-pos");
        jQuery(j).css("top", lcPos);
      }
      lcPos = lcPos + dHeight + 15;
    }
    else if (side == 'centerc') {
      if (i) {
        jQuery(j).addClass("ashift-pos");
        jQuery(j).css("top", ccPos);
      }
      ccPos = ccPos + dHeight + 15;
    }
    else if (side == 'rightc') {
      if (i) {
        jQuery(j).addClass("ashift-pos");
        jQuery(j).css("top", rcPos);
      }
      rcPos = rcPos + dHeight + 15;
    }
    var column = worx_bigger(lcPos, ccPos, rcPos);
    worx_footer_fix(lPos, rPos, column);
    if (jQuery(window).width() < 651){
      jQuery(j).removeClass("ashift-pos");
      jQuery(j).removeClass("ashift-right");
    }
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
    var top = jQuery('.p-box-full').height();
    if (column === 0) {
      if (lPos >= rPos) {
        jQuery("#main").height(top + lPos + 100);
      }
      else if (lPos <= rPos) {
        jQuery("#main").height(top + rPos + 100);
      }
    }
    else if (column > 0) {
      jQuery(".p-box-column").height(column + rPos);
    }
  }

  jQuery(document).ajaxSuccess(function() {
    when_content_loaded( jQuery('#someElement'), function() {
      setTimeout(function() {
        if (jQuery(window).width() > 481){
          worx_resize_select();  
        }
      }, 300);
    });
  });

  jQuery('.accordion-resize .view-content').accordion({
    change: function(e, ui) {
      if (jQuery(window).width() > 481){
        worx_resize_select();  
      }
    }
  }); 

  function when_content_loaded(_contentContainer, callback) {
    _contentContainer.html(_contentContainer.html());
    var _content = _contentContainer.find('img, iframe, frame, script'),
      content_length = _content.length,
      content_load_cntr = 0;

    if (content_length) { //if the _contentContainer contains new onload-enabled content.
      _content.on('load', function() { //then we avoid the callback until onload-enabled content is loaded
        content_load_cntr++;
        if (content_load_cntr == content_length) {
          callback();
        }
    });
    }
    else { //otherwise just do the main callback action if there's no onload-enabled content in _contentContainer.
      callback();
    }
  }
  jQuery(window).resize(function() {
      if (jQuery(window).width() > 481) {
          worx_resize_select();
      }
  });
});
