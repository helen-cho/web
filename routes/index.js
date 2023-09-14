var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '홈페이지', pageName:'home.ejs' });
});

//로그인 페이지 이동
router.get('/login', function(req, res){
    res.render('index', {title: '로그인', pageName:'login.ejs'});
});

//로그인 체크
router.post("/login", function(req, res){
    var uid=req.body.uid;
    var upass=req.body.upass;
    var sql='select * from users where uid=?';
    db.get().query(sql, [uid], function(err, rows){
        //console.log(rows[0]);
        var result=0;
        if(rows[0]){
            if(rows[0].upass == upass){
                result=1;
            }else{
                result=2;
            }
        }
        res.send({result:result});
    });
});

module.exports = router;
