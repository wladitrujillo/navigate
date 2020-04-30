import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Avatar, Button } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';
import { addItem } from "../services/servicios.car"
export class ProductDetail extends Component {

    render() {

        let { prod } = this.props.route.params;

        return <View style={styles.row}>
            <View style={styles.image}>
                <Avatar
                    size={"xlarge"}
                    title={prod.name.substring(0, 2).toUpperCase()}
                    source={{ uri: prod.url }}
                ></Avatar>
            </View>
            <View style={styles.text}>
                <Text style={{ fontSize: 40, fontWeight: "bold" }}>{prod.name}</Text>
                <Text style={{ fontSize: 20 }}>{prod.price}</Text>
            </View>
            <View style={styles.buttons}>
                <Button
                    icon={
                        <Icon
                            name="shopping-cart"
                            size={12}
                            color="white"
                        />
                    }
                    title="Add car"
                    onPress={() => {
                        console.log("Add car");
                        addItem(global.user.email, {
                            count: 1,
                            name: prod.name,
                            price: prod.price,
                            id: prod.id
                        }, 1, this.onSuccess)
                    }}
                />
            </View>
        </View>


    }

    onSuccess = () => { this.props.navigation.goBack() }

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
