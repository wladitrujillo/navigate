import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContext } from '@react-navigation/native';
import { Input } from "react-native-elements";
import { validarIngreso } from "../services/servicios.login";
import { Button } from "react-native-elements";
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

                <View style={styles.logo}>

                </View>

                <View style={styles.form}>
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
                </View>
                <View style={styles.botones}>


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



            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "column"
    },
    logo: {
        flex: 3
    },
    form: {
        alignItems: "center",
        justifyContent: "center",
        flex: 2
    },
    botones: {
        flex: 3,        
        flexDirection: "column"

    }
});
