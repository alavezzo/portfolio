import { Box, Flex, Stack, Text, useColorModeValue } from '@chakra-ui/react';

export default function WithLargeQuote() {
  return (
    <Flex w="80%">
    <Stack
      bg={useColorModeValue('gray.50', 'gray.800')}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={'center'}
      direction={'row'}>
    <Box>
      <Text
        fontSize={{ base: 'xl', md: '2xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
      =enim ad dolor. Esse voluptate tempor eu deserunt culpa laboris enim nisi. Officia consectetur incididunt aliquip reprehenderit commodo mollit nostrud. Anim velit laborum eiusmod nostrud quis nulla dolor amet irure.
      </Text>
    </Box>
      <Box>
        <img src={require('../../assets/icon/my_character.svg').default}/>
        </Box>
    </Stack>
    </Flex>
  );
}