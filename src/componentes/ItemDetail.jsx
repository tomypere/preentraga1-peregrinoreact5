import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Heading, Text } from '@chakra-ui/react';
import ItemCount from './ItemCount';

const ItemDetail = ({ dato, id }) => {
const ola = dato;
const idObtenido = id;

    return (
        <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', marginTop: '50px' }}>
        <Card style={{ width: '350px', height: '450px' }}>
            <CardHeader style={{ backgroundColor: 'lightslategray', padding: '10px', borderRadius: '10px' }}>
            <Heading size='md'>{ola[0]?.Nombre}</Heading>
            </CardHeader>
            <CardBody>
            <img
                src={ola[0]?.Imagen}
                alt={ola[0]?.Nombre}
                style={{ maxWidth: '300px', height: 'auto', border: '2px solid #ccc', borderRadius: '10px' }}
            />
            <Text style={{ fontFamily: 'Arial', fontSize: '16px', color: '#666' }}>{ola[0]?.Descripcion}</Text>
            <Text style={{ fontFamily: 'Verdana', fontSize: '14px', color: '#777' }}>{ola[0]?.Categoria}</Text>
            <Text style={{ fontFamily: 'Verdana', fontSize: '14px', color: '#777' }}>Precio: ${ola[0]?.Precio}</Text>
            </CardBody>

            <CardFooter style={{ backgroundColor: 'lightgray', padding: '10px', borderRadius: '10px' }}>
            <ItemCount stock={ola[0]?.Stock} idProducto= { idObtenido } />
            </CardFooter>
        </Card>
        </div>
    );
};

export default ItemDetail;