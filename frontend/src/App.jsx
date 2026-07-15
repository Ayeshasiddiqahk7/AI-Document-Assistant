import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import ChatBox from "./components/ChatBox";
import Message from "./components/Message";
import SourceList from "./components/SourceList";

function App() {
  const [answer, setAnswer] = useState(
    "Loading AI model... Please wait."
  );

  return (
    <div className="app">
      <Navbar />

      <div className="container">
        <ChatBox setAnswer={setAnswer} />
        <Message answer={answer} />
        <SourceList />
      </div>
    </div>
  );
}

export default App;