const express = require('express');
const router = express.Router();
const {signup} = require('../controller/user2');
const {login} = require('../controller/user2');

router.post('/signup', signup);
router.post('/login', login);
module.exports = router;