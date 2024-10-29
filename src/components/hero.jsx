import React from 'react';
import '../index.css';
import jhona from '../assets/jhona.png';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div id="hero" className='bg-black w-full min-h-screen flex items-center justify-center hero-background'>
      <div className='flex w-full items-center justify-center space-x-8 mx-40'>
        <div className='flex-1 flex justify-center'>
          <img src={jhona} alt="Jhona" className='relative z-10' />
        </div>
        <div className='flex-1 flex flex-col items-end justify-center z-10'>
          <h1 className='text-9xl text-white text-right flex font-playfair'>Jhona Turns 21!</h1>
          <button className='mt-52 px-16 justify-center flex py-2 text-white bg-none border'>
            <Link to="greet" smooth={true} duration={500} className="cursor-pointer text-mid"> Greet her!</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
