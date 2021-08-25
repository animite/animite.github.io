document.addEventListener("DOMContentLoaded", function(){
    $('.preloader-background').delay(2000).fadeOut('slow');    
    $('.preloader-wrapper')
    .delay(2000)   
    .fadeOut();
    });
    
    var toastHTML = '<p class="zero_PadMargin">Our website does not use cookies but has a Terms of Use. Please read our <a href="html/termsofuse.html">Terms of Use</a> for further details.</p>';
 M.toast({html: toastHTML , displayLength: 20000});