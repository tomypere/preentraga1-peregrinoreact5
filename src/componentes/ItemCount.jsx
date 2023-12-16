import React, { useState } from 'react';
import { Button, Badge, useToast } from '@chakra-ui/react';
import { useCarrito } from './CartContext';
import { doc,  getFirestore,getDoc, updateDoc} from "firebase/firestore"

const ItemCount = ({ stock, idProducto }) => {
    const toast = useToast();
    const [count, setCount] = useState(1);
    const { carrito, setCarrito } = useCarrito();
    const id = idProducto

    const addToCart = () => {
        toast({
            title: 'Felicidades',
            description: `Compraste ${count} productos`,
            status: 'success',
            duration: 5000,
            isClosable: true,
        });
        const db = getFirestore()
        const orderDoc = doc(db, "componentes", id)
        getDoc(orderDoc).then((snapshot)=>{
            let productoRepetido = false;
            const documento = snapshot.data()
            const productos = {idCodificado: id, nombreProducto: `${documento.Nombre}`, precioUnidad: `${documento.Precio}`,cantidad: count, precio: documento.Precio * count};
            setCarrito(producto => [...producto, productos]);
        })
    }



    const decrement = () => {
        setCount((prevCount) => Math.max(prevCount - 1, 1));
    };

    const increment = () => {
        setCount((prevCount) => Math.min(prevCount + 1, stock));
    };


    return (
        <div>
            <Button colorScheme='teal' variant='outline' onClick={decrement}>
                -
            </Button>
            <Badge colorScheme='purple'>{count.toString()}</Badge>
            <Button colorScheme='teal' variant='outline' onClick={increment}>
                +
            </Button>
            <Button colorScheme='linkedin' onClick={addToCart}>
                Agregar al Carrito
            </Button>
        </div>
    );
};

export default ItemCount;
