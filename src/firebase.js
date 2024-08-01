// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDMQdm0ajy8qWSbDQaIR79_TwqJ52UgxrU",
  authDomain: "webserver-17338.firebaseapp.com",
  projectId: "webserver-17338",
  storageBucket: "webserver-17338.appspot.com",
  messagingSenderId: "581777767329",
  appId: "1:581777767329:web:f730df70f5a0ea02a3a9e0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
