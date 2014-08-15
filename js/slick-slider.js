var count = 0;
jQuery(document).ready(function() {
  // Fire in initial resize function on page load so slides appear sized
  // correctly
  measure_slide_fast();

  // Initialize the slick slider function.
  // find properties and documentation here: http://kenwheeler.github.io/slick/
  jQuery('.pane-gallery-image-header-nesbitt-gallery-slider .view-content').slick({
    centerMode: true,
    centerPadding: '23%',
    slidesToShow: 1,
    autoplay: true,
    speed: 700,
    // Can't pass params in onBeforeChange setting function. boo.
    onBeforeChange: measure_slide_fast,
    lazyLoad: 'progressive',
  });
  
  // Check height of div containing slides because occasionaly the script loads
  // before the images load. 
  function measure_slide_fast() {
    var height = jQuery('.slick-list').height();
    if (height > 440 || height < 30) {
      setTimeout(measure_slide_fast, 100);
    }
    else {
      set_slide_heights(height);
    }
  }

  function set_slide_heights(baseHeight) {
    // Calculate variables to be used
    var sideSlide = Math.floor(baseHeight * .8);
    var margin = Math.floor((baseHeight - sideSlide) / 2);

    // Set smaller slide heights and margins based on vars calculated earlier.
    jQuery('.view-display-id-nesbitt_gallery_slider .slick-slide').css('max-height', sideSlide);
    jQuery('.view-display-id-nesbitt_gallery_slider .slick-slide').css('margin-top', margin);

    // Now set height of center slide. Which slide is 'center' depends on where
    // in page load we are. If the page is initially loaded the .slick-center
    // is center. If we're in the middle though this function fires before the
    // class is applied to the proper slide, so we find the center and apply
    // the correct height to the next slide in line
    if (count) {
      jQuery('.view-display-id-nesbitt_gallery_slider .slick-slide.slick-center').next().css('max-height', baseHeight);
      jQuery('.view-display-id-nesbitt_gallery_slider .slick-slide.slick-center').next().css('margin-top', '0');
    }
    else {
      jQuery('.view-display-id-nesbitt_gallery_slider .slick-slide.slick-center').css('max-height', baseHeight);
      jQuery('.view-display-id-nesbitt_gallery_slider .slick-slide.slick-center').css('margin-top', '0');
    }
    count++;
  }
});
