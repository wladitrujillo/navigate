import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { createProduct, updateProduct } from "../services/servicios.product";
import { Input, Avatar } from "react-native-elements";
export class FormularioProducto extends Component {

  constructor(props) {
    super(props);
    if (this.props.route.params) {
      let product = this.props.route.params.product;
      this.state = {
        id: product.id,
        name: product.name,
        price: product.price + "",
        isNew: false,
        url: product.url
      }
    } else {
      this.state = {
        id: "",
        name: "",
        price: "",
        isNew: true
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

        {
          this.state.isNew ?
            <Avatar
              icon={{ name: 'user', type: 'font-awesome' }} size="xlarge"></Avatar> :
            <Avatar
              title={this.state.name.substring(0, 2).toUpperCase()}
              source={this.state.url ? { uri: this.state.url } : null}
              size={200}></Avatar>
        }

        <Input
          placeholder="Id"
          value={this.state.id}
          onChangeText={(id) => { this.setState({ id: id }) }}
          disabled={!this.state.isNew}
        />
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

            if (this.state.isNew) {

              createProduct({
                id: this.state.id,
                name: this.state.name,
                price: parseFloat(this.state.price)
              }, this.onSuccess);

            } else {
              updateProduct({
                id: this.state.id,
                name: this.state.name,
                price: parseFloat(this.state.price)
              }, this.onSuccess);
            }



          }}
        />
      </View >
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
