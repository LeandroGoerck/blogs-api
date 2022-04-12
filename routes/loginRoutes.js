const express = require('express');
const rescue = require('express-rescue');
const UserController = require('../controllers/userController');

const router = express.Router();

router.route('/')
  .post(rescue(UserController.login));

module.exports = router;