import React from 'react'
import Item from './Item'

const ItemList = ({productos}) => {
    console.log(productos)
    const cardsPerRow = 3;


    return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
        {[...Array(Math.ceil(productos.length / cardsPerRow))].map((_, rowIndex) => (
            <div key={rowIndex} style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '0px' }}>
                {productos.slice(rowIndex * cardsPerRow, (rowIndex + 1) * cardsPerRow).map((p) => (
            <div key={p.id} style={{ width: '270px', margin: '80px' }}>
                <Item dato={p} />
            </div>
            ))}
        </div>
        ))}
    </div>
    );
}


export default ItemList