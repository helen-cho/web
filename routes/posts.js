var express = require('express');
var router = express.Router();

//게시글목록
router.get('/', function(req, res){
    res.render('index', {title:'게시글', pageName:'posts/list.ejs'});
});

//게시글쓰기
router.get('/insert', function(req, res){
    res.render('index', {title:'글쓰기', pageName:'posts/insert.ejs'});
})

//게시글읽기
router.get('/read/:id', function(req, res){
    const id=req.params.id;
    res.render('index', {title: '게시글정보', pageName: 'posts/read.ejs', id});
});

//게시글수정
router.get('/update/:id', function(req, res){
    const id=req.params.id;
    res.render('index', {title: '게시글수정', pageName: 'posts/update.ejs', id});
});
module.exports = router;