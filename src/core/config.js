import * as firebase from 'firebase';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCAsrxGfJ3bpR2A0RPbDPDmDrKs_h-KIPY",
    authDomain: "flex-78875.firebaseapp.com",
    databaseURL: "https://flex-78875.firebaseio.com",
    projectId: "flex-78875",
    storageBucket: "flex-78875.appspot.com",
    messagingSenderId: "1018037864183",
    appId: "1:1018037864183:web:83819233ded476a7a635f2",
    measurementId: "G-2TV894VHPV"
};

// Initialize Firebase
firebase.initializeApp(config);
const db = firebase.firestore();

export default config