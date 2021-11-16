import React from 'react';
import './App.css';

import Nav from './components/Nav';
import Banner from './components/Banner';
import Noticias from './components/Noticias';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Nav />
      <Banner />
      <Noticias />
      <Footer />
    </>
  );
}

export default App;
