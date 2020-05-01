import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { Avatar } from "react-native-elements";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

export class CargarImagen extends Component {


    constructor() {
        super();
        this.state = {
            imageUrl: ''
        }
    }

    abrirImagen = async () => {
        let permissionResult;
        try {
            permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
        } catch (err) {
            Alert.alert("error");
        }
        if (permissionResult.granted === false) {
            Alert.alert("Permission to access camera roll is required!");
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        if (!pickerResult.cancelled) {
            console.log("URI:", pickerResult.uri);
            this.setState({ imageUrl: pickerResult.uri });
        }
    };

    uriToBlob = (dataUrl, callback) => {
        let req = new XMLHttpRequest();
        req.open("GET", dataUrl, true);
        req.responseType = "blob";
        req.onload = () => {
            callback(req.response);
        };
        req.onerror = (error) => {
            console.log("error", error);
        };
        req.send(null);
    };

    saveStorage=()=>{
       
        this.uriToBlob(this.state.imageUrl,(blob)=>{
            
        })
    }

    render() {
        return <View>
            <Text>Cargar Imagen Screen</Text>
            <Avatar
                onPress={() => { this.abrirImagen() }}
                title="image"
                size="xlarge"
                source={{ uri: this.state.imageUrl }}
            ></Avatar>
            <Button onPress={()=>{saveStorage()}}></Button>
        </View>


    }


}

