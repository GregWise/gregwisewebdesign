




/*
     FILE ARCHIVED ON 14:31:11 Nov 7, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:15:32 Feb 22, 2017.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
$(document).ready(function(e) {
	
	//Scroll to top
    $('span.top-return, .navbar-brand').click(function(){
    	$('html, body').animate({scrollTop:0}, 'slow');
	});
//Scroll to anchor slowly

	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});