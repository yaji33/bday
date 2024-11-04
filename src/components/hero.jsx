import React from 'react';
import '../index.css';
import jhona from '../assets/jhona1.png';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div id="hero" className='bg-black w-full min-h-screen flex items-center justify-center hero-background'>
      <div className='flex flex-col md:flex-row w-full items-center justify-center space-x-0 md:space-x-8 mx-4 md:mx-40'>
        <div className='flex-1 flex justify-center mb-8 md:mb-0'>
          {/* Adjusted the image size for mobile screens */}
          <img src={jhona} alt="Jhona" className='w-86 h-86 md:w-auto md:h-auto relative z-10' />
        </div>
        <div className='flex-1 flex flex-col items-center md:items-end justify-center z-10 text-center md:text-right'>
          <h1 className='text-4xl md:text-8xl text-white font-playfair mb-4 md:mb-0'>Happy Jhona Day!</h1>
          <button className='mt-8 md:mt-52 px-8 md:px-16 py-2 text-white bg-none border'>
            <Link to="greet" smooth={true} duration={500} className="cursor-pointer text-mid py-2 px-8 rounded-lg"> Greet her!</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
