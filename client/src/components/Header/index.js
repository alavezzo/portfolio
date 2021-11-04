import { Circle, Text } from '@chakra-ui/layout';
import {  Heading } from '@chakra-ui/react';
import { ReactNode } from 'react';
import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
  } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/media-query';
import { useColorMode } from '@chakra-ui/color-mode'
import React from 'react';

const Header = () => {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    const Links = ['About', 'Portfolio', 'Contact', 'Resume'];

    const NavLink = ({ children }: { children: ReactNode }) => (
      <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
          textDecoration: 'none',
          bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={`${children}`}>
        {children}
      </Link>
    );
    
    return (
        <Flex w="100%"> 
            <HStack spacing={8} alignItems={'center'}>
            <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">Anthony Lavezzo</Heading>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
          </Flex>
        </Flex>
    )
    }

export default Header;




// export default function Header() {
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   return (
//     <>
     
//         <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
//           <IconButton
//             size={'md'}
        
//             aria-label={'Open Menu'}
//             display={{ md: 'none' }}
//             onClick={isOpen ? onClose : onOpen}
//           />
          
//         </Flex>

//         {isOpen ? (
//           <Box pb={4} display={{ md: 'none' }}>
//             <Stack as={'nav'} spacing={4}>
//               {Links.map((link) => (
//                 <NavLink key={link}>{link}</NavLink>
//               ))}
//             </Stack>
//           </Box>
//         ) : null}
     

//     </>
//   );
// }