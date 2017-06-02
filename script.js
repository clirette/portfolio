$(document).ready(function() {
	$(".about-button").click(function() {
	    $('html,body').animate({
	        scrollTop: $(".about").offset().top},
	        'slow');
	});

	$(".work-button").click(function() {
	    $('html,body').animate({
	        scrollTop: $(".work").offset().top},
	        'slow');
	});

	$(".contact-button").click(function() {
	    $('html,body').animate({
	        scrollTop: $(".contact").offset().top},
	        'slow');
	});

	$('ul li').click( function() {
    	$(this).addClass('active').siblings().removeClass('active');
  	});

  	$('.darken').hover(function() {
    	$(this).find('img').fadeTo(500, 0.3);
	}, function() {
    	$(this).find('img').fadeTo(500, 1);
	});
});