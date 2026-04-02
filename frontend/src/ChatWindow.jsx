import "./ChatWindow.css";
import Chat from "./Chat";
function ChatWindow() {
  return (
    <>
      <div className="chatWindow">
        <div className="navbar">
          <span>
            SigmaGpt <i className="fa-solid fa-angle-down"></i>
          </span>
          <div className="userIconDiv">
            <span className="userIcon">
              <i class="fa-regular fa-user"></i>
            </span>
          </div>
        </div>
        <Chat></Chat>

        <div className="chatInputBox">
          <p>How can i help you ?</p>
          <div className="chatInput">
            <input placeholder="Ask Anyhting"></input>
            <div id="submit">
              <span>
                <i class="fa-solid fa-arrow-up"></i>
              </span>
            </div>
          </div>
        </div>

        <div className="info">
          <p>
            SigmaGPT can make mistakes. Check important info. See Cookie
            Preferences.
          </p>
        </div>
      </div>
    </>
  );
}

export default ChatWindow;
