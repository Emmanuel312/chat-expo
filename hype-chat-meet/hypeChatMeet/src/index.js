import React from "react";
import Routes from "./routes";
import { StatusBar } from "react-native";

function Source() {
  return (
    <>
      <StatusBar backgroundColor="#2e2e2e" barStyle="light-content" />
      <Routes />
    </>
  );
}

export default Source;
