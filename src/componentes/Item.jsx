import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Button,Center, ButtonGroup } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({ dato }) => {
    return (
        <>
            <Card style={{ width: '350px', height: 'auto'}}>
                <CardHeader  style={{ backgroundColor: 'cyan', padding: '10px',  borderRadius:"10px" }}>
                    <Heading size='md'>{dato.nombre}</Heading>
                </CardHeader>
                <CardBody>
                    <img src={dato.image} alt={dato.nombre} style={{ maxWidth: '300px', height: '300px', border: '2px solid #ccc', borderRadius: '10px' }}/>
                    <Text style={{ fontFamily: 'Arial', fontSize: '26px', color: '#666' }}>{dato.description}</Text>
                    <Text style={{ fontFamily: 'Verdana', fontSize: '14px', color: '#777' }}>{dato.category}</Text>
                </CardBody>
                <CardFooter style={{ backgroundColor: 'grey', padding: '10px', borderRadius: "20px" }}>
                    <Link to={`/item/${dato.id}`}>  
                        <ButtonGroup spacing='2'>
                            <Button variant='solid' colorScheme='orange'>
                                Consultar Precio
                            </Button>
                        </ButtonGroup>
                    </Link>
                </CardFooter>
            </Card>
        </>
    )
}
export default Item