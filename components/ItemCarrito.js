import React, { Component } from "react";
import { StyleSheet, Text, View, Button, TouchableHighlight } from "react-native";
import { Avatar } from "react-native-elements";
import { deleteItem } from "../services/servicios.car";


export default class ItemCarrito extends Component {

    render() {
        let { nav, prod } = this.props;
        let { id, name, price } = this.props.prod;

        return <View style={styles.row}>


            <View style={styles.image}>
                <Avatar title={name.substring(0, 1).toUpperCase()}></Avatar>
            </View>

            <View style={styles.description}>
                <Text> {id}  {name}</Text>
                <Text> {price}</Text>
            </View>

            <View style={styles.button}>
                <Button title="Delete" onPress={() => { deleteItem(global.user.email, id) }} />
            </View>


        </View>


    }



}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        flex: 1,
       // backgroundColor: "orange",
        marginBottom: 5,
        // paddingVertical: 10,
        //borderRadius: 10
        // alignItems: "stretch",
        //  justifyContent: "center",
    },
    image: {
        // backgroundColor: "blue",
        flex: 2,
        alignItems: "center"
    },
    description: {
        //backgroundColor: "green",
        flex: 4,
        justifyContent: "center"
    },
    button: {
        //backgroundColor: "gray",
        flex: 2,
        alignItems: "flex-end",
        justifyContent: "flex-end"
    }
});
