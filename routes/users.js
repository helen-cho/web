var express = require('express');
var router = express.Router();

//로그인 페이지
router.get('/login', function(req, res, next) {
  res.render('index', { title: '로그인', pageName:'users/login.ejs' });
});

//회원가입 페이지
router.get('/join', function(req, res, next) {
  res.render('index', { title: '회원가입', pageName:'users/join.ejs' });
});

//마이 페이지
router.get('/mypage', function(req, res){
  res.render('index', {title:'마이페이지', pageName:'users/mypage.ejs'});
});

module.exports = router;