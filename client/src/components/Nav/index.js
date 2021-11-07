import React, { useState, useEffect } from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { Box, Link, Stack, Text} from '@chakra-ui/react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

function Nav() {
    
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)
    return (      
        <>
            <Box display={{ base: "block", md: "none"}} onClick={toggle}>
            {isOpen ? <AiOutlineClose/> : <AiOutlineMenu/> }
            </Box>
                <Box display={{ base: isOpen ? "block": "none", md: "block"}}
                flexBasis={{ base: "100%", md: "auto"}} >
                    <Stack spacing={8} align='center' justify={['center', 'space-between', 'flex-end', 'flex-end']} direction={['column', 'row', 'row', 'row']} pt={[4,4,0,0]}
                    >
                        <Link as={ReactLink} to="/about">
                            <Text display="block" >About</Text>
                        </Link>
                
                    
                        <Link as={ReactLink} to="/portfolio">
                            <Text display="block" >Portfolio</Text>
                        </Link>
                  
          
                        <Link as={ReactLink} to="/contact">
                            <Text display="block">Contact</Text>
                        </Link>
              
                    </Stack>
                </Box>
        </>
    )

    
};

export default Nav;