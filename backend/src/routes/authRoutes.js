const express = require('express');
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/signup', authController.signUp);
router.post('/login', authController.login);

// Example protected route
router.get('/profile', authMiddleware.authenticateToken, (req, res) => {
  res.json({ user: req.user });
});

module.exports = router;
