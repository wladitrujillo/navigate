import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import ActionButton from 'react-native-action-button';

export class ListaProductos extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>LISTA DE PRODUCTOS</Text>
        <Button
          title="Formulario Producto"
          onPress={() => { this.props.navigation.navigate("FormularioProductoScreen") }} />
        <ActionButton
          buttonColor="rgba(231,76,60,1)"
          onPress={() => { Alert.alert("Click") }}
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
