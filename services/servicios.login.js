import { Alert } from "react-native";
import firebase from "firebase";

export const userRegister = (email, password, fnToLogin) => {

    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((obj) => {
            fnToLogin();
        })
        .catch((error) => {
            Alert.alert("Error!", error.message + "-" + error.code)
        })
}


export const recuperarClave = (email, fnToLogin) => {

    firebase.auth().sendPasswordResetEmail(email)
        .then((obj) => {
            Alert.alert("Ingrese a su correo para restaurar la clave!");
            fnToLogin();
        })
        .catch((error) => {
            Alert.alert("Error!", error.message + "-" + error.code)
        })
}

export const validarIngreso = (email, password) => {

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((obj) => {
            
        })
        .catch((error) => {
            Alert.alert("Error!", error.message + "-" + error.code)
        })
}