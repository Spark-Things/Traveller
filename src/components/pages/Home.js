import '../../App.css';

import React from 'react';
import Herosection from '../Herosection';
import Cards from '../Cards';
import Navbar from '../Navbar';
import Footer from './Footer';

function Home() {
  return (
    <>
    <Navbar/>
    <Herosection/>
    <Cards/>
    <Footer/>
    </>
  );
}

export default Home;
