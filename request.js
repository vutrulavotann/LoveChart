/*
	Handle request to server
*/
var root_controller = "./app/controllers/";
var requests = [];

var home = require(root_controller+"index_controller.js");
requests = requests.concat(home.functions);

exports.requests = requests;