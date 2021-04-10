import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBO7t9bPzpm1dCLX8xeNLdMcM29Jn5s51Y",
    authDomain: "ezs-cloud.firebaseapp.com",
    projectId: "ezs-cloud",
    storageBucket: "ezs-cloud.appspot.com",
    messagingSenderId: "327738980740",
    appId: "1:327738980740:web:b551b92624a8936903c5d1",
    measurementId: "G-VC1VFP0PY4"
};
firebase.initializeApp(firebaseConfig);
export default firebase;