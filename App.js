import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ListaCompras } from "./screens/ListaCompras";
import { ListaProductos } from "./screens/ListaProductos";
import { FormularioProducto } from "./screens/FormularioProducto";

let NavStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NavStack.Navigator initialRouteName="ListaComprasScreen">
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
      </NavStack.Navigator>
    </NavigationContainer>
  );
}

