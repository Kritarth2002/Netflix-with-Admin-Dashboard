// import firebase from "firebase/app"
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBY61PfbSMIiczKos9ER0L-EV3y9PP3geM",

  authDomain: "netflix-d7695.firebaseapp.com",

  projectId: "netflix-d7695",

  storageBucket: "netflix-d7695.appspot.com",

  messagingSenderId: "1076829613691",

  appId: "1:1076829613691:web:3d6be9ba0c653c63abbcde",

  measurementId: "G-MM4CW7GTNZ",
};
const app = initializeApp(firebaseConfig);
// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);
export default storage;
