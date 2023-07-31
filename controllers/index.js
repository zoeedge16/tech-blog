const router = require('express').Router();
const { Post, Comment, SignIn } = require('../models');

router.get('/', async (req,res) => {
    const postData = await Post.findAll({
        include: [Comment]
    });

    const posts = postData.map(post => post.get({ plain: true }));

    res.render('index', { posts });
});

router.get('/signIn', async (req, res) => {
    const signInData = await SignIn.findAll();
    const signIn = signInData.map(signIn => signIn.get({ plain: true }));
    res.render('signIn', { signIn });
});


module.exports = router;