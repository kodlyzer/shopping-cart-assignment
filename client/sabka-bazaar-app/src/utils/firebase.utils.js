import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

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

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
  const userDocRef = doc(db, 'users', userAuth.uid); // db, collection, identifier
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    console.log('olaaa')
      console.log({
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      })
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signoutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => callback && onAuthStateChanged(auth, callback);

export default firebaseApp;