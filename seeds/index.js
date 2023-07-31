const sequilize = require('../config/connection');
const { Post, Comment, SignIn } = require('../models')

const seed = async () => {
    await sequilize.sync({ force: true });
    const posts = await Post.bulkCreate(post());
    await SignIn.bulkCreate(signIn());
   
    for (const post of posts) {
        const post_id = post.id;

        await Comment.bulkCreate(comments(post_id))
    };

    process.exit(0);
}

const post = () => [
    {
        title: 'Fun Post',
        contents: 'This is a fun post',
        creator: 'zoeedge16',
        dateCreated: new Date()
    },
    {
        title: 'Cool Post',
        contents: 'This is a coool post',
        creator: 'zoeedge16',
        dateCreated: new Date()
    }

]

const comments = (post_id) => [
    {
        text: 'Cool fun post!',
        creator: 'zoeedge17',
        dateCreated: new Date(),
        post_id: 1,
    },
    {
        text: 'Awesome!',
        creator: 'zoeedge17',
        dateCreated: new Date(),
        post_id: 2,
    }
]

const signIn = () => [
    {
        name: 'zoeedge20',
        password: 'passowrd123'
    }
]

seed();