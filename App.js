import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icon from 'react-native-vector-icons/FontAwesome';
import { DetalleCompra } from "./screens/DetalleCompra";
import { ListaCompras } from "./screens/ListaCompras";
import { ListaProductos } from "./screens/ListaProductos";
import { FormularioProducto } from "./screens/FormularioProducto";

let NavStack = createStackNavigator();
let NavTab = createBottomTabNavigator();


let TabCompra = () => {
  return <NavStack.Navigator initialRouteName="FormularioScreen">
    <NavStack.Screen
      name="DetalleCompra"
      component={DetalleCompra} options={{ title: "Detalle Compra" }}
    />
    <NavStack.Screen
      name="FormularioScreen"
      component={FormularioProducto} options={{ title: "Formulario de Productos" }}
    />
  </NavStack.Navigator>
}

export default function App() {
  return (
    <NavigationContainer>

      <NavTab.Navigator>
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
          }}></NavTab.Screen>
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
          }}></NavTab.Screen>
        <NavTab.Screen name="StackScreen" component={TabCompra}
          options={{
            tabBarLabel: "TabCompra",
            tabBarIcon: () => {
              return <Icon
                name='bitbucket'
                type='evilicon'
                color='#517fa4'
              />
            }
          }}></NavTab.Screen>
      </NavTab.Navigator>
    </NavigationContainer>
  );
}

