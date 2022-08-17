import firebase from "firebase";
require("@firebase/firestore");


const firebaseConfig = {
    apiKey: "AIzaSyCI3KGowKY62svPX8cNifsQ-5piILXbjzI",
    authDomain: "c71-hw.firebaseapp.com",
    projectId: "c71-hw",
    storageBucket: "c71-hw.appspot.com",
    messagingSenderId: "462329375634",
    appId: "1:462329375634:web:73ba63820624232930ef4b"
  };
  

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
