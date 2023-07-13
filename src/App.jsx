import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Editor from "./components/Editor/Editor";

function App() {
  return (
    <div>
      <Sidebar />
      <Editor />
    </div>
  );
}

export default App;
