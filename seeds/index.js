const sequilize = require('../config/connection');
const { Post, Comment } = require('../models')

const seed = async () => {
    await sequilize.sync({ force: true });
   const post = await Post.bulkCreate(posts());
   console.log(post);

    process.exit(0);
}

const posts = () => [
    {
        title: 'Fun Post',
        contents: 'This is a fun post',
        creator: 'zoeedge16',
        dateCreated: new Date()
    }

]

seed();