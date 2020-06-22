import express from "express";
import io from "socket.io";
import http from "http";

class App {
  constructor() {
    this.init();
    this.handleIO();
  }

  init() {
    this.app = express();
    this.server = http.Server(this.app);
    this.io = io(this.server);
  }

  handleIO() {
    // cliente se conectou
    this.io.on("connection", (socket) => {
      // esperando o evento de entrar na sala
      socket.on("new_user_join_to_room", ({ room_id, username }) => {
        // entrou na sala / criar a sala
        console.log(username);
        socket.join(`${room_id}`);
        // avisar a todos que alguem entrou na sala
        socket.broadcast
          .to(`${room_id}`)
          .emit("warn_everyone_new_user_join_to_room", username);
        // esperando o cliente mandar uma mensagem
        socket.on("new_message", ({ text, username }) => {
          // enviando a mensagem para todos daquela sala
          socket.broadcast
            .to(`${room_id}`)
            .emit("warn_everyone_new_message", { text, username });
        });
      });
    });
  }
}

export default new App().server;
