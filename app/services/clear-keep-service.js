const ServiceCommon = require('./commons/service-common');
const clearKeepConfig = require('../configs/clear-keep-home-server-config');

class ClearKeepService {
    constructor(){
        this.common = new ServiceCommon();
    }

    getAccountId(token){
        return this.common.get(clearKeepConfig.ACCOUNT+clearKeepConfig.WHO_AM_I, token);
    }
}
module.exports = ClearKeepService;