import socketio from "socket.io-client";

const socket = socketio("http://192.168.0.112:3000", {
  autoConnect: false,
});

function connect() {
  socket.connect();
}

function emit(event, data) {
  socket.emit(event, data);
}

function on(event, cb) {
  socket.on(event, (data) => {
    cb(data);
  });
}

function disconnect() {
  if (socket.connected) socket.disconnect();
}

export { connect, disconnect, emit, on };
