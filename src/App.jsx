import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Editor from "./components/Editor/Editor";
import { data } from "./data";
import Split from "react-split";
import { nanoid } from "nanoid";

function App() {
  return (
    <main>
      <Sidebar />
      <Editor />
    </main>
  );
}

export default App;
