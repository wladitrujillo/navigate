import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Alert, FlatList } from "react-native";
import ActionButton from 'react-native-action-button';
import ItemProducto from './ItemProducto';
import { registrarListener } from "../services/servicios.product";
export class ListaProductos extends Component {

  constructor() {
    super();


    this.state = {
      products: []
    }


  }

  componentDidMount() {
    registrarListener(this.pintarLista);
  }

  pintarLista = (arregloProducts) => {
    this.setState({
      products: arregloProducts
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>LISTA DE PRODUCTOS</Text>

        <FlatList
          data={this.state.products}
          renderItem={({ item }) => <ItemProducto prod={item} />}
          keyExtractor={product => product.id + ""} >
        </FlatList>

        <ActionButton
          buttonColor="rgba(231,76,60,1)"
          onPress={() => { this.props.navigation.navigate("FormularioProductoScreen") }}
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
