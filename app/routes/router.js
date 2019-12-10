const express = require('express');
const router = express.Router();

router.use('/user', require('./apis/user-routes'));
router.use('/feedback', require('./apis/feedback-routes'));
router.use('/version', require('./apis/version-routes'));

module.exports = router;
