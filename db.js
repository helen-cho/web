mysql  = require('mysql')

var config = {
    connectionLimit:100, 
    host:'hd9536.cafe24.com',
    user:'hd9536', 
    password:'inha1004!', 
    database:'hd9536',
    typeCast: function (field, next) {
        if (field.type == 'VAR_STRING') return field.string();
        return next();
    }
}

var pool = mysql.createPool(config);
var connection;
exports.connect = function() {
  pool.getConnection(function(err, con){
    if(err) console.log('db접속 오류:', err)
    else connection = con;
  });  
}

exports.get = function() {
    return connection;
};