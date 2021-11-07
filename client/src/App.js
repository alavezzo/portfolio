import React from 'react';
import { VStack } from "@chakra-ui/react"
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ContactForm from './components/Contact';
// import ContactForm from './components/Contact'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {

  return (
  
    <Router>
    <VStack p={10}>
      <Header />
      <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactForm />} />
      </Routes>
      <Footer></Footer>
    </VStack>
    </Router>

  );
}

export default App;
