import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer } from '@chakra-ui/react';

const NavBar = () => {
  return (
    <div className='navbar'>
      <Flex bg='skyblue' justifyContent='center' >
        <Box p='4'>
          <Link to={'/'}>
            <img src="../imagenes/pclogo.jpeg" className="logo" alt="PC Logo" />
          </Link>
        </Box>
        <Spacer />
        <Spacer>
          <Menu>
            <MenuButton className="categ">COMPONENTES</MenuButton>
            <MenuList>
              <MenuItem>
                <Link to='/category/Procesador'>Procesador</Link>
              </MenuItem>
              <MenuItem>
                <Link to='/category/Placa-de-video'>Placa-de-video</Link>
              </MenuItem>
              <MenuItem>
                <Link to='/category/Ram'>Ram</Link>
              </MenuItem>
              <MenuItem>
                <Link to='/category/Motherboard'>Motherboard</Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </Spacer>
        <Box p='4'>
          <Link to={'/cart'}>
            <CartWidget />
          </Link>
        </Box>
      </Flex>
    </div>
  );
};

export default NavBar;
