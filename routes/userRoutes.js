const express = require('express');
const rescue = require('express-rescue');
const UserController = require('../controllers/userController');

const router = express.Router();

router.route('/')
  .get(rescue(UserController.getAllUsers))
  .post(rescue(UserController.createNewUser));

router.route('/:id')
  .get(rescue(UserController.getById));

router.route('/me')
  .delete(rescue(UserController.deleteCurrentUser));

module.exports = router;