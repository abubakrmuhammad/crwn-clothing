import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyASoNchIsUhYUfL_oj4CWgrRVB2YmiGdGA',
  authDomain: 'crwn-clothing-cb773.firebaseapp.com',
  databaseURL: 'https://crwn-clothing-cb773.firebaseio.com',
  projectId: 'crwn-clothing-cb773',
  storageBucket: '',
  messagingSenderId: '171100911498',
  appId: '1:171100911498:web:b3018b859c15225701ba73'
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.error('Error creating User', error);
    }
  }

  return userRef;
};

export default firebase;
