const database = require('../../configs/database-config');

const Promise = require('bluebird');

const DaoError = require('./dao-error');

class Common {
    findOne(query, params) {
        return new Promise(function (resolve, reject) {
            let stmt = database.db.prepare(query);
            stmt.all(params, function (error, rows) {
                if (error) {
                    reject(
                        new DaoError(11, "Invalid arguments")
                    );
                } else if (rows === null || rows.length === 0) {
                    reject(
                        new DaoError(21, "Entity not found")
                    );
                } else {
                    let row = rows[0];
                    resolve(row);
                }
            });
        });
    }

    insert(query, params) {
        return new Promise(function (resolve, reject) {
            let stmt = database.db.prepare(query);
            stmt.run(params, function (error) {
                if (this.changes === 1) {
                    resolve(true);
                } else if (this.changes === 0) {
                    reject(
                        new DaoError(21, "Entity not found")
                    )
                } else {
                    console.log(error);
                    reject(
                        new DaoError(11, "Invalid arguments")
                    )
                }
            })
        });
    }

    run(query, params) {
        return new Promise(function (resolve, reject) {
            let stmt = database.db.prepare(query);
            stmt.run(params, function (err) {
                if (this.changes === 1) {
                    resolve(true);
                } else if (this.changes === 0) {
                    reject(
                        new DaoError(21, "Entity not found")
                    )
                } else {
                    console.log(err);
                    reject(
                        new DaoError(11, "Invalid arguments")
                    )
                }
            })
        });
    }
}

module.exports = Common;
