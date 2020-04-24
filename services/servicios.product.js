import { Alert } from "react-native";


const collection = 'products';

export const createProduct = (product, fnOnSuccess, fnOnError) => {

    global.firestoredb
        .collection(collection)
        .doc(product.id)
        .set(product)
        .then((obj) => { fnOnSuccess() })
        .catch((error) => { fnOnError(error) })
}

export const registrarListener = (fnPintarLista) => {

    let productos = [];

    global.firestoredb
        .collection(collection)
        .onSnapshot((snapShotCambios) => {
            let cambios = snapShotCambios.docChanges();
            let cambio;
            for (let i = 0; i < cambios.length; i++) {
                cambio = cambios[i];
                if (cambio.type === "added") {
                   
                    productos.push(cambio.doc.data());
                } else if (cambio.type === "removed") {
                    Alert.alert("removed");
                } else if (cambio.type === "modified") {
                    Alert.alert("modified");
                }
            }

            fnPintarLista(productos);
        });
}