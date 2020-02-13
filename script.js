// var http = require('http');
// var fs = require('fs');

// http.createServer(function (req,res) {
// 	fs.readFile('index.html', function(err, data) {

// 	res.writeHead(200, {'Content-Type': 'text/html'});
// 	res.write(data);
// 	res.end();
// 	});
// }).listen(8080);
let flag = true;
console.log('HEY THERE!');
function invisible() {
	if(flag){
	document.getElementById("header").style.visibility = "hidden";}
	else{
		document.getElementById("header").style.visibility = "visible";
	}
	flag = !flag;
}

function forPic() {
	let num=2;
	document.getElementById('currentPic').style.background = "url('2.JPG') no-repeat center center";
	document.getElementById('currentPic').style.backgroundSize="contain";
	num++;
}