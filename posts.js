exports.start_posts = function(server) {

    var io = require("socket.io").listen(server);

    io.sockets.on('connection', connect);

    function connect(socket) {
        console.log("A user connected\n");
        socket.on("new_message", broadcast);
    }

    function broadcast(data) {
        console.log(data.message);
        io.sockets.emit("broadcast", { message: data.message });
    }

}