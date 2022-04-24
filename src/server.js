const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./config/db.js');

app.get('/api/boardData', (req,res) => {
    console.log('/api')
    db.query('select * from board',(err,data)=>{
        res.send(data);
    })
})

app.post('/postWrite', (req,res) => {
    console.log(req.body)
})

app.listen(PORT, () => {
    console.log(`Server run : http://localhost:${PORT}/`)
})