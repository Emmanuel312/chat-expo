import React, { useState, useEffect } from "react";
import { connect, emit, on, disconnect } from "../../services/socket";
import { Container, Content, Input, SubmitButton, SubmitText } from "./styles";

const Welcome = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [roomCode, setRoomCode] = useState("");

  useEffect(() => {
    connect();

    return () => disconnect();
  }, []);

  function handleJoinToRoom() {
    console.log(roomCode, username);
    emit("new_user_join_to_room", { room_id: roomCode, username });
    navigation.push("Room", { username, room_id: roomCode });
  }
  return (
    <Container>
      <Content>
        <Input
          value={username}
          onChangeText={setUsername}
          placeholder="Nome de usuario"
        ></Input>
        <Input
          value={roomCode}
          onChangeText={setRoomCode}
          placeholder="Código da sala"
          keyboardType="numeric"
        ></Input>

        <SubmitButton onPress={handleJoinToRoom}>
          <SubmitText>Entrar</SubmitText>
        </SubmitButton>
      </Content>
    </Container>
  );
};

export default Welcome;
