const mysql = require('mysql');

const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'1234',
    database:'my_web_dev_study'
});

module.exports = db;