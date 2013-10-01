/*
 * A jQuery plugin that disables page scrolling when the target element is hovered over, 
 * and restores scrolling when unhovered
 
 * author: Bremen Braun
 */
;(function($) {
	$.fn.disableScroll = function() {
		var $this = $(this),
		    html = $('html');
		
		$this.mouseover(function() { // disable scrolling
			var scrollPosition = [
				$this.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
				$this.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
			];
			
			html.data('scroll-position', scrollPosition);
			html.data('previous-overflow', html.css('overflow'));
			html.css('overflow', 'hidden');
			window.scrollTo(scrollPosition[0], scrollPosition[1]);
		}).mouseout(function() { // restore scrolling
			var scrollPosition = html.data('scroll-position');
			html.css('overflow', html.data('previous-overflow'));
			window.scrollTo(scrollPosition[0], scrollPosition[1])
		});
    }
}(jQuery));
