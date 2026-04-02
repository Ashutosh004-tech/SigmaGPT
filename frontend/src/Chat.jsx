import "./Chat.css";
import { MyContext } from "./MyContext";
import { useContext } from "react";

function Chat() {
const {newChat, setNewChat} = useContext(MyContext);
  return (
    <>
    {newChat && <h1>How Can i help you ?</h1>}

    <div className="chats">
      <div className="userchats"></div>
      <div className="modelchats"></div>
    </div>

    </>
  );
}

export default Chat;
