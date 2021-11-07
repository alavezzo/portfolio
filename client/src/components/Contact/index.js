import React, { useState } from 'react';
import { FormControl, Box, FormLabel, Input, Textarea, Button} from '@chakra-ui/react'


const ContactForm = () => {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const {name, email, message } = formState;

    function handleChange(e) {

        setFormState({...formState, [e.target.id]: e.target.value})

    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState)
    }

    return (
        <Box pt="7vh" w="50%">
            <form onSubmit={handleSubmit}>
                    <FormControl isRequired >
                        <FormLabel htmlFor="name">Name:</FormLabel>
                        <Input type="text" id="name" defaultValue={name} onBlur={handleChange} ></Input>
                    </FormControl>
                    <FormControl mt="2vh" isRequired>
                        <FormLabel htmlFor="email">Email address:</FormLabel>
                        <Input type = "email" id="email" defaultValue={email} onBlur={handleChange}></Input>
                    </FormControl>
                    <FormControl mt="2vh" isRequired>
                        <FormLabel htmlFor="message">Message:</FormLabel>
                        <Textarea id="message" rows="5" defaultValue={message} onBlur={handleChange}/>
                    </FormControl>
                    <Button mt="2vh" data-testid='button' type="submit">Submit</Button>
            </form>
        </Box>
    )
}

export default ContactForm;