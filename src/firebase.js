import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAx5_73RWK1G_bcItj3_FnmK5bkAXhJZtI",
    authDomain: "vistrit-chat.firebaseapp.com",
    databaseURL: "https://vistrit-chat.firebaseio.com",
    projectId: "vistrit-chat",
    storageBucket: "vistrit-chat.appspot.com",
    messagingSenderId: "978901820727",
    appId: "1:978901820727:web:92b8f3d58c02fd0e00e6b2",
    measurementId: "G-EG66KK09DW"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
  
