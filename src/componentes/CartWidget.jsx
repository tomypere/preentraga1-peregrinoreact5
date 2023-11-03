import React from 'react'
import { Badge } from '@chakra-ui/react'


const CartWidget = () => {
  return (
    <div classname="carrito-container">
        <button>
        <img src="../imagenes/carrittt.png" class="carrito"></img>
       <Badge colorScheme='purple'>5</Badge>
      
       </button>
    </div>

  )
}

export default CartWidget