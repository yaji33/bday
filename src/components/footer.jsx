import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='w-full h-20 flex flex-col justify-center items-center'>
      <h1>Developed by Yaji</h1>
      <div className='flex items-center'>
        <a href="https://www.facebook.com/jay.bombales.1" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} className='text-blue-600 text-2xl mx-2 hover:text-blue-800' />
        </a>
        <a href="https://github.com/yaji33" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className='text-gray-700 text-2xl mx-2 hover:text-gray-900' />
        </a>
      </div>
      <p className='text-sm text-gray-500'>&copy; {new Date().getFullYear()} Yaji. All rights reserved.</p>
    </div>
  );
}

export default Footer;
