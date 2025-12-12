import React, { useState } from "react";
import { supabase } from "../supabase";
import axios from "axios";
import { auth } from "../firebase";

const BACKEND_URL = "https://rag-backend-oufo.onrender.com"; 

function UploadPDF({ onUploaded }) {
  const [file, setFile] = useState(null);

  const upload = async () => {
    const user = auth.currentUser;
    const filePath = `users/${user.uid}/${file.name}`;

    let { error } = await supabase.storage
      .from("pdfs")
      .upload(filePath, file, { upsert: true });

    if (error) return alert("Upload error");

    const { data } = supabase.storage
      .from("pdfs")
      .getPublicUrl(filePath);

    const pdfUrl = data.publicUrl;

    await axios.post(`${BACKEND_URL}/process_pdf`, {
      uid: user.uid,
      url: pdfUrl
    });

    onUploaded();
  };

  return (
    <div>
      <h1>Upload PDF</h1>
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button onClick={upload}>Upload</button>
    </div>
  );
}

export default UploadPDF;

