var http=require("http");

/*http.createServer(function(request,response) {
	response.writeHead(200,{"Content-Type":"text/plain"});
	response.write("Hello World, How Are You? :)");
	response.end();
	}).listen(3100);
*/

var server=http.createServer();
server.listen(3200);
