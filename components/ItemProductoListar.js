import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-elements";



export default class ItemProductoListar extends Component {

    render() {

        let { id, name, price } = this.props.prod;

        return <View style={styles.row}>

            <View style={styles.image}>
                <Avatar title={name.substring(0, 1).toUpperCase()}></Avatar>
            </View>
            <View style={styles.description}>
                <Text style={styles.descriptionText}> {id} - {name}</Text>
            </View>
            <View style={styles.price}>
                <Text style={styles.priceText}> {price}</Text>
            </View>
        </View>
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: "orange",
        marginBottom: 5,
        paddingVertical: 10,
        borderRadius: 10
        // alignItems: "stretch",
        //  justifyContent: "center",
    },
    image: {
        // backgroundColor: "blue",
        flex: 2,
        alignItems: "center"
    },
    description: {
        // backgroundColor: "green",
        flex: 5,
        justifyContent: "center"
    },
    price: {
        //backgroundColor: "gray",
        flex: 2,
        alignItems: "flex-end",
        justifyContent: "flex-end"
    },
    priceText: {
        fontSize: 20,
        fontWeight: "bold",
        paddingRight: 10
    },
    descriptionText: {
        fontSize: 20
    }
});
