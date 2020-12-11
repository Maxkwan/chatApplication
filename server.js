
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

http.listen(8000, function(){
    console.log('Listening to port 8000');
});

io.on('connection', function(socket){
    socket.on("user_connected", function(user_id){
        console.log("user connected " + user_id);
    });
});

