import React from "react";
import { StatusBar } from "react-native";
import Home from "./src/screens/Home";

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <Home />
    </>
  );
};

export default App;
