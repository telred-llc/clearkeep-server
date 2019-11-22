const express = require('express');
const router = express.Router();

router.use('/user', require('./apis/user-routes'));
router.use('/feedback', require('./apis/feedback-routes'))

module.exports = router;
