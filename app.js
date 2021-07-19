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

// Inital Prompt
funciton startPrompt() {
    inquirer.prompt([
        {
        type: "list",
        message: "What would you like to do?",
        name: "choice",
        choices: [
                "View All Employees?",
                "View All Employees By Roles?",
                "View All Employees By Department?",
                "Update Employee?",
                "Add Role?",
                "Add Department?"
                ]
            }   
]).then(function(val) {
    switch (val.choice) {
        case "View All Employees?":
            viewAllEmployees();
        break;

        case "View All Employees By Roles?":
            viewAllRoles();
        break;

        case "View All Employees By Department?": 
            viewAllDepartments();
        break;

        case "Update Employee?":
            updateEmployee();
        break;

        case "Add Role?":
            addRole();
        break;

        case "Add Department?":
            addDepartment();
        break;

        }
    })
}

function viewAllEmployees() {
    connection.query("SELECT employee.first_name, employee.last_name, role.title, role.salary, department.name, CONCAT(e.first_name, ' ', e.last_name) AS Manager FROM employee INNER JOIN role on role.id = employee.role_id INNER JOIN department on department.id = role.department_id left joihn employee e on employee.manager_id = e.id;"
    function(err, res) {
        if (err) throw err
        console.log(res)
        startPrompt()
    })
}