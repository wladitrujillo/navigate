import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { registrarListener, vaciarCarrito } from "../services/servicios.car";
import ItemCarrito from "../components/ItemCarrito";


export class CarritoCompras extends Component {

    constructor() {
        super();
        this.state = {
            products: [],
            total: 0
        }
    }

    componentDidMount() {
        registrarListener(global.user.email, this.pintarLista);
    }

    pintarLista = (productList) => {

        let total = productList.reduce((suma, item) => suma + item.subtotal, 0);
        console.log("Suma", total);
        this.setState({
            products: productList,
            total: total
        });
    }

    render() {

        return <View style={styles.row}>

            <Text>{this.state.total}</Text>
            <Button
                title="Vaciar Carrito"
                onPress={() => {
                    vaciarCarrito(global.user.email, this.state.products);
                }} />
            <FlatList
                data={this.state.products}
                renderItem={({ item }) => <ItemCarrito prod={item} nav={this.props.navigation} />}
                keyExtractor={product => product.id + ""} >
            </FlatList>


        </View>


    }

}

const styles = StyleSheet.create({
    row: {
        flexDirection: "column",
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "stretch",
        justifyContent: "flex-start",
    },
    image: {
        //backgroundColor: "purple",
        flex: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        //backgroundColor: "yellow",
        flex: 3,
        padding: 20
    },
    buttons: {
        //backgroundColor: "green",
        flex: 2,
        justifyContent: "flex-end",
        paddingBottom: 20
    }
});
