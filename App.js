import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from 'react-native-vector-icons/FontAwesome';
import { DetalleCompra } from "./screens/DetalleCompra";
import { ListaCompras } from "./screens/ListaCompras";
import { ListaProductos } from "./screens/ListaProductos";
import { FormularioProducto } from "./screens/FormularioProducto";

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


export default function App() {
  return (
    <NavigationContainer>
      <NavStack.Navigator initialRouteName="TabHome">

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

    </NavigationContainer>
  );
}

