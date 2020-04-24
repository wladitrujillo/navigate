import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Alert, FlatList } from "react-native";

export default class ItemProducto extends Component {

    render() {

        return <View>
            <Text>{this.props.prod.id} {this.props.prod.name}</Text>
            <Text>{this.props.prod.price}</Text>
        </View>


    }
}