import React from 'react';
import '../index.css';
import jhona from '../assets/jhona.png';

const Hero = () => {
  return (
    <div id="hero" className='bg-black w-full min-h-screen flex items-center justify-center hero-background'>
      <div className='flex w-full items-center justify-center space-x-8 mx-24'>
        <div className='flex-1 flex justify-center'>
          <img src={jhona} alt="Jhona" className='relative z-10' />
        </div>
        <div className='flex-1 flex flex-col items-end justify-center z-10'>
          <h1 className='text-9xl text-white text-right flex'>Jhona Turns 21!</h1>
          <button className='mt-52 px-20 justify-center flex py-2 text-white bg-none border'>Greet her!</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
