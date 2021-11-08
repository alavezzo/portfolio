import { Button, Box, Image, Flex, useColorModeValue, Text } from '@chakra-ui/react';


export default function About() {
  
  

  return (
    <Flex w="80%" direction={['column', 'column', 'row', 'row']} align={'center'}>
        <Box>
        <Text
            color={useColorModeValue('darkPurple','platinum')}
            fontSize={{ base: 'xl', md: '2xl' }}
            textAlign={'center'}
            maxW={'3xl'}>
        Full Stack Engineer. Product Manager at Develop For Good, The Pathway Initiative.
        </Text>
        <Button>Resume</Button>

        </Box>
        <Box>
        <Image maxH='50%' alignSelf='center' src={require('../../assets/icon/my_character.svg').default}/>
        </Box>
    </Flex>
  );
}