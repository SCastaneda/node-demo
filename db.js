var mongoose         = require('mongoose');
var db               = mongoose.connect('mongodb://localhost/posts-db');
var Schema           = mongoose.Schema;

var postsSchema = new Schema({
    date: Date,
    message: String
});

var postModel = mongoose.model('posts', postsSchema);