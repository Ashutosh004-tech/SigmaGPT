import "./ChatWindow.css";
import Chat from "./Chat";
import { MyContext } from "./MyContext";
import { useContext, useState, useEffect } from "react";
import { RingLoader } from "react-spinners";
function ChatWindow() {
  const { prompt, setPrompt, reply, setReply, currThreadId, preChat, setPreChat } =
    useContext(MyContext);
  const [loder, setLoder] = useState(false);

  // Response from Model
  const getReply = async () => {
    setLoder(true);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: prompt,
        threadId: currThreadId,
      }),
    };
    try {
      const response = await fetch("http://localhost:8080/api/chat", options);
      const res = await response.json();
      console.log(res);
      setReply(res.reply);
    } catch (err) {
      console.log(err);
    }
    setLoder(false);
  };

// Append new chat
useEffect(()=>{
  if(prompt && reply){
    setPreChat(preChat=>{
      [...preChat,{
        role:"user",
        content:prompt
      },{
        role:"model",
        content:reply
      }]
    })
  }
  setPrompt("");
}, [reply])

  return (
    <>
      <div className="chatWindow">
        <div className="navbar">
          <span>
            SigmaGpt <i className="fa-solid fa-angle-down"></i>
          </span>
          <div className="userIconDiv">
            <span className="userIcon">
              <i className="fa-regular fa-user"></i>
            </span>
          </div>
        </div>

        <Chat></Chat>


        <RingLoader color="#fff" loading={loder}></RingLoader>


        <div className="chatInputBox">
          <div className="chatInput">
            <input
              placeholder="Ask Anyhting"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            ></input>
            <div id="submit">
              <span>
                <i className="fa-solid fa-arrow-up" onClick={getReply}></i>
              </span>
            </div>
          </div>

          <div className="info">
            <span>
              SigmaGPT can make mistakes. Check important info. See Cookie
              Preferences.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatWindow;
