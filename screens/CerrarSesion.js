import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { cerrarSesion } from "../services/servicios.login"


export class CerrarSesion extends Component {

  

  
    render() {
        return (
            <View style={styles.container}>
                <Text>Esta seguro que se quiere ir?</Text>
              
                <Button
                    title="Aceptar"
                    onPress={() => {
                        cerrarSesion();
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
