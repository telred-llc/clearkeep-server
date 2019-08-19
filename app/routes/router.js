const express = require('express');
const router = express.Router();

router.use('/user', require('./apis/user-routes'));

module.exports = router;