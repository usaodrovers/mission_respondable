(function ($) {
  Drupal.behaviors.slick_slider = {
    attach: function (context, settings) {
      var count = 0;
      // Fire in initial resize function on page load so slides appear sized
      // correctly
      if (jQuery(window).width() > 481) {
          measure_slide_fast();
      }

      // Initialize the slick slider function.
      // find properties and documentation here: http://kenwheeler.github.io/slick/
      $('.view-gallery-image-header .view-content').slick({
        centerMode: true,
        centerPadding: '23%',
        slidesToShow: 1,
        autoplay: true,
        speed: 700,
        // Can't pass params in onBeforeChange setting function. boo.
        onBeforeChange: measure_slide_fast,
        lazyLoad: 'progressive',
        responsive: [
          {
          breakpoint: 800,
          settings: {
            centerMode: false,
            arrows: false,
            onBeforeChange: null
            }
          }
        ]
      });

      // Check height of div containing slides because occasionaly the script loads
      // before the images load.
      function measure_slide_fast() {
        var height = $('.slick-list').height();
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
        $('.view-display-id-nesbitt_gallery_slider .slick-slide').css('max-height', sideSlide).css('margin-top',
          margin);

        // Now set height of center slide. Which slide is 'center' depends on where
        // in page load we are. If the page is initially loaded the .slick-center
        // is center. If we're in the middle though this function fires before the
        // class is applied to the proper slide, so we find the center and apply
        // the correct height to the next slide in line
        if (count) {
          $('.view-display-id-nesbitt_gallery_slider .slick-slide.slick-center').next().css('max-height', baseHeight).css('margin-top', '0');
        }
        else {
          $('.view-display-id-nesbitt_gallery_slider .slick-slide.slick-center').css('max-height', baseHeight).css('margin-top', '0');
        }
        count++;
      }

      $(window).resize(function() {
        // var screenWidth = $(window).width();
        count = 0;
          if (jQuery(window).width() > 481) {
              measure_slide_fast();
          }
      });
    }
  }
})(jQuery);
