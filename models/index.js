const Post = require('./Post');
const Comment = require('./Comment');
const SignIn = require('./SignIn');
const SignUp = require('./SignUp');



Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});
// unsure of how SignUp and SignIn work in this context above

module.exports = { Post, Comment, SignIn, SignUp };
