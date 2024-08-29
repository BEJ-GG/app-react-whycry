import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCIerYCcq6uK_zVYFW3QGK1erGdC0DgoSM",
  authDomain: "whycry-897e9.firebaseapp.com",
  projectId: "whycry-897e9",
  storageBucket: "whycry-897e9.appspot.com",
  messagingSenderId: "216105320639",
  appId: "1:216105320639:web:b1f051d72fa0a5928c860a",
  measurementId: "G-XY84G0F47L"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();