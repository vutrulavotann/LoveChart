Common = {
	FlexSlider: function(elm, options){
		var _opts = {
				animation: 'fade',
				namespace: 'wfs-',
				direction: '',
				smoothHeight: false,
				slideshow: true,
				animationLoop: true,
				slideshowSpeed: 7000,
				animationSpeed: 600,
				controlNav: true,
								
				directionNav: true,
				prevText: '',
				nextText: '',
								
				pausePlay: false,
				pauseText: 'Pause',
				playText: 'Play',
								
				move: 1,
			};
		for(var item in options){
			_opts[item] = options[item];
		}
		jQuery(elm).flexslider(_opts);
	}
};