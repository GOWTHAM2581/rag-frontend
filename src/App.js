import { useState } from "react";
import { auth } from "./firebase";
import Login from "./pages/Login";
import UploadPDF from "./pages/UploadPDF";
import Chat from "./pages/Chat";

function App() {
  const [step, setStep] = useState("login");

  auth.onAuthStateChanged((user) => {
    if (user) setStep("upload");
    else setStep("login");
  });

  return (
    <>
      {step === "login" && <Login onLogin={() => setStep("upload")} />}
      {step === "upload" && <UploadPDF onUploaded={() => setStep("chat")} />}
      {step === "chat" && <Chat />}
    </>
  );
}

export default App;
