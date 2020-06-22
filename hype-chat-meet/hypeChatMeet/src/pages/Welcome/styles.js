import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: #2e2e2e;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  width: 100%;
  align-items: center;
`;

export const Input = styled.TextInput`
  width: 95%;
  height: 56px;
  background: #5364a1;
  margin-bottom: 10px;
  border-radius: 28px;
  padding: 0 20px;
  color: #fff;
`;

export const SubmitButton = styled.TouchableOpacity`
  margin-top: 30px;
  width: 50%;
  height: 56px;
  background: #43419b;
  border-radius: 28px;
  align-items: center;
  justify-content: center;
`;

export const SubmitText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
