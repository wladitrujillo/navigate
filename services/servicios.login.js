import { Alert } from "react-native";
import firebase from "firebase";

export const userRegister = async (email, password, fnToLogin) => {

    try {
        let obj = firebase
            .auth()
            .createUserWithEmailAndPassword(email, password);
        console.log("Mensaje", obj.user);
        fnToLogin();

    } catch (error) {
        console.log("User register error", error);
        Alert.alert("Error!", error.message + "-" + error.code)
    }
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

export const validarIngreso = async (email, password) => {

    try {
        let obj = firebase.auth().signInWithEmailAndPassword(email, password);
        console.log("Login", obj)
    } catch (error) {
        Alert.alert("Error!", error.message + "-" + error.code)
    }


}

export const cerrarSesion = async () => {

    try {
        await firebase.auth().signOut();
    } catch (error) {
        Alert.alert("Error!", error.message + "-" + error.code)
    }


}