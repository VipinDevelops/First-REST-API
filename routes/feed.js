const express = require('express');

const router = express.Router();

const feedController = require('../controller/feed');

//GET /feed/posts
router.get('/posts', feedController.getPosts);

//POST /feed/posts
router.post('/posts', feedController.createPost);

module.exports = router;
