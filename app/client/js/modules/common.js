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
	},
	UploadImage: function(input, upload_url){
		if(!upload_url){
			upload_url = "#";
		}
		jQuery(input).fileinput({
			uploadUrl: upload_url, // you must set a valid URL here else you will get an error
			allowedFileExtensions : ['jpg', 'png','gif'],
			overwriteInitial: false,
			maxFileSize: 1000,
			maxFilesNum: 10,
			//allowedFileTypes: ['image', 'video', 'flash'],
			slugCallback: function(filename) {
				return filename.replace('(', '_').replace(']', '_');
			}
		});
	}
};