import React from 'react';
import { Text, Icon, Box, Circle, Image, Flex, Link } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { FaGithub } from 'react-icons/fa';


const Project = (props) => {

        
    return (
            <Flex p={50} alignItems="center" justifyContent="center">
                    <Box
                        className="gradient" 
                        bg={useColorModeValue('_','midnightGreen')}
                        _hover= {{ boxShadow: "dark-lg"}}
                        maxW="sm"
                        borderWidth="1px"
                        rounded="lg"
                        shadow="lg"
                        position="relative">
                        <Circle
                            size="20px"
                            position="absolute"
                            top={4}
                            right={4}
                            bg="red.200"
                        ><Link href={props.github} isExternal>
                        <Icon as={FaGithub}/>
                        </Link> </Circle>
                        <Image
                            height="25vh"
                            src={require(`../../assets/projects/${props.name}.png`).default}
                            alt={props.alt}
                            roundedTop="lg"
                        />
                        <Link href={props.href} isExternal>
                        <Box p="8">
                            <Box d="flex" alignItems="baseline">
                                <Text color={useColorModeValue('platinum')} m={"auto"}>
                                    {props.name}
                                </Text>
                            </Box>
                        </Box>
                        </Link>
                    </Box>
             
                </Flex>
        )
    }

export default Project;