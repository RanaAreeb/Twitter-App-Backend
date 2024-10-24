const express = require('express');
const { loginUser, addPoints } = require('../controllers/userController');
const router = express.Router();

router.post('/login', loginUser);
router.post('/addPoints', addPoints);

module.exports = router;
