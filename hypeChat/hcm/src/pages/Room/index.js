import React, { useState, useEffect, useRef } from "react";
import { Ionicons } from "@expo/vector-icons";
import Message from "../../components/Message";
import { emit, on } from "../../services/socket";
import {
  Container,
  Header,
  Title,
  InputView,
  MessageInput,
  Content,
  MessageInputView,
} from "./styles";
import { TouchableOpacity, FlatList } from "react-native";
import SnackBar from "react-native-snackbar-component";

const Room = ({ route }) => {
  const flatlistRef = useRef();
  const { username, room_id } = route.params;
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [joinToRoom, setJoinToRoom] = useState("");
  const [snackVisible, setSnackVisible] = useState(false);

  useEffect(() => {
    on("warn_everyone_new_user_join_to_room", (username) => {
      setJoinToRoom(`${username} entrou na sala`);
      setSnackVisible(true);
    });
    on("warn_everyone_new_message", (message) => {
      console.log(message.text);
      setMessages((messages) => [...messages, { ...message, me: false }]);
    });
  }, []);

  useEffect(() => {
    if (snackVisible) {
      setTimeout(() => setSnackVisible(false), 1000);
    }
  }, [snackVisible]);

  useEffect(() => {
    if (messages?.length) {
      flatlistRef.current.scrollToEnd({ animated: true });
    }
  }, [messages]);

  function handleSendMessage() {
    emit("new_message", { text: newMessage, username });
    setMessages([
      ...messages,
      { text: newMessage, username: "Você", me: true },
    ]);
    setNewMessage("");
  }

  return (
    <Container>
      <Header>
        <Title>{`Sala #${room_id}`}</Title>
      </Header>
      <Content>
        <FlatList
          ref={flatlistRef}
          data={messages}
          keyExtractor={(item, index) => String(index)}
          renderItem={({ item }) => <Message {...item}></Message>}
        ></FlatList>
      </Content>

      <InputView>
        <MessageInputView>
          <MessageInput
            placeholder="Digite sua mensagem..."
            value={newMessage}
            onChangeText={setNewMessage}
            returnKeyType="send"
            onSubmitEditing={handleSendMessage}
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
        position="top"
      />
    </Container>
  );
};

export default Room;
