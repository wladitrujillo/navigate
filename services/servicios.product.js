import { Alert } from "react-native";
import { onError } from "../utils/callbacks";

const products = 'products';

export const createProduct = (product, fnOnSuccess) => {

    global.firestoredb
        .collection(products)
        .doc(product.id)
        .set(product)
        .then((obj) => { fnOnSuccess() })
        .catch((error) => { onError(error) })
}

export const updateProduct = (product, fnOnSuccess) => {

    global.firestoredb
        .collection(products)
        .doc(product.id)
        .update({ name: product.name, price: product.price })
        .then((obj) => { fnOnSuccess() })
        .catch((error) => { onError(error) })
}

export const deleteProduct = (id, fnOnSuccess) => {

    global.firestoredb
        .collection(products)
        .doc(id)
        .delete()
        .then((obj) => { fnOnSuccess() })
        .catch((error) => { onError(error) })
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