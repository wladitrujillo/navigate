import { Alert } from "react-native";
import { onError } from "../utils/callbacks";

const products = 'products';

export const createProduct = async (product, fnOnSuccess) => {


    try {
        let obt = await global.firestoredb
            .collection(products)
            .doc(product.id)
            .set(product);
        fnOnSuccess();
    } catch (error) {
        onError(error)
    }


}

export const updateProduct = async (product, fnOnSuccess) => {

    try {
        let obj = await global.firestoredb
            .collection(products)
            .doc(product.id)
            .update({ name: product.name, price: product.price });
        fnOnSuccess();
    } catch (error) {
        onError(error)
    }
}

export const deleteProduct = async (id, fnOnSuccess) => {

    try {
        let obj = await global.firestoredb
            .collection(products)
            .doc(id)
            .delete();
        fnOnSuccess();
    } catch (error) {
        onError(error);
    }
}


export const registrarListener = (fnPintarLista) => {

    let items = [];

    global.firestoredb
        .collection(products)
        .onSnapshot((snapShotCambios) => {

            for (cambio of snapShotCambios.docChanges()) {

                switch (cambio.type) {
                    case "added":
                        items.push(cambio.doc.data());
                        break;
                    case "removed":
                        let index = items.findIndex(e => e.id == cambio.doc.data().id);
                        if (index >= 0) items.splice(index, 1);
                        break;
                    case "modified":
                        let i = items.findIndex(e => e.id == cambio.doc.data().id);
                        if (i >= 0) items[i] = cambio.doc.data();
                        break;
                }
            }

            fnPintarLista(items);
        });
}