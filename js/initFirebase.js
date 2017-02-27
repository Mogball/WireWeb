import firebase from 'firebase';

// Initialize Firebase
let config = {
    apiKey: "AIzaSyAnfNn3BZPU_aQcWF76Zc5TGj1bmVcpNCk",
    authDomain: "vire-b186c.firebaseapp.com",
    databaseURL: "https://vire-b186c.firebaseio.com",
    storageBucket: "vire-b186c.appspot.com",
    messagingSenderId: "260157066657"
};
firebase.initializeApp(config);
firebase.database();