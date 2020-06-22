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
  background: #5364a1;
  width: 80%;
  height: 50px;
  border-radius: 25px;
  margin-bottom: 10px;
  padding: 0 10px;
  color: #fff;
`;

export const SubmitButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background: #43419b;
  margin-top: 30px;
  height: 50px;
  border-radius: 25px;
  width: 35%;
`;

export const SubmitText = styled.Text`
  color: #cccccc;
`;
