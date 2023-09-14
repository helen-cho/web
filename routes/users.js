var express = require('express');
var router = express.Router();
var db = require('../db')

/* GET users listing. */
router.get('/', function(req, res, next) {
    var sql='select * from users'
    db.get().query(sql, function(err, rows){
        res.send(rows);
    })
});

//회원가입 페이지 이동
router.get('/insert', function(req, res) {
    res.render('index', {title: '회원가입', pageName:'users/insert.ejs'});
});


//회원등록
router.post('/insert', function(req, res){
    var uid=req.body.uid;
    var upass=req.body.upass;
    var uname=req.body.uname;
    //console.log(uid, upass, uname);
    var sql='insert into users(uid, upass, uname) values(?,?,?)';
    db.get().query(sql, [uid, upass, uname], function(err, rows){
        res.sendStatus(200);
    });
});

//사용자정보읽기
router.get('/read', function(req, res){
    var uid=req.query.uid;
    var sql='select * from users where uid=?';
    db.get().query(sql, [uid], function(err, rows){
        res.render('index', {title: '마이페이지', pageName:'users/read.ejs', user:rows[0]});
    });
});

//비밀번호수정
router.post("/changepass", function(req, res){
    var uid=req.body.uid;
    var upass=req.body.upass;
    console.log(uid, upass);
    var sql='update users set upass=? where uid=?';
    db.get().query(sql, [upass, uid], function(err, rows){
        res.sendStatus(200);
    });
});

//회원정보 수정
router.post('/update', function(req, res){
    var uid=req.body.uid;
    var uname=req.body.uname;
    var phone=req.body.phone;
    var address1=req.body.address1;
    var address2=req.body.address2;
    var sql='update users set uname=?,phone=?,address1=?,address2=? where uid=?';
    db.get().query(sql, [uname,phone,address1,address2,uid],function(err, rows){
        res.sendStatus(200);
    });
});
module.exports = router;
