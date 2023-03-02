const mysql = require("mysql2");

const connection = mysql.createConnection({
    database: process.env.MYSQLDATABASE,
    host: process.env.MYSQLHOST,
    password: process.env.MYSQLPASSWORD,
    port: process.env.MYSQLPORT,
    user: process.env.MYSQLUSER
})

module.exports = connection;