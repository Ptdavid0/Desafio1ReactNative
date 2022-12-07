import React from "react";
import { StatusBar } from "expo-status-bar";
import Home from "./src/screens/Home";

const App: React.FC = () => {
  return (
    <>
      <StatusBar style="auto" />
      <Home />
    </>
  );
};

export default App;
