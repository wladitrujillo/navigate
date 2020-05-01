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

    let findIndex = (cambio) => {
        return items.findIndex(e => e.id == cambio.doc.data().id);;
    }

    global.firestoredb
        .collection(products)
        .onSnapshot((snapShotCambios) => {

            for (cambio of snapShotCambios.docChanges()) {
                let index = findIndex(cambio)
                switch (cambio.type) {
                    case "added":
                        items.push(cambio.doc.data());
                        break;
                    case "removed":
                        if (index >= 0) items.splice(index, 1);
                        break;
                    case "modified":
                        if (index >= 0) items[index] = cambio.doc.data();
                        break;
                }
            }

            fnPintarLista(items);
        });
}