import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
export class FormularioProducto extends Component {

  constructor() {
    super();
    this.state = {
      id: "",
      name: "",
      price: ""
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>FORMULARIO DE PROUDCTO</Text>
        <Input
          placeholder="Id"
          value={this.state.id}
          onChangeText={(id) => { this.setState({ id: id }) }} />
        <Input
          placeholder="Nombre"
          value={this.state.name}
          onChangeText={(name) => { this.setState({ name: name }) }}
          secureTextEntry={true}
        />
        <Input
          placeholder="Precio"
          value={this.state.price}
          onChangeText={(price) => { this.setState({ price: price }) }}
          secureTextEntry={true}
        />
        <Button
          title="Registrar"
          onPress={() => {
            Alert.alert("Click");
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
