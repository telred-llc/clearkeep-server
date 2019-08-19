const requestPromise = require('request-promise');
const ServiceError = require('./service-error');
const clearKeepHomeServerConfig = require('../../configs/clear-keep-home-server-config');

class ServiceCommon {
    get(endPoint, token) {
        let options = {
            url: clearKeepHomeServerConfig.BASE_URL + endPoint,
            headers: {
                'Authorization': token
            },
            method: 'GET',
            json: true
        };
        return requestPromise(options);
    }
}

module.exports = ServiceCommon;