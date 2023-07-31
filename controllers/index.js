const router = require('express').Router();
const { Post, Comment } = require('../models');

router.get('/', async (req,res) => {
    const postTitle = await Post.findAll({
        include: [Comment]
    });

    res.json(postTitle);
})

module.exports = router;