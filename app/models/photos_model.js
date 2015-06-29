function getRepresentPhotoByUserId(user_id){
	var photos = [
			{
				image: 'images/background-images/slider-1.jpg1',
				slide_show: 0 // Image only
			},
			{
				image: 'images/background-images/slider-2.jpg1',
				slide_show: 1, // Caption left
				caption: {
					sub_title: 'What is',
					title: 'Your Story',
					content: 'With the combination of responsive design and parallax animations, this theme will provide an optimal viewing experience and will make your website look great on across wide range of devices and screen sizes.'
				}
			},
			{
				image: 'images/background-images/slider-3.jpg1',
				slide_show: 2, // Caption center
				caption: {
					sub_title: 'The perfect canvas for your',
					title: 'Creative Ideas',
					button: 'Read More'
				}
			},
			{
				image: 'images/background-images/slider-4.jpg1',
				slide_show: 3, // Video inner
				link_video: 'https://www.youtube.com/embed/ZxL81hkk-4I?feature=oembed'
			}
		];
	return photos;
}
function uploadPhoto(){
	
}
exports.getRepresentPhotoByUserId = getRepresentPhotoByUserId;