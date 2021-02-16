import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyA9WTLwcP-OWTpah8fwIsTqiDfD-JBrwe0",
    authDomain: "linkedin-clone-36a89.firebaseapp.com",
    projectId: "linkedin-clone-36a89",
    storageBucket: "linkedin-clone-36a89.appspot.com",
    messagingSenderId: "177160194033",
    appId: "1:177160194033:web:a04fcf5fe0213e17546650"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};