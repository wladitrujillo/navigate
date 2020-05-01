import { onError } from "../utils/callbacks";

//todos los carritos de compra de todos los usuarios
const carritos = 'carritos';

export const addItem = async (mail, itemProducto, value) => {

    try {
        let obj = await global.firestoredb
            .collection(carritos)
            .doc(mail)
            .collection('items')
            .doc(itemProducto.id)
            .get();

        if (obj.exists) {

            await global.firestoredb
                .collection(carritos)
                .doc(mail)
                .collection('items')
                .doc(obj.id)
                .update({
                    count: obj.data().count + value,
                    subtotal: (obj.data().count + value) * obj.data().price
                });

            console.log("Item already exists update count", value);

        } else {

            await global.firestoredb
                .collection(carritos)
                .doc(mail)
                .collection('items')
                .doc(itemProducto.id)
                .set(itemProducto);

            console.log("Item add collection set called email", mail);

        }


    } catch (error) {
        onError(error);
    }

}


export const deleteItem = async (email, id) => {
    console.log("deleteItem", id);
    try {
        await global.firestoredb
            .collection(carritos)
            .doc(email)
            .collection('items')
            .doc(id)
            .delete();

    } catch (error) {
        onError(error)
    }

}

export const vaciarCarrito = (mail, productList) => {
    console.log("vaciar carrito");
    try {
        productList.forEach(product => global.firestoredb
            .collection(carritos)
            .doc(mail)
            .collection('items')
            .doc(product.id)
            .delete());

        console.log("Producto borrado")
    } catch (error) {
        onError(error)
    }
}


export const registrarListener = (mail, fnCallback) => {

    let items = [];

    global.firestoredb
        .collection(carritos)
        .doc(mail)
        .collection('items')
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
            console.log("registrarListner on servicios car callback");
            fnCallback(items);
        });



}