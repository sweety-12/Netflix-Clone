
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCU1d0poJhMwQuM-cPMaF0IwW9bmOH_uDA",
  authDomain: "moviemate-d3df3.firebaseapp.com",
  projectId: "moviemate-d3df3",
  storageBucket: "moviemate-d3df3.appspot.com",
  messagingSenderId: "406919193419",
  appId: "1:406919193419:web:b3964721801b686b02fece",
  measurementId: "G-0QVB2HPB61"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);