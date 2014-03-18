// add parallax effect to hero
$('#scene').parallax();

// move the content below the hero image
function adjustContentMargin(scrolling){
	$content = $('.content');
	isScrolling = scrolling;

	$content.css("margin-top", function() {
		if(isScrolling){
			console.log('scrolling');
			return parseInt($content.css("margin-top"), 10)-10 + 'px';
		}
		else {
			return $(window).height();
		}
		
	}.bind(isScrolling));
	
}

// recalculate content margin when window is resized
$(window).on('resize', function(){
	adjustContentMargin();
});

$(window).on('scroll', function(){
	adjustContentMargin( true );
});

// initialize
adjustContentMargin();