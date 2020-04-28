import { onError } from "../utils/callbacks";

//todos los carritos de compra de todos los usuarios
const carritos = 'carritos';

export const addItem = (mail, itemProducto, fnOnSuccess) => {
    global.firestoredb
        .collection(carritos)
        .doc(mail)
        .collection('items')
        .doc(itemProducto.id)
        .set(itemProducto)
        .then((obj) => { fnOnSuccess(obj) })
        .catch((error) => { onError(error) })
}

export const deleteItem = (mail, id) => {

    global.firestoredb
        .collection(carritos)
        .doc(mail)
        .collection('items')
        .doc(id)
        .delete()
        .then((obj) => { })
        .catch((error) => { onError(error) })
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
                        let index = items.findIndex(e => e.id == cambio.doc.data().id)
                        if (index >= 0) items.splice(index, 1);
                        break;
                }
            }

            fnCallback(items);
        });
}