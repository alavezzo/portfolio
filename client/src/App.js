import React from 'react';
import { VStack } from "@chakra-ui/react"
import Footer from './components/Footer';
import Hero from './components/Hero';
import Header from './components/Header';


function App() {

  return (
    <VStack p={10}>
      <Header></Header>
      <Hero></Hero>
      <Footer></Footer>

    </VStack>
  );
}

export default App;
