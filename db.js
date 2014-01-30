var mongoose         = require('mongoose');
var db               = mongoose.connect('mongodb://localhost/posts-db');
var Schema           = mongoose.Schema;

var postsSchema = new Schema({
    date: {type: Date, default: Date.now} ,
    message: String,
    name: String,
    asd: String
});

var postModel = mongoose.model('posts', postsSchema);

exports.save_post = function(message) {
    post = new postModel();
    post.message = message;
    post.save(save_message);
}

function save_message(err, message) {
    if(err) {
        console.log(err);
    } else {
        console.log("message saved: " + message);
    }
}

exports.get_posts = function(cb, socket) {
    postModel.find({}, null, { sort: {date : -1 } }, function(err, posts) {
        if(err) {
            console.log(err);
        } else {
            cb(posts, socket);
        }
    });
}