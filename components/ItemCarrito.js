import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { Avatar, Button } from "react-native-elements";
import { deleteItem, addItem } from "../services/servicios.car";
import Icon from 'react-native-vector-icons/FontAwesome';



export default class ItemCarrito extends Component {

    render() {
        let { nav, prod } = this.props;
        let { count, id, name, price, subtotal, url } = this.props.prod;

        count == 0 ? deleteItem(global.user.email, id) : "";

        return <View style={styles.row}>


            <View style={styles.image}>
                <Avatar
                    title={name.substring(0, 1).toUpperCase()}                   
                ></Avatar>  
            </View>

            <View style={styles.description}>
                <Text> {name}</Text>
                <Text> {price}</Text>
                <Text>Cantidad: {count}</Text>
                <Text>Subtotal: {subtotal}</Text>
            </View>

            <View style={styles.button}>
                <Button icon={
                    <Icon
                        name="plus"
                        size={15}
                        color="white"
                    />
                }
                    onPress={() => { addItem(global.user.email, prod, 1, () => { }) }}
                />
                <Text>{count}</Text>
                <Button icon={
                    <Icon
                        name="minus"
                        size={15}
                        color="white"
                    />
                }
                    onPress={() => {
                        console.log("On press delete", count);
                        addItem(global.user.email, prod, -1, () => { })
                        /*count > 1 ?
                            addItem(global.user.email, prod, -1, () => { }) :
                            deleteItem(global.user.email, id)*/
                    }}
                />
                <Button title="Delete" onPress={() => { deleteItem(global.user.email, id) }} />
            </View>
        </View >
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
