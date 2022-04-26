const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./config/db.js');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.json());

app.get('/api/BoardData', (req,res) => {
    console.log('/api')
    db.query('select * from board',(err,data)=>{
        res.send(data);
    })
})

app.post('/postWrite', (req,res,next) => {
    console.log(req.body);
    const title = req.body.title;
    const content = req.body.content;
    const id = req.body.id;
    const sql = `insert into board (title,content,id,data,hit) values ('${title}','${content}','${id}',now(),0);`;
    db.query(sql,async(err,result)=>{
        if(err) throw err;
        console.log("1 record inserted");
    })
    next();
})

app.post('/search', (req,res,next) => {
    console.log(req.body);
    next();
    // const sql = `select * from board where title like ${searchText}`
})

app.listen(PORT, () => {
    console.log(`Server run : http://localhost:${PORT}/`)
})