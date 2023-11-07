const express = require('express');
const router = express.Router();

// posts model
const Posts = require('../../Posts');

// @routes POST api/posts
// @desc Create an post
router.post('/',(req, res) => {
    res.send(`Let's create post!`);
});

module.exports = router;