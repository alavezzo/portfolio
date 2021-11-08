import React from 'react';
import loadable from '@loadable/component'
import { VStack } from "@chakra-ui/react"
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';

// import ContactForm from './components/Contact'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useColorModeValue } from '@chakra-ui/color-mode';

const ContactForm = loadable(() => import('./components/Contact')) ;
const Portfolio = loadable(() => import('./components/Portfolio')) ;
const Hero = loadable(() => import('./components/Hero'));

function App() {

  return (
 
    <Router>
    <VStack bg={useColorModeValue('platinum', 'darkPurple')} p={10}>
      <Header />
      <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer></Footer>
    </VStack>
    </Router>
  );
}

export default App;
