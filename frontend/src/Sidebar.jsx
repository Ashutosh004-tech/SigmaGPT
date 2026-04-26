import "./Sidebar.css";
import { useEffect, useContext } from "react";
import { MyContext } from "./MyContext";
import axios from "axios";

function Sidebar() {
  const { title, setTitle } = useContext(MyContext);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/thread") // ✅ correct port
      .then((res) => {
        setTitle(res.data);    // ✅ correct
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="sideBar">
      <button>
        <img
          src="src/assets/ChatGPT-Logo.png"
          alt="GPT logo"
          className="logo"
        />
        <i className="fa-regular fa-pen-to-square new-chat"></i>
      </button>

      <ul className="threads">
        {Array.isArray(title) &&
          title.map((item, index) => (
            <li  className="threadList" key={index}>{item.title}</li> // ✅ matches schema
          ))}
      </ul>

      <div className="Sign">
        <p>Ashutosh-Tech</p>
      </div>
    </div>
  );
}

export default Sidebar;