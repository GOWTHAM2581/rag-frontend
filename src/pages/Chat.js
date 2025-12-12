import React, { useState } from "react";
import axios from "axios";
import { auth } from "../firebase";

const BACKEND_URL = "https://rag-backend-oufo.onrender.com";

function Chat() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const ask = async () => {
    const user = auth.currentUser;

    const res = await axios.post(`${BACKEND_URL}/ask`, {
      uid: user.uid,
      question
    });

    setAnswer(res.data.answer);
  };

  return (
    <div>
      <h1>Chat with your PDF</h1>
      <textarea onChange={e => setQuestion(e.target.value)} />
      <button onClick={ask}>Ask</button>
      <p>{answer}</p>
    </div>
  );
}

export default Chat;

