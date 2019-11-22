const express = require('express');
const router = express.Router();
const FeedbackController = require('../../controllers/feedback-controller');
const feedbackController = new FeedbackController();

router.post('/email', function (req, res) {
    feedbackController.feedbackEmail(req, res);
});

module.exports = router;
