const app     = require('./server/config/express');
const socket  = require('./server/helper/socket');

var server = app.listen(app.get('port'), () => {
  console.log('[app] Express server listening on port ' + server.address().port);
  require('./server/helper/socket')(server);
});
