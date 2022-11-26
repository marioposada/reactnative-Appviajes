// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCkQ_dYRboYEzELAl3QcDMEGzn_3OWaJg",
  authDomain: "suti-c80ae.firebaseapp.com",
  projectId: "suti-c80ae",
  storageBucket: "suti-c80ae.appspot.com",
  messagingSenderId: "183921382705",
  appId: "1:183921382705:web:b00355be6419bfb46d0c10"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}
const auth = firebase.auth();

export { auth };