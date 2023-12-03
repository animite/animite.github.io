/* Animation Scroll effect */

var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}
$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

/* Svg background bubble effect*/

var svgm = (function () {
  'use strict';
  return {
      startMagic: function () {
      }
  };
})();

function startMagic() {
  $('.simple-circle').each(function (elem) {
      var translation = {
          translateX: Math.abs(Math.random()) * 120 + "vw",
          translateY: Math.abs(Math.random()) * 120 + "vh",
          opacity: Math.random() - 0.2,
          fill: randomColor()
      };
      $(this).velocity(translation, {
          duration: 4000,
          easing: "swing",
          queue: "",
          begin: undefined,
          progress: undefined,
          complete: undefined,
          display: undefined,
          visibility: undefined,
          loop: false,
          delay: true,
          mobileHA: true
      });
  });
}

function randomColor(){
  return '#'+Math.floor(Math.random()*16777215).toString(2);
}

function initializeMagic() {
  'use strict';
  var pattern = $('.simple-circle').first();
  for (var i = 0; i < 5; i++) {
      $('#svg-playground').append(pattern.clone());
  }
}

$(document).ready(function () {
  'use strict';
  initializeMagic();
  setInterval(startMagic, 12000);
});