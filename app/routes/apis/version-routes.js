const express = require('express');
const router = express.Router();
const VersionController = require('../../controllers/version-controller');
const versionController = new VersionController();

router.get('/get-current-version', function (req, res) {
    versionController.getLast(req, res);
});

router.post('/create-new-version', function (req, res) {
    versionController.create(req, res);
});

module.exports = router;
