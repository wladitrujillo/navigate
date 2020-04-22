import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContext } from '@react-navigation/native';

export class Login extends Component {
    static contextType = NavigationContext;

    render() {
        const navigation = this.context;
        return (
            <View style={styles.container}>
                <Text>Información</Text>
                <Button
                    title="Ingresar"
                    onPress={() => { this.props.fn_cambiarEstado() }}
                />
                <Button
                    title="Registrar"
                    onPress={() => { navigation.navigate("Registrarse") }}
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
