import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import ChatBox from "./components/ChatBox";
import Message from "./components/Message";
import SourceList from "./components/SourceList";

function App() {
  const [answer, setAnswer] = useState("Loading AI model... Please wait.");
  const [source, setSource] = useState("");
  const [page, setPage] = useState("");

  return (
    <div className="app">
      <Navbar />

      <div className="container">
        <ChatBox
          setAnswer={setAnswer}
          setSource={setSource}
          setPage={setPage}
        />

        <Message
          answer={answer}
          source={source}
          page={page}
        />

        <SourceList />
      </div>
    </div>
  );
}

export default App;