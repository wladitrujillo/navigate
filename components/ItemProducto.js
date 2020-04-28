import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Alert, FlatList, TouchableHighlight } from "react-native";
import { deleteProduct } from "../services/servicios.product";


export default class ItemProducto extends Component {

    render() {
        let { nav, prod } = this.props;
        let { id, name, price } = this.props.prod;

        return <View style={styles.container}>
            <TouchableHighlight onPress={() => {
                nav.navigate('FormularioProductoScreen', { product: prod });
            }}>

                <View>
                    <Text> ID: {id} Nombre: {name}</Text>
                    <Text> Precio:{price}</Text>
                </View>

            </TouchableHighlight>

            <Button title="Delete" onPress={() => { deleteProduct(id, this.onSuccess) }} />
        </View>


    }

    onSuccess = () => { }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
