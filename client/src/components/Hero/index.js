import { Stack, Circle, Flex, Box, Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { useMediaQuery } from '@chakra-ui/media-query';
import { useColorMode } from '@chakra-ui/color-mode'
import React from 'react';


const Hero = () => {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
    // src='https://avatars.githubusercontent.com/u/84944528?v=4'
    return (
            <Stack pt="2">
                <Circle position="absolute" bg="blue.100" opacity="0.1" alignSelf="flex-end" w="300px" h="300px"/>
                <Flex direction={["column", "column", "row", "row"]}
                    spacing="200px" p={"0","0", "32", "32"}
                    alignSelf="flex-start">
                    <Box mt={"16", "16", "0", "0"} align='flex-start'>
                        <Text fontSize="5xl" fontWeight="semiBold">Hi, I am</Text>
                        <Text fontSize="7xl" fontWeight="Bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"bgClip="text" >Anthony</Text>
                        <Text>Sunt aliqua irure commodo non esse duis irure. Ex proident aliqua cupidatat irure irure culpa aliqua aliqua incididunt officia elit. Exercitation amet officia anim in aute. Aliqua reprehenderit qui in nulla quis.</Text>
                        </Box>  
                        <Image alignSelf="center" mt={"12", "12", "0", "0"}
                        mb={"12", "12", "0", "0"} borderRadius='full'
                        backgroundColor="transparent" boxShadow="lg"
                        boxSize="300px" src={require('../../assets/icon/my_character (1).svg').default} />
                </Flex> 
            </Stack>

    )
}

export default Hero;