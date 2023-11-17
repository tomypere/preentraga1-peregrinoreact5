import {useState} from 'react'
import { Button, Badge } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'

const ItemCount = () => {

    const toast = useToast()
     const [count, setCount] = useState(0)

    const addToCart = () => {
        toast({
            title: 'Felicitaciones',
            description: `Has agregado ${count} unidades a tu carrito`, 
            status: 'success',
            duration: 5000,
            isClosable: true,
          })
    }

    


  return (
    <div>

<Button colorScheme='teal' variant='outline' onClick={() => setCount(count + 1)}>
    +
  </Button>
  <Badge colorScheme='purple'>{count}</Badge>
  <Button colorScheme='teal' variant='outline' onClick={() => setCount(count - 1)}>
    -
  </Button>
  <Button colorScheme='linkedin' onClick= {addToCart} >Agregar al carrito</Button>

    </div>
  )
}

export default ItemCount