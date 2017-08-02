$(document).ready(function() {
	$(".navbar-brand").click(function() {
	    $('html,body').animate({
	        scrollTop: $(".jumbotron").offset().top},
	        'slow');
	});

	$(".about-button").click(function() {
	    $('html,body').animate({
	        scrollTop: $(".about").offset().top},
	        'slow');
	    $('.navbar-toggle').click();
	});

	$(".work-button").click(function() {
	    $('html,body').animate({
	        scrollTop: $(".work").offset().top},
	        'slow');
	    $('.navbar-toggle').click();
	});

	$(".contact-button").click(function() {
	    $('html,body').animate({
	        scrollTop: $(".contact").offset().top},
	        'slow');
	    $('.navbar-toggle').click();
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