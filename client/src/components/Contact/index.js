import React, { useState } from 'react';
import { FormLabel, Input} from '@chakra-ui/react'

const ContactForm = () => {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage ] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
                if(!isValid) {
                    setErrorMessage('Your email is invalid.')
                }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`Please enter ${e.tartget.name}`)
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value})
        }
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    const {name, email, message } = formState;

    return (
        <section>
        <form id="contact-form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" defaultValue={name} onBlur={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="email">Email address:</label>
                        <input type = "email" name="email" defaultValue={email} onBlur={handleChange}></input>
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange}/>
                    </div>
                    {errorMessage && (
                            <div>
                                <p className="error-text">{errorMessage}</p>
                            </div>
                    )}
                    <button data-testid='button' type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;