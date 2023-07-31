const sequilize = require('../config/connection');
const { Post, Comment } = require('../models')

const seed = async () => {
    await sequilize.sync({ force: true });
   const posts = await Post.bulkCreate(post());
   
   for (const post of posts) {
     const postId = post.id;

     await Comment.bulkCreate(comments(postId))
   };

    process.exit(0);
}

const post = () => [
    {
        title: 'Fun Post',
        contents: 'This is a fun post',
        creator: 'zoeedge16',
        dateCreated: new Date()
    }

]

const comments = (postId) => [
    {
        text: 'Cool fun post!',
        creator: 'zoeedge17',
        dateCreated: new Date(),
        postId: postId,
    },
    {
        text: 'Awesome!',
        creator: 'zoeedge17',
        dateCreated: new Date(),
        postId: postId,
    }
]

seed();