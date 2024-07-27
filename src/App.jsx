import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Programs from './components/programs/programs';
import Titel from './components/Titel/Titel';
import About from './components/About/About';
import Campus from './components/campus/Campus';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
   <Navbar/>
   <Hero/>
   <div className='container'>
    {/*IN TITEL WE ARE PASSING PROPS, CHILD CLASS USE FROM PARRENT CLASS*/}
   <Titel subTitel="OUR PROGRAM" titel="WHAT WE OFFER"/>
   <Programs/>
   <About setPlayState={setPlayState}/>
   {/* (DUE TO PROPS) dobara titel likha hai, simple ya kea hai os ko (about) k necha new txt dia hai, we can do this due to props */}
   <Titel subTitel="Gallery" titel="Campus Photos"/>
   <Campus/>
   {/*pass another by the help of props */}
   <Titel subTitel="TESTIMONIALS" titel="What Student Says"/>
   <Testimonials/>
   <Titel subTitel="Contact us" titel="Get in touch"/>
   </div>
   <Contact/>
   
   <Footer/>
   
    </div>
  );
}

export default App;
