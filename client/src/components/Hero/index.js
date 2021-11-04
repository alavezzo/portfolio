import { Stack, Circle, Flex, Box, Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { useMediaQuery } from '@chakra-ui/media-query';
import { useColorMode } from '@chakra-ui/color-mode'
import React from 'react';


const Hero = () => {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
            <Stack>
                <Circle position="absolute" bg="blue.100" opacity="0.1" alignSelf="flex-end" w="300px" h="300px"/>
                <Flex direction={isNotSmallerScreen ? "row" : "column"}
                    spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
                    alignSelf="flex-start">
                    <Box mt={isNotSmallerScreen ? "0" : 16} align='flex-start'>
                        <Text fontSize="5xl" fontWeight="semiBold">Hi, I am</Text>
                        <Text fontSize="7xl" fontWeight="Bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"bgClip="text" >Anthony</Text>
                        <Text>Sunt aliqua irure commodo non esse duis irure. Ex proident aliqua cupidatat irure irure culpa aliqua aliqua incididunt officia elit. Exercitation amet officia anim in aute. Aliqua reprehenderit qui in nulla quis.</Text>
                        <Button>Hire Me</Button>
                        </Box>  
                        <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
                        mb={isNotSmallerScreen ? "0" : "12"} borderRadius='full'
                        backgroundColor="transparent" boxShadow="lg"
                        boxSize="300px" src='https://avatars.githubusercontent.com/u/84944528?v=4' />
                </Flex> 
            </Stack>
    )
}

export default Hero;