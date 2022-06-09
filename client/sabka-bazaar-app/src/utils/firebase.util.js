import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBPt3fUKv1CtQmiJ1l3cNHjlpRSq2EyXlQ',
  authDomain: 'sabka-bazaar-d4b57.firebaseapp.com',
  projectId: 'sabka-bazaar-d4b57',
  storageBucket: 'sabka-bazaar-d4b57.appspot.com',
  messagingSenderId: '411450303000',
  appId: '1:411450303000:web:1fb7a4754a1ef565ae596d',
  measurementId: 'G-SR8EQ7LK0T',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid) // db, collection, identifier 

  console.log(userDocRef);
} 