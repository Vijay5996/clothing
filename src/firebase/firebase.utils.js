import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCD2vur0nwJPZKH7aBTej4yA42CB6XOwEE",
    authDomain: "clothing-db-90dff.firebaseapp.com",
    projectId: "clothing-db-90dff",
    storageBucket: "clothing-db-90dff.appspot.com",
    messagingSenderId: "23113397156",
    appId: "1:23113397156:web:4dd1c4776f6aaaa67d8731",
    measurementId: "G-73TK1P2TRS"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
