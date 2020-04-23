import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContext } from '@react-navigation/native';
import { Input } from "react-native-elements"
import { validarIngreso } from "../services/servicios.login"
export class Login extends Component {
    static contextType = NavigationContext;


    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        }
    }

    toHome = () => {
        navigation.navigate("RecuperarClave")
    }

    

    render() {
        const navigation = this.context;
        return (
            <View style={styles.container}>
                
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
                    title="Ingresar"
                    onPress={() => { 
                        validarIngreso(this.state.email, this.state.password, this.toHome);
                     }}
                />
                <Button
                    title="Registrar"
                    onPress={() => { navigation.navigate("Registrarse") }}
                />
                <Button
                    title="Recuperar Clave"
                    onPress={() => { navigation.navigate("RecuperarClave") }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {      
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        flex: 3
    },
    form: {
        flex: 4,
        //flexDirection: 'column'
    },
    botones: {
        flex: 2,
        justifyContent: 'center',
    }
});
