import React from "react";

import { Container,Username,MessageText } from "./styles";

function Message({ text, username, me }) {
  return (
    <Container me={me}>
      <Username me={me}>{username}</Username>
      <MessageText me={me}>{text}</MessageText>
    </Container>
  );
}

export default Message;
