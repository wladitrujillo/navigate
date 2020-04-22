import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export class Registrarse extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Información</Text>
                <Button
                    title="Ingresar"
                    onPress={() => { this.props.fn_cambiarEstado() }}
                />
                <Button
                    title="Registrar"
                    onPress={() => { }}
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
