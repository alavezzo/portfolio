import React, { useState } from 'react';
import { FormControl, Box, FormLabel, Input, Textarea, Button, Spacer} from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/color-mode';
import { createContact  } from '../../utils/API';

const ContactForm = () => {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const {name, email, message } = formState;

    function handleChange(e) {

        setFormState({...formState, [e.target.id]: e.target.value})
        console.log(formState)

    }
    function handleSubmit(e) {
        e.preventDefault();
        
        try {
            const response = createContact(formState);

            if (!response.ok) {
                throw new Error('something went wrong')
            }  
        } catch (err) {
            console.error(err)
        }

        setFormState({
            name: '',
            email: '',
            message: '',
          });
    }

    return (
        <>
        <Spacer padding="5vh"></Spacer>
        <Box p='4' borderRadius='md' shadow='outline' bg={useColorModeValue('darkPurple', 'midnightGreen')} w="50%">
            <form onSubmit={handleSubmit}>
                    <FormControl isRequired >
                        <FormLabel color={useColorModeValue('platinum')} htmlFor="name">Name:</FormLabel>
                        <Input bg='platinum' type="text" id="name" value={name} onChange={handleChange} onBlur={handleChange} ></Input>
                    </FormControl>
                    <FormControl mt="2vh" isRequired>
                        <FormLabel color={useColorModeValue('platinum')} htmlFor="email">Email address:</FormLabel>
                        <Input bg='platinum' type = "email" id="email" value={email} onChange={handleChange}></Input>
                    </FormControl>
                    <FormControl mt="2vh" isRequired>
                        <FormLabel color={useColorModeValue('platinum')} htmlFor="message">Message:</FormLabel>
                        <Textarea bg="platinum" id="message" rows="5" value={message} onChange={handleChange}/>
                    </FormControl>
                    <Button color={useColorModeValue('midnightGreen', 'darkPurple')} bg={useColorModeValue('platinum', 'platinum')} mt="2vh" data-testid='button' type="submit">Submit</Button>
            </form>
        </Box>
        <Spacer padding="4vh"></Spacer>
        </>
    )
}

export default ContactForm;