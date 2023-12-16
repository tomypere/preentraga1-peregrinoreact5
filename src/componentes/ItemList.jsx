import React from 'react';
import Item from './Item';


const ItemList = ({ productos }) => {
  const cardsPerRow = 3;

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {productos && productos.length > 0 ? (
        [...Array(Math.ceil(productos.length / cardsPerRow))].map((_, rowIndex) => (
          <div key={rowIndex} style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
            {productos.slice(rowIndex * cardsPerRow, (rowIndex + 1) * cardsPerRow).map((p) => (
              <div key={p.id} style={{ width: '250px', margin: '60px' }}>
                <Item dato={p} />
              </div>
            ))}
          </div>
        ))
      ) : (
        <p>Cargando productos...</p>
      )}
    </div>
  );
};

export default ItemList;