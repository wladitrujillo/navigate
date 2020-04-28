import { onError } from "../utils/callbacks";

//todos los carritos de compra de todos los usuarios
const carritos = 'carritos';

export const addItem = (mail, itemProducto) => {
    global.firestoredb
        .collection(carritos)
        .doc(mail)
        .collection('items')
        .doc(itemProducto.id)
        .set(itemProducto)
        .then((obj) => { })
        .catch((error) => { onError(error) })
}