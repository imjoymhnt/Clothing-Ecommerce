import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA9DM5XutylePgGJUUewIYNCKO4IcRoI9o",
  authDomain: "crwn-db-3232f.firebaseapp.com",
  projectId: "crwn-db-3232f",
  storageBucket: "crwn-db-3232f.appspot.com",
  messagingSenderId: "800522203727",
  appId: "1:800522203727:web:7f81390c13a58a41d1f03a",
  measurementId: "G-LKD3BMCPV9",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const craetedAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        craetedAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
} else {
  firebase.app();
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google authentication utility part
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
