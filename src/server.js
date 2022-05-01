const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./config/db.js');
var url = require('url');
    var urlObject = url.parse('http://localhost:3000/path/abc.php?id=student&page=12#hash');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.json());

app.get('/api/BoardData', (req, res) => {
    console.log('/api')
    db.query('select * from board', (err, data) => {
        res.send(data);
    })
})

var requestData = function (req, res, next) {
    req.requestData = req.body;
    next();
}

app.use(requestData)

app.post('/postWrite', (req, res, next) => {
    console.log(req.requestData);
    const title = req.requestData.title;
    const content = req.requestData.content;
    const id = req.requestData.id;
    const sql = `insert into board (title,content,id,data,hit) values ('${title}','${content}','${id}',now(),0);`;
    db.query(sql, async (err, result) => {
        if (err) throw err;
        console.log("1 record inserted");
    })
})

app.post("/api/search/:searchText", (req, res) => {
    console.log(req.params.searchText);
    const text = req.params.searchText;
    const sql = `select * from board where title like '%${text}%'`
    db.query(sql, async(err,data)=>{
        if (!err){
            res.send({searchData:data})
            console.log(data);
        }else{
            console.log(err);
        }
    })
})

app.post('/api/member/:id&/:name&/:password&/:passwordCheck', (req, res, next) => {
    console.log("member");
    console.log(req.params.id);
    console.log(req.params.name);
    console.log(req.params.password);
    console.log(req.params.passwordCheck);
    const id = req.params.id;
    const name = req.params.name;
    const password = req.params.password;
    const passwordCheck = req.params.passwordCheck;
    const sql = `insert into board_member values('${id}','${name}','${passwordCheck}','${password}');`
    db.query(sql, (err,data)=>{
        if(!err){
            res.send()
        }else{
            console.log(err)
        }
    })
})

app.post('/api/login/:id&/:password',(req,res,next) => {
    const id = req.params.id;
    const password = req.params.password;
    const sql = `select id,password from board_member where id='${id}' and password='${password}'`;
    db.query(sql, (err,data)=>{
        res.send(data);
    })
})

app.listen(PORT, () => {
    console.log(`Server run : http://localhost:${PORT}/`)
})