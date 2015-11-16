// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
/*eslint-env browser,mocha */
/*global $*/
$(document).foundation();
$(document).ready(function () {
    "use strict";
    
    $('.thumbs li a').click(function(e){
      e.preventDefault();
      $('.gallery-container').empty().append($("<img>",{src:this.href}));
    });
});

function toggleVideo() {
    if ($('#vplayer:hidden') && $('#aplayer:visible')) {
        $('#aplayer').css('visibility','hidden').hide();
        $('#vplayer').css('visibility','visible').show();
    }
}
function toggleAudio() {
    if ($('#aplayer:hidden') && $('#vplayer:visible')) {
        $('#vplayer').css('visibility','hidden').hide();
        $('#aplayer').css('visibility','visible').show();
    }
}    