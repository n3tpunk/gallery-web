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