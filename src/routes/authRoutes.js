const express = require('express');
const {
  registerUser,
  verifyEmail,
  loginUser,
} = require('../controllers/authController');
const {
  validateRegister,
  validateLogin,
} = require('../middleware/validationMiddleware');

const router = express.Router();

router.post('/register', validateRegister, registerUser);
router.get('/verify-email', verifyEmail);
router.post('/login', validateLogin, loginUser);

module.exports = router;