var express = require('express');
var router = express.Router();

//게시글
router.get('/', function(req, res){
    res.render('index', {title:'게시글', pageName:'posts/list.ejs'});
});

//글쓰기
router.get('/insert', function(req, res){
    res.render('index', {title:'글쓰기', pageName:'posts/insert.ejs'});
})

module.exports = router;