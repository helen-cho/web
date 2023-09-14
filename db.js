mysql  = require('mysql')

var connection;
exports.connect = function() {
    connection=mysql.createPool({
    connectionLimit:100, 
    host:'hd9536.cafe24.com',
    user:'hd9536', 
    password:'inha1004!', 
    database:'hd9536',
    typeCast: function (field, next) {
        if (field.type == 'VAR_STRING') return field.string();
        return next();
    } });
}

exports.get = function() {
    return connection;
};