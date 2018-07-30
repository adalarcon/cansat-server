module.exports = (server) => {

  const io = require('socket.io')(server);

  var sockets = [];
  var count = 0;

  io.of('/api/v1/io/logs').on('connection', function (socket) {

    if (socket.handshake.query.s == 'ui'){
      sockets.push(socket);
    }

    console.log("[socket] new connection: ", socket.id);
    console.log("[socket] sockets connected: ", sockets.length);

    socket.emit('message', "welcome to logs socket");

    socket.on('imu', function (data) {
      console.log("[socket] imu >>> ", count++);
      for (var i = 0; i < sockets.length; i++) {
        sockets[i].emit('imu', data);
      }
    });

    socket.on('gps', function (data) {
      console.log("[socket] gps >>> ", count++);
      for (var i = 0; i < sockets.length; i++) {
        sockets[i].emit('gps', data);
      }
    });


    socket.on('disconnect', function () {
      console.log(' <<< socket disconected: ', socket.id);
      for (var i = 0; i < sockets.length; i++) {
        if (sockets[i].id == socket.id){
          sockets.splice(i,1);
        }
      }
    });
  });


  return io;
}
