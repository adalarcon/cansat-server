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

    socket.on('lm35', function (data) {
      console.log("[socket] lm35 >>> ", count++);
      for (var i = 0; i < sockets.length; i++) {
        sockets[i].emit('lm35', data);
      }
    });

    socket.on('dth', function (data) {
      console.log("[socket] dth >>> ", count++);
      for (var i = 0; i < sockets.length; i++) {
        sockets[i].emit('dth', data);
      }
    });

    socket.on('b180', function (data) {
      console.log("[socket] b180 >>> ", count++);
      for (var i = 0; i < sockets.length; i++) {
        sockets[i].emit('b180', data);
      }
    });

    socket.on('sw', function (data) {
      console.log("[socket] sw >>> ", count++);
      for (var i = 0; i < sockets.length; i++) {
        sockets[i].emit('sw', data);
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
