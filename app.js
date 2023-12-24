import Login from "./pages/login/login.js"
class App {
  activeScreen;
  container;
  nav;
  main;

  constructor(container) {
    this.container = container;
  }

  changeActiveScreen(screen) {
    // todo
    if(this.activeScreen != undefined){
      this.container.innerHTMl = "";
    }
    this.activeScreen = screen;
    this.activeScreen.initRender(this.container);
  }
}
const container = document.getElementById("app");
const app = new App(container);

// check file to load html code
if (location.href.substring(21) == "/index.html") {
  // todo
  const login = new Login();
  app.changeActiveScreen(login);
}
if (location.href.substring(21) == "/pages/home.html") {
  // todo
}

//export instant của app chứ ko export class vì App là duy nhất
export default app;

// Init firebase app
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
// import {getFirestore}    from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore-compat.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcQpKXcEz3AqWpbL4WcmNTRX0Ryu_wVuI",
  authDomain: "jsio3-sa.firebaseapp.com",
  databaseURL: "https://jsio3-sa-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "jsio3-sa",
  storageBucket: "jsio3-sa.appspot.com",
  messagingSenderId: "626178187082",
  appId: "1:626178187082:web:615658e042e9e1d85c2bb3",
  measurementId: "G-HHLRWW9B4C"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
// export const firestore = getFirestore(firebaseApp);



