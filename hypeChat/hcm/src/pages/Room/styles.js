import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: #2e2e2e;
`;

export const Header = styled.View`
  background: #4f4e4e;
  height: 70px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
`;

export const Content = styled.View`
  flex: 7.5;
  padding: 20px 10px 0;
`;

export const InputView = styled.View`
  flex: 1.5;
  align-items: center;
  /* justify-content: center; */
`;

export const MessageInputView = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background: #4f4e4e;
  padding: 0 20px;
  height: 55px;
  width: 95%;
  border-radius: 40px;
`;

export const MessageInput = styled.TextInput`
  color: #fff;
`;
