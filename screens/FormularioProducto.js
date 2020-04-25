import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { createProduct } from "../services/servicios.product";
import { Input } from "react-native-elements";
export class FormularioProducto extends Component {

  constructor(props) {
    super(props);
    if (this.props.route.params) {
      let product = this.props.route.params.product;
      this.state = {
        id: product.id,
        name: product.name,
        price: product.price
      }
    } else {
      this.state = {
        id: "",
        name: "",
        price: ""
      }
    }


  }

  limpiar = () => {
    this.setState({
      id: "",
      name: "",
      price: ""
    });
  }

  onSuccess = () => {
    this.limpiar();
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
        />
        <Input
          placeholder="Precio"
          value={this.state.price}
          onChangeText={(price) => { this.setState({ price: price }) }}
        />
        <Button
          title="Guardar"
          onPress={() => {
            createProduct({
              id: this.state.id,
              name: this.state.name,
              price: parseFloat(this.state.price)
            }, this.onSuccess);
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
