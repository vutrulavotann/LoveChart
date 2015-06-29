var express = require("express");
var app = express();
var router = express.Router();

var ECT = require('ect');
var ectRenderer = ECT({root: __dirname + '/app/views', ext : '.ect' });
var path = require('path');

app.set('views', __dirname + '/app/views');
app.set('view engine', 'ect');
app.engine('ect', ectRenderer.render);

app.use(express.static(path.join(__dirname, 'app/client')));

// load request
var res = require("./request").requests;

function RegisterRequest(){
	for(var item in res){
		switch(res[item].method){
			case "get":
				app.get(res[item].route, res[item].func);
				break;
			case "post":
				break;
			case "put":
				break;
			case "delete":
				break;
		}
	}
}

RegisterRequest();

app.listen(3000);
console.log('love chart running on port 3000', __dirname);