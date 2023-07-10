import { useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import Cases from './components/Cases';
import Opinions from './components/Opinions';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Hero />
      <Cases />
      <Opinions />
      <Footer />
    </>
  );
}

export default App;
