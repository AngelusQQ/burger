var express = require('express');
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 8080;

var application = express();

application.use(express.static('public'));

application.use(bodyParser.urlencoded({extended: true }));

application.use(bodyParser.json());

var expressHandleBars = require("express-handlebars");

application.engine('handlebars', expressHandleBars({ defaultLayout: "main"}));
application.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');

application.use(routes);

application.listen(PORT, function() {
  console.log("Server is listening on http://localhost:", PORT);
});
