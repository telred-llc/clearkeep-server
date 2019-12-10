const Version = require('../models/version');
const DaoCommon = require('./commons/dao-common');

class VersionDao {
    constructor() {
        this.common = new DaoCommon();
    }

    findLast(type) {
        let query = "SELECT * FROM Version WHERE type=$type ORDER BY createdAt DESC LIMIT 1";
        let params = {$type: type};
        return this.common.findOne(query, params);
    }

    create(type, version) {
        let query = "INSERT INTO Version (id, type, version, createdAt) VALUES (NULL, $type, $version, $createdAt)";
        let params = {
            $type: type,
            $version: version,
            $createdAt: Date.now() / 1000 | 0
        };
        return this.common.insert(query, params);
    }
}
module.exports = VersionDao;
