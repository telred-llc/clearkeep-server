const User = require('../models/user');
const DaoCommon = require('./commons/dao-common');

class UserDao {
    constructor() {
        this.common = new DaoCommon();
    }

    findById(id) {
        let query = "SELECT * FROM User WHERE id=$id";
        let params = {$id: id};
        return this.common.findOne(query, params)
    }

    create(User) {
        let query = "INSERT INTO User (id, passphrase)" +
            "VALUES ($id, $passphrase)";
        let params = {
            $id: User.id,
            $passphrase: User.passphrase
        };
        return this.common.insert(query, params);
    }
}

module.exports = UserDao;