import firebase from "firebase";
import "@firebase/firestore";
import "@firebase/storage";

export const cargarConfiguracion = () => {

    if (!global.isConfig) {

        // Your web app's Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyB6j8dzP1WH6Sn3g3gYVrVZbgkGwrTNlSM",
            authDomain: "reactnative-6475c.firebaseapp.com",
            databaseURL: "https://reactnative-6475c.firebaseio.com",
            projectId: "reactnative-6475c",
            storageBucket: "reactnative-6475c.appspot.com",
            messagingSenderId: "926451493270",
            appId: "1:926451493270:web:ea0ca306db0cb73d59d5b7",
            measurementId: "G-EQ27BHBBNH"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        global.firestoredb = firebase.firestore();
        global.storage = firebase.storage();
        global.isConfig = true;
        //firebase.analytics();

    }



}