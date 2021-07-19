// Dependencies 
const inquirer = require("inquirer")
const mysql = require("mysql")
const cTable = require('console.table');
const { connect } = require("http2");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "0e5#97Dp"
    database: "employee_trackerDB"
});

// Connection ID 
connection.connect(function(err) {
    if (err) throw err
    console.log("Connected as ID " + connection.threadId)
    startPrompt();
});