var connection = require("./connection.js");

var orm = {
  selectAll: function(tableInput, Banana) {
    var query = "SELECT * FROM " + tableInput + ";";
    connection.query(query, function(error, result) {
      if (error) throw error;
      Banana(result);
    })
  },
  insertOne: function(tableInput, burgerName, Banana) {
    var query = 'INSERT INTO ' + tableInput + ' (burger_name, burger_devoured) VALUE ("' + burgerName.toString() + '", false);';
    console.log(query);
    connection.query(query, function(error, result) {
      if (error) throw error;
      Banana(result);
    });
  },
  updateOne: function(tableInput, condition, Banana) {
    var query = 'UPDATE ' + tableInput + ' SET burger_devoured = TRUE WHERE burger_name = "' + condition + '";';
    console.log(query);
    connection.query(query, function(error, result) {
      if (error) throw error;
      Banana(result);
    });
  }
};

module.exports = orm;
