import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export class ListaCompras extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Información</Text>      
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
