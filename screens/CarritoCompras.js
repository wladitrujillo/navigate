import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { registrarListener } from "../services/servicios.car";
import ItemCarrito from "../components/ItemCarrito";

export class CarritoCompras extends Component {

    constructor() {
        super();
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        registrarListener(global.user.email, this.pintarLista);
    }

    pintarLista = (arregloProducts) => {

        this.setState({
            products: arregloProducts
        });
    }

    render() {

        return <View style={styles.row}>
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
