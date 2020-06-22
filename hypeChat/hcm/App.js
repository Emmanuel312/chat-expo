import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { connect, emit, on } from "./src/services/socket";
import Source from "./src";

export default function App() {
  // const [myMessage, setMyMessage] = useState("");
  // const [messages, setMessages] = useState([]);
  // const [joinToRoom, setJoinToRoom] = useState("");

  // useEffect(() => {
  //   connect();
  // }, []);

  // function handleJoin() {
  //   emit("new_user_join_to_room", { room_id: "123", username: "Emmanuel" });
  //   on("warn_everyone_new_user_join_to_room", (username) => {
  //     setJoinToRoom(`${username} entrou na sala`);
  //   });
  //   on("warn_everyone_new_message", (message) => {
  //     console.log(message.text);
  //     setMessages((messages) => [...messages, message]);
  //   });
  // }

  // function handleSendMessage() {
  //   emit("new_message", { text: myMessage, username: "Emmanuel" });
  //   setMessages([...messages, { text: myMessage, username: "Emmanuel" }]);
  //   setMyMessage("");
  // }

  // function renderItem(item) {
  //   return (
  //     <View
  //       style={{
  //         backgroundColor: "#fff",
  //         marginBottom: 5,
  //         height: 50,
  //         padding: 5,
  //         borderRadius: 25,
  //       }}
  //     >
  //       <Text style={{ color: "#000" }}>{item.username}</Text>
  //       <Text style={{ color: "#000" }}>{item.text}</Text>
  //     </View>
  //   );
  // }

  return (
    <Source></Source>
    // <View style={styles.container}>
    //   <FlatList
    //     style={{ width: "90%" }}
    //     data={messages}
    //     renderItem={({ item }) => renderItem(item)}
    //     // extraData={messages}
    //     keyExtractor={(item, index) => String(index)}
    //   ></FlatList>
    //   <TouchableOpacity onPress={handleJoin}>
    //     <Text style={{ color: "#fff" }}>Entrar na sala</Text>
    //   </TouchableOpacity>
    //   <TextInput
    //     value={myMessage}
    //     onChangeText={setMyMessage}
    //     style={{
    //       backgroundColor: "#fff",
    //       height: 50,
    //       width: "80%",
    //       borderRadius: 5,
    //       margin: 10,
    //     }}
    //   ></TextInput>

    //   <TouchableOpacity onPress={handleSendMessage}>
    //     <Text style={{ color: "#fff" }}>mandar mensagem</Text>
    //   </TouchableOpacity>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#707070",
    alignItems: "center",
    padding: 20,
  },
});
