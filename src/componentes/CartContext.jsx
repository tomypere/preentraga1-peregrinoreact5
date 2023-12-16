import React, { createContext, useContext, useState } from 'react';

const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (item, cantidad) => {
    const productoEnCarrito = carrito.find((producto) => producto.id === item.id);

    if (productoEnCarrito) {
      const nuevoCarrito = carrito.map((producto) =>
        producto.id === item.id ? { ...producto, cantidad: producto.cantidad + cantidad } : producto
      );
      setCarrito(nuevoCarrito);
    } else {
      setCarrito([...carrito, { ...item, cantidad }]);
    }
  };



  return (
    <CarritoContext.Provider
      value={{
        carrito,
        setCarrito
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

export const useCarrito = () => {
  return useContext(CarritoContext);
};