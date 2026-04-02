import "./App.css";
import Sidebar from "./Sidebar";
import ChatWindow from "./ChatWindow";
import {MyContext} from "./MyContext";
import { useState } from "react";
import {v1 as uuidv1} from "uuid";


function App() {
  const [prompt, setPrompt] = useState("");
  const [reply, setreply]= useState(null);
  const [currThreadId, setThreadId] = useState(uuidv1());
  const provideValue = {
    prompt, setPrompt,
    reply, setreply, 
    currThreadId, setThreadId
  };
  return (
    <>
      <div className="app">
        <MyContext.Provider value={provideValue}>
          <Sidebar></Sidebar>
          <ChatWindow></ChatWindow>
        </MyContext.Provider>
      </div>
    </>
  );
}

export default App;
