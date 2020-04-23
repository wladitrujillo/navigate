import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { Input } from "react-native-elements"
import { recuperarClave } from "../services/servicios.login"


export class CambioClave extends Component {

    constructor() {
        super();
        this.state = {
            email: ""
        }
    }

    toLogin = () => {
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Register</Text>
                <Input
                    placeholder="Email"
                    value={this.state.email}
                    onChangeText={(email) => { this.setState({ email: email }) }} />                
                <Button
                    title="Recuperar"
                    onPress={() => {
                        recuperarClave(this.state.email, this.toLogin);
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
