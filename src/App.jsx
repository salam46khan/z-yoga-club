import React from 'react';
import Hero from './page/Hero/Hero';
import About from './page/About/About';
import Why from './page/Why/Why';
import Membership from './page/Membership/Membership';
import Class from './page/Class/Class';

const App = () => {
  return (
    <div className='myFont'>
      <Hero></Hero>
      <About></About>
      <Why></Why>
      <Membership></Membership>
      <Class></Class>
    </div>
  );
};

export default App;