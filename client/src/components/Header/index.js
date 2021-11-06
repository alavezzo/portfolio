import Nav from '../Nav';
import {  Flex } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/media-query';
import React from 'react';

const Header = () => {    
    return (
      <>
        <Flex w="100%" mt="0" p="0" ml="20">
          <img width="20px" height="20px" src={require(`../../assets/icon/AL_logo.png`).default}/>
        </Flex>
        <Nav mt="0" p="0"></Nav>
      </>
    )
    }

export default Header;