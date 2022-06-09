// import firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC-OuKMsP4cnqowAfC3tOVzmVqwArevAOw',
  authDomain: 'contactlist-thereactors.firebaseapp.com',
  projectId: 'contactlist-thereactors',
  storageBucket: 'contactlist-thereactors.appspot.com',
  messagingSenderId: '835460506398',
  appId: '1:835460506398:web:f84b1ca62376dd9ba61f0f',
  measurementId: 'G-RYBENEXT4K',
};

const app = initializeApp(firebaseConfig);

// const firebaseapp = firebase.initializeApp(firebaseConfig);
// const db = app.firestore();
const auth = getAuth(app);
// const storage = firebase.storage();

export { auth };
