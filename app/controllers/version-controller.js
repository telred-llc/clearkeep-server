const VersionDao = require('../daos/version-dao');
const CommonController = require('../controllers/commons/common-controller');
const Version = require('../models/version');
const ClearKeepService = require('../services/clear-keep-service');
this.clearKeepService = new ClearKeepService();

class UserController {
    constructor() {
        this.versionDao = new VersionDao();
        this.commonController = new CommonController();
    }

    getLast(req, res) {
        let token = req.headers.authorization;
        let type = req.query.type;

        this.clearKeepService.getAccountId(token).then((data) => {
            this.versionDao.findLast(type).then(this.commonController.findSuccess(res))
                .catch(this.commonController.findError(res));
        }).catch(this.common.authenticationError(res));
    }

    create(req, res) {
        let type = req.body.type;
        let version = req.body.version;
        this.versionDao.create(type, version).then(this.commonController.editSuccess(res))
            .catch(this.commonController.serverError(res));
    }
}

module.exports = UserController;
