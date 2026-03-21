import "./App.css";
import Sidebar from "./Sidebar";
import ChatWindow from "./ChatWindow";
import MyContext from "./MyContext";

function App() {
  const provideValue = {};
  return (
    <>
      <div className="main">
        <MyContext.Provider value={provideValue}>
          <Sidebar></Sidebar>
          <ChatWindow></ChatWindow>
        </MyContext.Provider>
      </div>
    </>
  );
}

export default App;
