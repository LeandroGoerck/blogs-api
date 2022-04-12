const express = require('express');
const rescue = require('express-rescue');
const CategoryController = require('../controllers/categoryController');

const router = express.Router();

router.route('/')
  .post(rescue(CategoryController.createNewCategory));

  module.exports = router;