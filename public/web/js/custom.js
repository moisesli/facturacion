$(document).ready(function() {
    "use strict";


    $(window).on('scroll', function() {
      if ($(this).scrollTop() > 550) {
          $('.navbar-sticky').fadeIn(500);
      } else {
          $('.navbar-sticky').fadeOut(500);
      }
    });
	

	



});