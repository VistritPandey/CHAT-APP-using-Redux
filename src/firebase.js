import firebase from 'firebase';

const firebaseConfig = {    
    // use your own config file
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
  
