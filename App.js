import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from 'react-native-elements';
import { ListaCompras } from "./screens/ListaCompras";
import { ListaProductos } from "./screens/ListaProductos";
import { FormularioProducto } from "./screens/FormularioProducto";

let NavStack = createStackNavigator();
let NavTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <NavTab.Navigator>
        <NavTab.Screen name="ListaComprasScreen" component={ListaCompras}
          options={{
            tabBarLabel: "Compras",
            tabBarIcon: () => {
              return <Icon
                name='sc-telegram'
                type='evilicon'
                color='#517fa4'
              />
            }
          }}></NavTab.Screen>
        <NavTab.Screen name="ListaProductosScreen" component={ListaProductos}
          options={{ tabBarLabel: "Productos" }}></NavTab.Screen>
      </NavTab.Navigator>


      {
        /*<NavStack.Navigator initialRouteName="ListaComprasScreen">
          <NavStack.Screen
            name="ListaComprasScreen"
            component={ListaCompras} options={{ title: "Lista de Compras" }}
          />
          <NavStack.Screen
            name="ListaProductosScreen"
            component={ListaProductos} options={{ title: "Lista de Productos" }}
          />
          <NavStack.Screen
            name="FormularioProductosScreen"
            component={FormularioProducto} options={{ title: "Formulario de Productos" }}
          />
        </NavStack.Navigator>*/
      }
    </NavigationContainer>
  );
}

