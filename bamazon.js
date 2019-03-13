var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",

  password: "phantom22",
  database: "bamazon_DB"
});
connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    displayProducts();
  });

function displayProducts() {
    console.log("Showing products for sale.\n");
    connection.query(
        "SELECT * FROM products", function(err, res) {
            if (err) throw err;
            console.table(res);
            connection.end();
        } 
    );
};

function buyItem() {
    inquirer
        .prompt([
            {
                name: "itemIdChoice",
                type: "input",
                message: "What is the ID of the item you'd like to buy?"
            },
            {
                name: "itemUnitChoice",
                type: "input",
                message: ""
            }
        ])
}