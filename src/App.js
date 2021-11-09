import React, { useState } from 'react';
import loadable from '@loadable/component'
import { VStack } from "@chakra-ui/react"
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';
import Modal from './components/Model';

// import ContactForm from './components/Contact'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useColorModeValue } from '@chakra-ui/color-mode';

const ContactForm = loadable(() => import('./components/Contact')) ;
const Portfolio = loadable(() => import('./components/Portfolio')) ;
const Hero = loadable(() => import('./components/Hero'));


function App() {

  const toggleModal = () => {
    setIsResumeOpen(!isResumeOpen);
  };

  const [home, setHome] = useState(true)
  const [isResumeOpen, setIsResumeOpen] = useState(false)

  return (
 
    <Router>
    <VStack bg={useColorModeValue('platinum', 'darkPurple')} p={10}>
      <Header home={home} setHome={setHome} />
      {isResumeOpen && <Modal onClose = {toggleModal} setIsResumeOpen={setIsResumeOpen}/>}
      <Routes>
          <Route path="/" element={<Hero setIsResumeOpen={setIsResumeOpen} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer home={home} setIsResumeOpen={setIsResumeOpen} ></Footer>
    </VStack>
    </Router>
  );
}

export default App;
