let sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./clear-keep.db');

let init = function () {
    db.run("CREATE TABLE if not exists User (" +
        "id TEXT PRIMARY KEY," +
        " passphrase TEXT" +
        ")");
    db.run("CREATE TABLE if not exists Version (" +
        "id INTEGER PRIMARY KEY AUTOINCREMENT," +
        " type TEXT," + " version TEXT," + " createdAt INTEGER" +
        ")");
};

module.exports = {
    init : init,
    db : db
};
