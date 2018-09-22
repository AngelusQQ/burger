var orm = require('./../config/orm.js');

var burger = {
  all: function() {
    orm.selectAll();
  },
  update: function() {
    orm.updateOne();
  },
  insert: function() {
    orm.insertOne();
  }
}

module.exports = burger;
