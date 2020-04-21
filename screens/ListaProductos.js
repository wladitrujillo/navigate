import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export class ListaProductos extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>LISTA DE PRODUCTOS</Text>
        <Button
          title="Formulario Producto"
          onPress={() => { this.props.navigation.navigate("FormularioProductoScreen") }} />
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
