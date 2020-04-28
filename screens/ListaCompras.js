import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { registrarListener } from "../services/servicios.product";
import ItemProductoListar from "../components/ItemProductoListar";

export class ListaCompras extends Component {

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
        <Text>LISTA DE COMPRAS</Text>
        <FlatList
          data={this.state.products}
          renderItem={({ item }) => <ItemProductoListar prod={item} nav={this.props.navigation}></ItemProductoListar>}
          keyExtractor={product => product.id + ""} >
        </FlatList>
        <Button
          title="Detalle Compra"
          onPress={() => { this.props.navigation.navigate("DetalleCompraScreen") }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',//eje principal es el vertical    
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",//aplica al eje transversal (en este caso horizontal)
    justifyContent: "center",//aplica al eje principal (en este caso vertical)
  },
});
