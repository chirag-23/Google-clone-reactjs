import React from 'react';
import Center from '../components/home-center';
import Logo from '../components/Logo';
import Navbar from '../components/Navbar';

export const Home = () => {

  document.title='Google'
  return (
      <div style={{height:'70vh'}} >
        <Navbar/>
        <Logo/>
        <Center/>
      </div>
  )
};

export default Home;