var orm = require('./../config/orm.js');

var burger = {
  all: function(Banana) {
    orm.selectAll("burgers", function(res) {
      Banana(res);
    });
  },
  update: function(condition, Banana) {
    orm.updateOne("burgers", condition, function(res){
      Banana(res);
    });
  },
  insert: function(burgerName, Banana) {
    orm.insertOne("burgers", burgerName, function(res) {
      Banana(res);
    });
  }
}

module.exports = burger;
