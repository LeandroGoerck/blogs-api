const express = require('express');
const rescue = require('express-rescue');
const UserController = require('../controllers/userController');

const router = express.Router();

router.route('/')
  .get(rescue(UserController.getAllUsers))
  .post(rescue(UserController.createNewUser));

module.exports = router;