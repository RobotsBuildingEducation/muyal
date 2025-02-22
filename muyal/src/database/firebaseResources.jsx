// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import { getVertexAI, getGenerativeModel } from "@firebase/vertexai";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  // apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  apiKey: "AIzaSyA5_bMPHuppWkAj725XQf9PhZDxdIkpggQ",
  authDomain: "muyal-75523.firebaseapp.com",
  projectId: "muyal-75523",
  storageBucket: "muyal-75523.firebasestorage.app",
  messagingSenderId: "247994289635",
  appId: "1:247994289635:web:79024e13e93c39c5c964d6",
  measurementId: "G-TWT900Q25Q",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

if (window.location.hostname === "localhost") {
  self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
}

export const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider("6LeJWM4qAAAAAAVAEp98wuaJJ-YQ4tgwko9upXPZ"),
  isTokenAutoRefreshEnabled: true,
});
const database = getFirestore(app);
const analytics = getAnalytics(app);
const vertexAI = getVertexAI(app);
const model = getGenerativeModel(vertexAI, {
  // model: "gemini-1.5-flash",
  model: "gemini-2.0-flash-001",
});

const simplemodel = getGenerativeModel(vertexAI, {
  // model: "gemini-1.5-flash",
  model: "gemini-2.0-flash-001",
});

export { database, analytics, model, simplemodel };
