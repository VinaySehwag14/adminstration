import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "netflix-clone-a5585.firebaseapp.com",
  projectId: "netflix-clone-a5585",
  storageBucket: "netflix-clone-a5585.appspot.com",
  messagingSenderId: "531092651666",
  appId: "1:531092651666:web:495c4a310e0cf91bd2b04b",
  measurementId: "G-FF89MTJ9TE",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
