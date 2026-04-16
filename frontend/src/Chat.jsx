import "./Chat.css";
import { MyContext } from "./MyContext";
import { useContext } from "react";

function Chat() {
  const { newChat, setNewChat, preChat } = useContext(MyContext);
  return (
    <>
      {newChat && <h1>How Can i help you ?</h1>}
      <div className="chats">
        {preChat?.map((chat, idx) => {
          <div className={chat.role === "user" ? "userchats" : "modelchats"} key={idx}>
            {chat.role === "user" ? (
              <p className="user">{chat.content}</p>
            ) : (
              <p className="model">{chat.content}</p>
            )}
          </div>
        })}
      </div>
    </>
  );
}

export default Chat;
