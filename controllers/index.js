const router = require('express').Router();
const { Post, Comment } = require('../models');

router.get('/', async (req,res) => {
    const postData = await Post.findAll({
        include: [Comment]
    });

    const posts = postData.map(post => post.get({ plain: true }));

    res.render('index', { posts });
});

module.exports = router;