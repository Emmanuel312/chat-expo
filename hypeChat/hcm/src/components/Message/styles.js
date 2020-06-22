import styled from "styled-components/native";

export const Container = styled.View`
  /* flex: 1; */
  align-self: ${(props) => (props.me ? "flex-end" : "flex-start")};
  background: ${(props) => (props.me ? "#fff" : "#4f4e4e")};
  width: 50%;
  margin: 10px 0;
  padding: 20px;
  border-top-left-radius: 40px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;
export const Username = styled.Text`
  color: ${(props) => (props.me ? "#43419B" : "#fff")};
  font-weight: bold;
`;
export const MessageText = styled.Text`
  color: ${(props) => (props.me ? "#2e2e2e" : "#fff")};
`;
