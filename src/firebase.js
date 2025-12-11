import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDdF8af_bFY5YErt7cA65Gf13mrlvWp0CY",
  authDomain: "rag-app-44ef7.firebaseapp.com",
  projectId: "rag-app-44ef7",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
