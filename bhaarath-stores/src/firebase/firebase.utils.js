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

export const userProfileDocument = async(userAuth, additionalData) =>{
    // if userAuth is false or doesnt exist it returns from the function
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    console.log(snapShot);

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
             displayName,
             email,
             createdAt,
             ...additionalData   
            })
        } catch(error) {
            console.log(error.message, 'error message while creating user');
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//For gooogle Authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt:'select_account' });
//assign
export const signInWithGoogle = () => auth.signInWithPopup(provider);;

export default firebase;

