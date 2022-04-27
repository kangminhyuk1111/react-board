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
        }else{
            console.log(err);
        }
    })
})

app.listen(PORT, () => {
    console.log(`Server run : http://localhost:${PORT}/`)
})