import React, { useState, useEffect } from "react";
import { Container, Content, Input, SubmitButton, SubmitText } from "./styles";
import { connect, disconnect, emit } from "../../services/socket";

function Welcome({ navigation }) {
  const [username, setUsername] = useState("");
  const [roomId, setRoomId] = useState("");

  useEffect(() => {
    connect();

    return () => disconnect();
  }, []);

  function handleJoinToRoom() {
    emit("new_user_join_to_room", { username, room_id: roomId });
    navigation.push("Room", { username, room_id: roomId });
  }

  return (
    <Container>
      <Content>
        <Input
          value={username}
          placeholder="Nome do usúario"
          onChangeText={setUsername}
        />
        <Input
          value={roomId}
          placeholder="Código da sala"
          onChangeText={setRoomId}
        />

        <SubmitButton onPress={handleJoinToRoom}>
          <SubmitText>Entrar</SubmitText>
        </SubmitButton>
      </Content>
    </Container>
  );
}

export default Welcome;
