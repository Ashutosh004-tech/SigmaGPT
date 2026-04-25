import "./ChatWindow.css";
import Chat from "./Chat";
import { MyContext } from "./MyContext";
import { useContext, useState } from "react";
import { RingLoader } from "react-spinners";

function ChatWindow() {
  const {
    prompt,
    setPrompt,
    reply,
    setReply,
    currThreadId,
    preChat,
    setPreChat,
    setNewChat,
  } = useContext(MyContext);

  const [loader, setLoader] = useState(false);

  const getReply = async () => {
    if (!prompt.trim() || loader) return;

    const userMessage = prompt;
    setLoader(true);
    setNewChat(false);

    try {
      const response = await fetch("http://localhost:8080/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
          threadId: currThreadId,
        }),
      });

      if (!response.ok) {
        throw new Error("API failed");
      }

      const res = await response.json();
      console.log("API RESPONSE:", res);

      // ✅ SAFE reply handling
      const botReply =
        res.reply || res.model || res.response || "⚠️ No response from server";

      setPreChat((prev) => [
        ...prev,
        { role: "user", content: userMessage },
        { role: "model", content: botReply },
      ]);

      setReply(botReply);
      setPrompt("");
    } catch (err) {
      console.log(err);
    } finally {
      setLoader(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !loader) {
      getReply();
    }
  };

  return (
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

      <Chat />

      {/* Loader */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <RingLoader color="#fff" loading={loader} />
      </div>

      <div className="chatInputBox">
        <div className="chatInput">
          <input
            placeholder="Ask Anything"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={loader}
          />

          <div id="submit">
            <span onClick={!loader ? getReply : null}>
              <i className="fa-solid fa-arrow-up"></i>
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
  );
}

export default ChatWindow;