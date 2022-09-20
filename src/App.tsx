import React from "react";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./style/GlobalStyle";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
}
