import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAyXP6tBnwNbOwVQ9j34ckx2YZDH42Bv38",
  authDomain: "chatmern.firebaseapp.com",
  databaseURL: "https://chatmern.firebaseio.com",
  projectId: "chatmern",
  storageBucket: "chatmern.appspot.com",
  messagingSenderId: "900122526501",
  appId: "1:900122526501:web:1440ac396f5ddd444a10cc"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth,provider };
export default db;