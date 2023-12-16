import React, { useContext, useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from "firebase/firestore";
import ItemList from './ItemList';
import { Center, CircularProgress, filter } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { category } = useParams();

    
    useEffect(() => {
        const fetchData = async () => {
            const db = getFirestore();
            const itemsCollection = collection(db, "componentes");

                let productosObtenidos
            try {
                const snapshot = await getDocs(itemsCollection);
                const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                productosObtenidos = docs.filter((docs) => docs.Categoria === category)

                setTimeout(() => {
                    if(productosObtenidos.length == 0) {
                        productosObtenidos = docs
                    }
                    
                    console.log(productosObtenidos)
                    setProductos(productosObtenidos);
                    
                    setLoading(false);
                }, 2000);
            } catch (error) {
                console.error("Error fetching data from Firebase:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, [category]);

    
    if (loading) {
        return (
            <Center p='1rem'>
                <CircularProgress isIndeterminate color="green.300" />
            </Center>
        );
    }

    return (
        <Center p='1rem'>
            <ItemList productos={productos} />
        </Center>
    );
};

export default ItemListContainer;