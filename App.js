import React, { Component } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from 'react-native-vector-icons/FontAwesome';
import { DetalleCompra } from "./screens/DetalleCompra";
import { ListaCompras } from "./screens/ListaCompras";
import { ListaProductos } from "./screens/ListaProductos";
import { FormularioProducto } from "./screens/FormularioProducto";
import { Informacion } from "./screens/Informacion";
import { Registrarse } from "./screens/Registro";
import { CambioClave } from "./screens/CambioClave";
import { Login } from "./screens/Login";
import { cargarConfiguracion } from "./services/firebase.config"
import firebase from "firebase";
import { CerrarSesion } from './screens/CerrarSesion';
import { YellowBox } from "react-native";
let NavStack = createStackNavigator();
let NavTab = createBottomTabNavigator();
let NavDrawer = createDrawerNavigator();
  

let TabHome = () => {
  return <NavTab.Navigator>

    <NavTab.Screen name="ListaComprasScreen" component={ListaCompras}
      options={{
        tabBarLabel: "Compras",
        tabBarIcon: () => {
          return <Icon
            name='cart-arrow-down'
            type='evilicon'
            color='#517fa4'
          />
        }
      }} />
    <NavTab.Screen name="ListaProductosScreen" component={ListaProductos}
      options={{
        tabBarLabel: "Productos",
        tabBarIcon: () => {
          return <Icon
            name='bitbucket'
            type='evilicon'
            color='#517fa4'
          />
        }
      }} />

  </NavTab.Navigator>
}

let Home = () => {
  return <NavStack.Navigator initialRouteName="TabHome">

    <NavStack.Screen
      name="TabHome"
      component={TabHome}
      options={{ title: "Home" }}
    />
    <NavStack.Screen
      name="DetalleCompraScreen"
      component={DetalleCompra} options={{ title: "Detalle Compra" }}
    />
    <NavStack.Screen
      name="FormularioProductoScreen"
      component={FormularioProducto} options={{ title: "Formulario de Productos" }}
    />
  </NavStack.Navigator>
}

export default class App extends Component {

  constructor() {
    super();
    //console.disableYellowBox = true;
    YellowBox.ignoreWarnings([
      "Warning: componentWillReceiveProp",
      "Setting a timer"
    ]);
    this.state = {
      login: false
    }

    if (!global.isConfig) {
      cargarConfiguracion();
    }

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          login: true
        });
      } else {
        this.setState({
          login: false
        });
      }
    });


  }



  render() {
    return (
      <NavigationContainer>

        {


          this.state.login ? (<NavDrawer.Navigator>
            <NavDrawer.Screen name="Home" component={Home} />
            <NavDrawer.Screen name="Information" component={Informacion} />
            <NavDrawer.Screen name="CerrarSesion" component={CerrarSesion} />
          </NavDrawer.Navigator>) : (
              <NavStack.Navigator>
                <NavStack.Screen name="Login" component={Login} />
                <NavStack.Screen name="Registrarse" component={Registrarse} />
                <NavStack.Screen name="RecuperarClave" component={CambioClave} />
              </NavStack.Navigator>
            )
        }


      </NavigationContainer>
    );

  }

}

