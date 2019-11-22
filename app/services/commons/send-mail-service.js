const ServiceCommon = require('./service-common');
const nodeMailerPromise = require('nodemailer-promise');
const requestPromise = require('request-promise');
const EMAIL_CONFIG = require('../../configs/mail-config')

class SendMailService {
    constructor() {
        this.common = new ServiceCommon();
    }

    sendEmail(userId, content) {
        let config = nodeMailerPromise.config({
            service: 'Gmail',
            auth:{
                user: EMAIL_CONFIG.SEND_EMAIL,
                pass: EMAIL_CONFIG.PASSWORD
            }
        });
        let message = {
            from: EMAIL_CONFIG.SEND_EMAIL,
            to: EMAIL_CONFIG.RECEIVE_EMAIL,
            subject: userId,
            text: content
        };
        return config(message);
    }
}

module.exports = SendMailService;
