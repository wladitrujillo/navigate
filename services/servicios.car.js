import { onError } from "../utils/callbacks";

//todos los carritos de compra de todos los usuarios
const carritos = 'carritos';

export const addItem = (mail, itemProducto, value, fnOnSuccess) => {
    console.log("additem", mail);
    global.firestoredb
        .collection(carritos)
        .doc(mail)
        .collection('items')
        .doc(itemProducto.id)
        .get()
        .then((obj) => {
            if (obj.exists) {
                update(obj.id, {
                    count: obj.data().count + value,
                    subtotal: (obj.data().count + value) * obj.data().price
                })
            } else {
                add();
            }
        })
        .catch(error => onError(error))


    function add() {

        itemProducto.subtotal = itemProducto.price;
        global.firestoredb
            .collection(carritos)
            .doc(mail)
            .collection('items')
            .doc(itemProducto.id)
            .set(itemProducto)
            .then((obj) => { fnOnSuccess(obj) })
            .catch((error) => { onError(error) })
    }

    function update(id, data) {
        global.firestoredb
            .collection(carritos)
            .doc(mail)
            .collection('items')
            .doc(id)
            .update(data)
            .then((obj) => { console.log("Update count") })
            .catch((error) => { onError(error) })
    }



}


export const deleteItem = (mail, id) => {
    console.log("deleteItem");
    global.firestoredb
        .collection(carritos)
        .doc(mail)
        .collection('items')
        .doc(id)
        .delete()
        .then((obj) => { })
        .catch((error) => { onError(error) })
}

export const vaciarCarrito = (mail, productList) => {
    console.log("vaciar carrito");

    productList.forEach(product => global.firestoredb
        .collection(carritos)
        .doc(mail)
        .collection('items')
        .doc(product.id)
        .delete()
        .then((obj) => { console.log("Producto borrado") })
        .catch((error) => { onError(error) }));

}


export const registrarListener = (mail, fnCallback) => {

    let items = [];

    let findIndex = (cambio) => {
        return items.findIndex(e => e.id == cambio.doc.data().id);;
    }

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
                    case "modified":
                        let i = findIndex(cambio);
                        console.log("Modified", i);
                        if (i >= 0) items[i] = cambio.doc.data();
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