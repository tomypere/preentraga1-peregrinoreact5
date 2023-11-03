import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer } from '@chakra-ui/react'


const NavBar = () =>{
    return (
        <div className='navbar'>
            
        
            

            <Flex>
  <Box p='4' >
  <img src="../imagenes/pclogo.jpeg" class="logo"></img>
  </Box>
  <Spacer />
  <Spacer>
  <Menu>
  <MenuButton class="categ">
    COMPONENTES
  </MenuButton>
  <MenuList>
    <MenuItem>Pocesador</MenuItem>
    <MenuItem>Placa de video</MenuItem>
    <MenuItem>Ram</MenuItem>
    <MenuItem>Gabinete</MenuItem>
    <MenuItem>Fuente de poder</MenuItem>
   
  </MenuList>
</Menu>
  </Spacer>
  <Box p='4'>
    
    <CartWidget/>
  </Box>
</Flex>

           
        </div>
    )

}

export default NavBar