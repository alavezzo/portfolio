import React, { useState } from 'react';
import { FaLinkedin, FaUserNinja, FaGithub } from 'react-icons/fa'
import { IconButton } from "@chakra-ui/button"
import { useColorMode } from "@chakra-ui/color-mode"


const Footer = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark"; 

    return (    

        <footer>

                <IconButton icon={isDark ? <FaUserNinja/> : <FaLinkedin /> } isRound="true" onClick={toggleColorMode}></IconButton>

                <IconButton icon={<FaGithub/>} isRound="true"></IconButton>

        </footer>
    )
}

export default Footer;