import React from 'react';
import Hero from './page/Hero/Hero';
import About from './page/About/About';
import Why from './page/Why/Why';
import Membership from './page/Membership/Membership';
import Class from './page/Class/Class';
import Event from './page/Events/Event';
import Team from './page/Team/Team';
import Testimonials from './page/Testimonials/Testimonials';
import Practice from './page/Practice/Practice';
import Faq from './page/FAQs/Faq';
import Contact from './page/Contact/Contact';
import Footer from './page/Footer/Footer';
import Navbar from './page/Navbar/Navbar';
import Headroom from 'react-headroom';
import LocomotiveScroll from 'locomotive-scroll';

const locomotiveScroll = new LocomotiveScroll();

const App = () => {
  return (
    <div className='myFont relative overflow-hidden'>
      
      <Hero></Hero>
      <About></About>
      <Why></Why>
      <Membership></Membership>
      <Class></Class>
      <Event></Event>
      <Testimonials></Testimonials>
      <Team></Team>
      <Practice></Practice>
      <Faq></Faq>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default App;