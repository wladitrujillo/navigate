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


export const updateProduct = (product, products) => {

    let index = findProduct(product, products);

    if (index != -1) {
        products[index] = product;
    }

}


export const deleteProduct = (product, products) => {

    let index = findProduct(product, products);

    if (index != -1) {
        products.splice(index, 1);
    }

}

findProduct = (product, products) => {
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
                    updateProduct(cambio.doc.data(), products);
                } else if (cambio.type === "modified") {
                    deleteProduct(cambio.doc.data(), products);
                }
            }

            fnPintarLista(products);
        });
}