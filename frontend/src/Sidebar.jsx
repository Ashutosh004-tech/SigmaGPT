import "./Sidebar.css";
function Sidebar() {
  return (
    <>
      <div className="sideBar">
        <button>
          <img
            src="src/assets/ChatGPT-Logo.png"
            alt="GPT logo"
            className="logo"
          />
          <i className="fa-regular fa-pen-to-square new-chat"></i>
        </button>
        {/* History */}
        <ul className="threads">
          <li>History 1</li>
          <li>History 1</li>
          <li>History 1</li>
          <li>History 1</li>
          <li>History 1</li>
        </ul>

        {/* Policy */}
        <div className="Sign">
          <p>Ashutosh-Tech</p>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
