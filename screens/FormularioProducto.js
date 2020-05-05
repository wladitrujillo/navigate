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

  recibirUrl = (imageUrl) => {
    console.log("On Formulario Producto recibir url", imageUrl)
    this.setState({
      url: imageUrl
    });
    this.props.navigation.navigate("FormularioProductoScreen");
  }

  onSuccess = () => {
    this.limpiar();
  }

  render() {
    let { id, url, name, price } = this.state;
    return (
      <View style={styles.container}>

        <Text>FORMULARIO DE PROUDCTO</Text>

        {
          this.state.url ?
            <Avatar
              title={name.substring(0, 2).toUpperCase()}
              source={url ? { uri: url } : null}
              size={200}></Avatar> :
            <Avatar
              icon={{ name: 'user', type: 'font-awesome' }} size="xlarge"></Avatar>

        }

        <Button
          title="Edit Image"
          onPress={() => { this.props.navigation.navigate("CargarImagenScreen", { fnUrl: this.recibirUrl }) }}
        />
        <Input
          placeholder="Id"
          value={this.state.id}
          onChangeText={(id) => { this.setState({ id: id }) }}
          disabled={!this.state.isNew}
        />
        <Input
          placeholder="Nombre"
          value={name}
          onChangeText={(name) => { this.setState({ name: name }) }}
        />
        <Input
          placeholder="Precio"
          value={price}
          onChangeText={(price) => { this.setState({ price: price }) }}
        />
        <Button
          title="Guardar"
          onPress={() => {

            if (this.state.isNew) {

              createProduct({
                id: id,
                name: name,
                price: parseFloat(price)
              }, this.onSuccess);

            } else {
              updateProduct({
                id: id,
                name: name,
                price: parseFloat(price)
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
