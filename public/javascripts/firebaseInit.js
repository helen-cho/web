  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyATMOCppugywcqvwtrLhnARQA12pDJg6WE",
    authDomain: "fir-8861c.firebaseapp.com",
    projectId: "fir-8861c",
    storageBucket: "fir-8861c.appspot.com",
    messagingSenderId: "916717954560",
    appId: "1:916717954560:web:cd3bb1462851888eac9ae5",
    measurementId: "G-1NJYB01J2C"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app)