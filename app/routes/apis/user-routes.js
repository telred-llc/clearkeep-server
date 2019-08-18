const express = require('express');
const router = express.Router();
const UserController = require('../../controllers/user-controller');
const userController = new UserController();

router.get('/get-passphrase', function (req, res) {
    userController.findById(req, res);
});

router.post('/create-passphrase', function (req, res) {
    userController.create(req, res);
});
module.exports = router;