photos = require("../models/photos_model");

function index(req, res){
	//getRepresentPhotoByUserId
	var user_id = req.params.user_id;
	res.render('home/index', {
		user_id: user_id,
		title: 'Amazing Life!',
		photos: photos.getRepresentPhotoByUserId(user_id)
	});
};
function home(req, res){
	res.render('home/home', {
		"title": "home page"
	});
};

exports.functions = [
	{route: "/", method: 'get', func: index},
	{route: "/home/:sao", method: 'get', func: home}
];