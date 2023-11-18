import { useParams } from 'react-router-dom';
import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, ButtonGroup, Button } from '@chakra-ui/react';
import ItemCount from './ItemCount'

const ItemDetail = ({ productos }) => {
    const { id } = useParams();
    const dato = productos.find((p) => p.id === parseInt(id));

    if (!dato) {
        return <div>No se encontró el producto con ID {id}</div>;
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', marginTop: '50px' }}>
            <Card style={{ width: '350px', height: '450px' }}>
                <CardHeader style={{ backgroundColor: 'cyan', padding: '10px', borderRadius: '8px' }}>
                    <Heading size='md'>{dato.nombre}</Heading>
                </CardHeader>
                <CardBody>
                    <img
                        src={dato.image}
                        alt={dato.nombre}
                        style={{ maxWidth: '300px', height: 'auto', border: '2px solid #ccc', borderRadius: '10px' }}
                    />
                    <Text style={{ fontFamily: 'Arial', fontSize: '15px', color: '#666' }}>{dato.description}</Text>
                    <Text style={{ fontFamily: 'Verdana', fontSize: '14px', color: '#777' }}>{dato.category}</Text>
                </CardBody>
                <CardFooter style={{ backgroundColor: 'grey', padding: '10px', borderRadius: "10px" }}>
                    <ItemCount />
                </CardFooter>
            </Card>
        </div>
    );
};

export default ItemDetail;

