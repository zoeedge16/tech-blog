const Post = require('./Post');
const Comment = require('./Comment');
const SignIn = require('./SignIn');
const SignUp = require('./SignUp');


// use this file to connect the directory to your other files.
// Post is most important
// Post hasMany Comment
Post.hasMany(Comment, {
    foreignKey: 'comment_id'
});
// Comment belongsTo Post
Comment.belongsTo(Post, {
    foreignKey: 'comment_id'
});
// unsure of how SignUp and SignIn work in this context above
