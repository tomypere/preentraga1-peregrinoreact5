

import React, { useState } from 'react';
import { useCarrito } from './CartContext';
import { Button, VStack, HStack, Text, Input, FormControl, FormLabel, FormHelperText } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Cart = () => {
const { carrito, setCarrito } = useCarrito();
const [edicionCantidad, setEdicionCantidad] = useState({ id: null, cantidad: 0 });
const [informacionCliente, setInformacionCliente] = useState({
    email: '',
    nombre: '',
    apellido: '',
    codigoPostal: '',
    pais: '',
    ciudad: '',
    direccion: '',
});

const quitarDelCarrito = (id) => {
    const nuevoCarrito = carrito.filter((item) => item.id !== id);
    setCarrito(nuevoCarrito);
    setEdicionCantidad({ id: null, cantidad: 0 });
};

const vaciarCarrito = () => {
    setCarrito([]);
    setEdicionCantidad({ id: null, cantidad: 0 });
};

const calcularTotal = () => {
    return carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);
};

const handleCantidadChange = (id, cantidad) => {
    setEdicionCantidad({ id, cantidad });
};

const actualizarCantidad = (id) => {
const nuevoCarrito = carrito.map((item) =>
    item.id === id ? { ...item, cantidad: edicionCantidad.cantidad } : item
    );
    setCarrito(nuevoCarrito);
    setEdicionCantidad({ id: null, cantidad: 0 });
};

const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInformacionCliente((prevInfo) => ({ ...prevInfo, [name]: value }));
};

const handleRealizarPedido = () => {
    console.log('Información del Cliente:', informacionCliente);
};

return (
    <VStack spacing={4} align="stretch">
    <Text fontSize="xl" fontWeight="bold">
        Carrito de Compras
    </Text>

    {carrito.length > 0 ? (
        carrito.map((item) => (
        <HStack key={item.id} justify="space-between" bg="gray.100" p={3} rounded="md">
            <VStack align="start">
            <Text>{item.nombreProducto}</Text>
            <Text>Precio: ${item.precio}</Text>
            <Text>Cantidad:</Text>
            <Input
                type="number"
                value={edicionCantidad.id === item.id ? edicionCantidad.cantidad : item.cantidad}
                onChange={(e) => handleCantidadChange(item.id, parseInt(e.target.value, 10))}
                min={1}
            />
            </VStack>
            <VStack align="end">
              <Text>Total: ${item.precio * (edicionCantidad.id === item.id ? edicionCantidad.cantidad : item.cantidad)}</Text>
            <Button colorScheme="green" size="sm" onClick={() => actualizarCantidad(item.id)}>
                Actualizar Cantidad
            </Button>
            <Button colorScheme="red" size="sm" onClick={() => quitarDelCarrito(item.id)}>
                Quitar del carrito
            </Button>
            </VStack>
        </HStack>
        ))
    ) : (
        <Text>El carrito está vacío.</Text>
    )}

    {carrito.length > 0 && (
        <VStack align="start">
        <FormControl>
            <FormLabel>Email</FormLabel>
                <Input
                    type="email"
                    name="email"
                    value={informacionCliente.email}
                    onChange={handleInputChange}
                    required
                />
        </FormControl>

        <FormControl>
            <FormLabel>Nombre</FormLabel>
                <Input
                    type="text"
                    name="nombre"
                    value={informacionCliente.nombre}
                    onChange={handleInputChange}
                    required
                />
        </FormControl>

        <FormControl>
            <FormLabel>Pais</FormLabel>
                <Input
                    type="text"
                    name="Pais"
                    value={informacionCliente.Pais}
                    onChange={handleInputChange}
                    required
                />
        </FormControl>

        <FormControl>
            <FormLabel>Ciudad</FormLabel>
                <Input
                    type="text"
                    name="Ciudad"
                    value={informacionCliente.Ciudad}
                    onChange={handleInputChange}
                    required
                />
        </FormControl>

        <FormControl>
            <FormLabel>Codigo Postal</FormLabel>
                <Input
                    type="text"
                    name="CP"
                    value={informacionCliente.CP}
                    onChange={handleInputChange}
                    required
                />
        </FormControl>

        <Button colorScheme="teal" onClick={handleRealizarPedido}>
            Realizar Pedido
        </Button>
        </VStack>
    )}

    {carrito.length > 0 && (
        <VStack align="start">
        <Text fontSize="lg">Total: ${calcularTotal()}</Text>
        <HStack spacing={4}>
            <Button colorScheme="blue" onClick={vaciarCarrito}>
                Vaciar Carrito
            </Button>
            <Link to="/">
            <Button colorScheme="purple">
                Volver a Seleccionar Productos
            </Button>
            </Link>
        </HStack>
        </VStack>
    )}
    </VStack>
    );
};

export default Cart;
