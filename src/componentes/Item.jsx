import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Button, Center, ButtonGroup } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({ dato }) => {
    return (
        <>
            <Card style={{ width: '350px', height: '450px'}}>
                <CardHeader  style={{ backgroundColor: 'lightslategray', padding: '10px',  borderRadius:"10px" }}>
                    <Heading size='md'>{dato.Nombre}</Heading>
                </CardHeader>
                <CardBody>
                    <img src={dato.Imagen} alt={dato.Nombre} style={{ maxWidth: '300px', height: 'auto', border: '2px solid #ccc', borderRadius: '10px' }}/>
                    <Text style={{ fontFamily: 'Arial', fontSize: '16px', color: '#666' }}>{dato.Descripcion}</Text>
                    <Text style={{ fontFamily: 'Verdana', fontSize: '14px', color: '#777' }}>{dato.Categoria}</Text>
                </CardBody>
                <CardFooter style={{ backgroundColor: 'lightgray', padding: '10px', borderRadius: "10px" }}>
                    <Link to={`/item/${dato.id}`}>  
                        <ButtonGroup spacing='2'>
                            <Button variant='solid' colorScheme='blue'>
                                Detalles
                            </Button>
                        </ButtonGroup>
                    </Link>
                </CardFooter>
            </Card>
        </>
    )
}
export default Item