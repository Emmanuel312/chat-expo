import React, { useEffect, useState, useRef } from "react";
import { TouchableOpacity, FlatList } from "react-native";
import { on, emit } from "../../services/socket";
import {
  Container,
  Header,
  Title,
  Content,
  MessageInput,
  MessageInputView,
  InputView,
} from "./styles";
import { Ionicons } from "@expo/vector-icons";
import Message from "../../components/Message";
import SnackBar from "react-native-snackbar-component";

function Room({ route }) {
  const flatlistRef = useRef();
  const { username, room_id } = route.params;
  const [joinToRoom, setJoinToRoom] = useState("");
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [snackVisible, setSnackVisible] = useState(false);

  useEffect(() => {
    on("warn_everyone_new_user_join_to_room", (username) => {
      setJoinToRoom(`${username} entrou na sala`);
      snackVisible(true);
    });

    on("warn_everyone_new_message", (message) => {
      setMessages([...messages, { ...message, me: false }]);
    });
  }, []);

  function handleSendMessage() {
    emit("new_message", { text: newMessage, username });
    setMessages([
      ...messages,
      { text: newMessage, username: "Você", me: true },
    ]);
    setNewMessage("");
  }

  useEffect(() => {
    if (snackVisible) {
      setTimeout(() => setSnackVisible(false), 1000);
    }
  }, [snackVisible]);

  useEffect(() => {
    if (messages.length) {
      flatlistRef.current.scrollToEnd({ animated: true });
    }
  }, [messages]);

  return (
    <Container>
      <Header>
        <Title>{`Sala #${room_id}`}</Title>
      </Header>
      <Content>
        {messages && (
          <FlatList
            ref={flatlistRef}
            data={messages}
            keyExtractor={(item, index) => String(index)}
            renderItem={({ item }) => <Message {...item}></Message>}
          />
        )}
      </Content>
      <InputView>
        <MessageInputView>
          <MessageInput
            placeholder="Digite sua mensagem..."
            value={newMessage}
            onChangeText={setNewMessage}
          />
          <TouchableOpacity onPress={handleSendMessage}>
            <Ionicons name="md-send" size={24} color="#fff" />
          </TouchableOpacity>
        </MessageInputView>
      </InputView>
      <SnackBar
        visible={snackVisible}
        textMessage={joinToRoom}
        messageColor="#000"
        backgroundColor="#fff"
        // position="top"
      />
    </Container>
  );
}

export default Room;
