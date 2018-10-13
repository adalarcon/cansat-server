const env     = require('dotenv').config()
const app     = require('./server/config/express');

var server = app.listen(app.get('port'), () => {
  console.log('[app] Express server listening on port ' + server.address().port);
  require('./server/helper/socket')(server);
});


// var http = require("http");
// setInterval(function() {
//     http.get("http://cansat.herokuapp.com/");
// }, 300000); // every 5 minutes (300000)
