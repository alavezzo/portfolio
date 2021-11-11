import { extendTheme } from "@chakra-ui/react";

const config = {
    initialColorMode: "light",
    useSystemColorMode: false,
}

export const theme = extendTheme({
    colors: {
        darkPurple: '#351431',
        rossoCorso: '#21A0A0',
        rocketMetallic: '#887880',
        midnightGreen: '#02394A',
        platinum: '#DFE0DC',
        end: '#02444A'
    },
    config
})