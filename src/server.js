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

app.post('/postWrite', (req,res) => {
    console.log(req.body);
    const title = req.body.title;
    const content = req.body.content;
    const id = req.body.id;
    db.query(`insert into board (title,content,id,data,hit) values ('${title}','${content}','${id}',now(),0);`)
})

app.listen(PORT, () => {
    console.log(`Server run : http://localhost:${PORT}/`)
})