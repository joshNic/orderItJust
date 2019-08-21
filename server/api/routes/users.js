const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user');
const checkAuth = require('../middleware/check-auth');

router.post('/signup', UserController.User);

router.post('/login', UserController.user_logIn);

router.delete('/:userId', checkAuth, UserController.user_delete);

module.exports = router;
