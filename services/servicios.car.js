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



export const registrarListener = (mail, fnPintarLista) => {

    let items = [];

    global.firestoredb
        .collection(carritos)
        .doc(mail)
        .collection('items')
        .onSnapshot((snapShotCambios) => {
            let cambios = snapShotCambios.docChanges();
            let cambio;
            for (let i = 0; i < cambios.length; i++) {
                cambio = cambios[i];
                if (cambio.type === "added") {
                    items.push(cambio.doc.data());
                } else if (cambio.type === "removed") {
                    items = items.filter(item => item.id != cambio.doc.data().id);
                }
            }

            fnPintarLista(items);
        });
}