const CommonController = require('./commons/common-controller');
const ClearKeepService = require('../services/clear-keep-service');
const SendMailService = require('../services/commons/send-mail-service');

class FeedbackController {
    constructor() {
        this.commonCotroller = new CommonController();
        this.clearKeepService = new ClearKeepService();
        this.sendMailService = new SendMailService();
    }

    feedbackEmail(req, res) {
        let token = req.headers.authorization;
        let content = req.body.content;
        let stars = req.body.stars;
        this.clearKeepService.getAccountId(token).then((data) => {
            let userId = data.user_id;
            this.sendMailService.sendEmail(userId, content, stars)
                .then(this.commonCotroller.findSuccess(res))
                .catch(this.commonCotroller.findError(res))
        }).catch(this.commonCotroller.authenticationError(res));
    }
}
module.exports = FeedbackController;
