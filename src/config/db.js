const mysql = require('mysql');

const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'1234',
    database:'my_Web_dev_Study',
    dateStrings: 'date'
});

module.exports = db;