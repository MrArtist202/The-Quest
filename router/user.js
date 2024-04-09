const express = require('express');
const router = express.Router();
const {contact} = require('../controller/user');

router.post('/contact', contact);
module.exports = router;