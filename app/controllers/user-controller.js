const UserDao = require('../daos/user-dao');
const CommonController = require('./commons/common-controller');
const User = require('../models/user');
const ClearKeepService = require('../services/clear-keep-service');

class UserController {
    constructor() {
        this.userDao = new UserDao();
        this.common = new CommonController();
        this.clearKeepService = new ClearKeepService();
    }

    findById(req, res) {
        let token = req.headers.authorization;
        this.clearKeepService.getAccountId(token).then((data) => {
            this.userDao.findById(data.user_id).then(this.common.findSuccess(res))
                .catch(this.common.findError(res));
        }).catch(this.common.authenticationError(res));
    }

    create(req, res) {
        let token = req.headers.authorization;
        let passphrase = req.body.passphrase;
        this.clearKeepService.getAccountId(token).then((data) => {
            let id = data.user_id;
            let user = new User(id, passphrase);
            return this.userDao.create(user).then(() => {
                this.userDao.findById(id).then(this.common.findSuccess(res)).catch(this.common.findError(res));
            }).catch(this.common.serverError(res));
        }).catch(this.common.authenticationError(res));
    }

    delete(req, res) {
        let token = req.headers.authorization;
        this.clearKeepService.getAccountId(token).then((data) => {
            this.userDao.delete(data.user_id).then(this.common.deleteSuccess(res))
                .catch(this.common.serverError(res));
        }).catch(this.common.authenticationError(res));
    }
}

module.exports = UserController;