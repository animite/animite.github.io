 /* pre-loader script */

    document.addEventListener("DOMContentLoaded", function(){
    $('.preloader-background').delay(2000).fadeOut('slow');    
    $('.preloader-wrapper')
    .delay(2000)   
    .fadeOut();
    });


    /* Materialize JS */

      $(document).ready(function(){

        $('.sidenav').sidenav();
        $('.parallax').parallax();
        $('.tabs').tabs();
        $('.tooltipped').tooltip();
        $('.scrollspy').scrollSpy();
    
        });

    /* html toasts */

    var toastHTML = '<div class="sub_sec_5 center"><p class="fa fa-desktop icon_padding_2 toast_color_1"></p><p class="fa fa-tablet icon_padding_2 toast_color_1"></p><p class="fa fa-mobile-phone icon_padding_2 toast_color_1"></p><p class="fa fa-check-circle icon_padding_2 toast_color_2"></p><img type="image/png" class="icon_padding_2 toast_img_1" src="https://animite.github.io/img/pic_215.png" alt="Browser Combo"><p class="fa fa-check-circle toast_color_2"></p><img type="image/png" class="icon_padding_2 toast_img_1" src="https://animite.github.io/img/pic_185.png" alt="Browser Combo_2"><p class="fa fa-question-circle toast_color_3"></p></div>';
    M.toast({html: toastHTML , displayLength: 10000});
    
    var toastHTML = '<p class="zero_PadMargin">Our website does not use cookies but has a Terms of Use. Please read our <a href="https://animite.github.io/html/termsofuse.html">Terms of Use</a> for further details.</p>';
 M.toast({html: toastHTML , displayLength: 20000});

 // slide in from all left

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
 
    //check to see if this current container is within viewport
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
              