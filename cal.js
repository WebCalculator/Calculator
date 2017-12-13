var app=require('http').createServer(handler);
var io=require('socket.io').listen(app);
var fs=require('fs');
app.listen(3000);
function handler(req,res)
{
	fs.readFile('./calculator.html',function(err,data)
		{
		if(err){

			res.writeHead(500);
			return res.end("Error loading index.html");
	}
	res.writeHead(200);
	res.end(data);
})
}
console.log("server bat dau hoat dong");
io.sockets.on('connection', function (socket)
{
	socket.on('thu1',function(data){
	console.log(data);
	socket.emit('t1',data);
    socket.broadcast.emit('t1',data);
			  });
});
	//socket.emit('t1',"da ket noi");
