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

export default firebase;
