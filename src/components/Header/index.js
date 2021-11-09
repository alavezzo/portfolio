import Nav from '../Nav';
import { Flex, Link } from '@chakra-ui/react';
import {Link as ReactLink } from "react-router-dom";
import React, {useState} from 'react';

const Header = ({ home, setHome }) => {   
  
    const [sections] = useState([
      {
        name: 'About'
      },
      {
        name: 'Portfolio'
      },
      {
        name: 'Contact'
      }
    ]);
    
    const [currentSection, setCurrentSection] = useState('')

    
    return (
      <>
        <Flex w="100%" mt="0" p="0" ml="20">
            <Link onClick={()=> setHome(true)} as={ReactLink} to="/">
                <img alt={'logo'} width="20px" height="20px" src={require(`../../assets/icon/AL_logo.png`).default}/>
            </Link>
            
        </Flex>
        <Nav setHome={setHome} home={home} sections={sections} currentSection={currentSection} setCurrentSection = {setCurrentSection} mt="0" p="0"></Nav>
      </>
    )
    }

export default Header;