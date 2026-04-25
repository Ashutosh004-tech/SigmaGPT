import "./Chat.css";
import { MyContext } from "./MyContext";
import { useContext, useEffect, useRef } from "react";

function Chat() {
  const { newChat, preChat } = useContext(MyContext);

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [preChat]);

  return (
    <>
      {newChat && <h1>How Can I help you?</h1>}

      <div className="chats">
        {preChat?.map((chat, idx) => (
          <div
            className={chat.role === "user" ? "userchats" : "modelchats"}
            key={`${chat.role}-${idx}`}
          >
            {chat.role === "user" ? (
              <p className="user">{chat.content}</p>
            ) : (
              <p className="model">{chat.content}</p>
            )}
          </div>
        ))}
        <div ref={chatEndRef}></div>
      </div>
    </>
  );
}

export default Chat;