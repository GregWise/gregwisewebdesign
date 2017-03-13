// Custom JQuery

$(document).ready(function() {
 //Lazy Load fade in
   $(function() {
     $("img.lazy").lazyload({
         effect : "fadeIn"
     });

  });	
	
 // Hide date and social on scroll
    $(window).scroll(function() {

    if ($(this).scrollTop()>0)
     {
        $('.nav-header').slideUp();
		$('.navbar-nav>li').addClass('nav-shrink');
     }
    else
     {
      $('.nav-header').slideDown();
	  $('.navbar-nav>li').removeClass('nav-shrink');
	  window.scrollTo(0,0);
     }
 });
 // END Hide date and social on scroll
 
 //Icon Section
 
   
$(".icon-content").hide();
$(".apply-content").show();
	
	$(function() {
		

	   //On click or hover change icon to selected and update font color
       var hoverOrClick = function () {
          $("ul.steps li span").removeClass("selected");
		  $(this).addClass("selected");  
		  $("ul.steps li").removeClass("text-color");
		  $(this).parents("li").addClass("text-color");
		  
        //Check if the span has class selected and show appropriate content below
	    if ($(".apply").hasClass("selected")) {
		  $(".icon-content").hide();
          $(".apply-content").show();
        }
		
		else if ( $(".interview").hasClass( "selected" ) ) {
		  $(".icon-content").hide(); 
          $(".interview-content").show();
        }
		
		else if ( $(".select").hasClass( "selected" ) ) {
		  $(".icon-content").hide();
          $(".select-content").show();
        }
		
		else if ( $(".train").hasClass( "selected" ) ) {
		  $(".icon-content").hide();
          $(".train-content").show();
        }
		
		else if ( $(".dine").hasClass( "selected" ) ) {
		  $(".icon-content").hide();
          $(".dine-content").show();
        }
	
		else {
          $(".icon-content").hide();
        }	  
      }
		
		$('ul.steps li span').click(hoverOrClick).hover(hoverOrClick);

	   
     });
	 
	
 //END Icon Section
});