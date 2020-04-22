import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { Input } from "react-native-elements"
import firebase from "firebase";


export class Registrarse extends Component {

    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Register</Text>
                <Input
                    placeholder="Email"
                    value={this.state.email}
                    onChangeText={(email) => { this.setState({ email: email }) }} />
                <Input
                    placeholder="Password"
                    value={this.state.password}
                    onChangeText={(password) => { this.setState({ password: password }) }}
                    secureTextEntry={true}
                />
                <Button
                    title="Registrar"
                    onPress={() => {
                        firebase
                            .auth()
                            .createUserWithEmailAndPassword(this.state.email, this.state.password)
                            .then((obj) => { Alert.alert("Info", "User registered") })
                            .catch((error) => { Alert.alert("Error!", error.message) })
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
