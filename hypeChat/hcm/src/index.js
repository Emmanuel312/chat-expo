import React from "react";
import Routes from "./routes";
import { StatusBar } from "react-native";

// import { Container } from './styles';

function Source() {
  return (
    <>
      <StatusBar backgroundColor="#2e2e2e" barStyle="light-content"></StatusBar>
      <Routes />
    </>
  );
}

export default Source;
