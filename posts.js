exports.start_posts = function(server, db) {

    var io = require("socket.io").listen(server);

    io.sockets.on('connection', connect);

    function connect(socket) {
        console.log("A user connected\n");

        // give user all previous posts
        db.get_posts(send_all_prev_posts, socket);

        socket.on("new_message", broadcast);


    }

    function broadcast(data) {
        console.log(data.message);
        io.sockets.emit("broadcast", { message: data.message });
        db.save_post(data.message);
    }

    function send_all_prev_posts(posts, socket) {
        console.log(posts);
        socket.emit("all_prev_posts", {all_posts: posts});

    }

}