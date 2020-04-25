import { Alert } from "react-native";
import { onError } from "../utils/callbacks";

const collection = 'products';

export const createProduct = (product, fnOnSuccess) => {

    global.firestoredb
        .collection(collection)
        .doc(product.id)
        .set(product)
        .then((obj) => { fnOnSuccess() })
        .catch((error) => { onError(error) })
}

export const deleteProduct = (id, fnOnSuccess) => {

    global.firestoredb
        .collection(collection)
        .doc(id)
        .delete()
        .then((obj) => { fnOnSuccess() })
        .catch((error) => { onError(error) })
}


let update = (product, products) => {

    let index = findProduct(product, products);

    if (index != -1) {
        products[index] = product;
    }

}


let remove = (product, products) => {

    let index = findProduct(product, products);
    console.log("deleteProduct index ==>", index)
    if (index != -1) {
        products.splice(index, 1);
    }

}

let findProduct = (product, products) => {
    return products.findIndex(item => item.id == product.id);
}

export const registrarListener = (fnPintarLista) => {

    let products = [];

    global.firestoredb
        .collection(collection)
        .onSnapshot((snapShotCambios) => {
            let cambios = snapShotCambios.docChanges();
            let cambio;
            for (let i = 0; i < cambios.length; i++) {
                cambio = cambios[i];
                if (cambio.type === "added") {
                    products.push(cambio.doc.data());
                } else if (cambio.type === "removed") {
                    remove(cambio.doc.data(), products);
                } else if (cambio.type === "modified") {
                    update(cambio.doc.data(), products);
                }
            }

            fnPintarLista(products);
        });
}