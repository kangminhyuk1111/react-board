const mysql = require('mysql');

const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'1234',
    database:'my_web_dev_study',
    dateStrings: 'date'
});

module.exports = db;