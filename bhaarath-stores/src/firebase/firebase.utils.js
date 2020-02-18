import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDuv4vVgv4qikwyMtenz2LcCPII4d1An-c",
    authDomain: "bhaarath-stores.firebaseapp.com",
    databaseURL: "https://bhaarath-stores.firebaseio.com",
    projectId: "bhaarath-stores",
    storageBucket: "bhaarath-stores.appspot.com",
    messagingSenderId: "946880798567",
    appId: "1:946880798567:web:93dbe60662688ad93799c2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//For gooogle Authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt:'select_account' });
//assign
export const signInWithGoogle = () => auth.signInWithPopup(provider);;

export default firebase;

