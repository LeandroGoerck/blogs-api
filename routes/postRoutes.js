const express = require('express');
const rescue = require('express-rescue');
const PostController = require('../controllers/postController');

const router = express.Router();

router.route('/')
  .get(rescue(PostController.getAll))
  .post(rescue(PostController.createNewPost));

router.route('/:id')
.get(rescue(PostController.getById))
.put(rescue(PostController.updatePost));

module.exports = router;