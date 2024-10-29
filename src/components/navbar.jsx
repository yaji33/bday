import React from 'react';
import '../index.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 w-full text-white z-50 navbar-bg'>
      <div className='flex items-center justify-between p-4'>
        <h1 className='text-2xl font-bold'>It's Jhona's Day!</h1>
        <ul className='flex space-x-8'>
          <li>
            <Link to="hero" smooth={true} duration={500} className="cursor-pointer text-mid">About</Link>
          </li>
          <li>
            <Link to="messages" smooth={true} duration={500} className="cursor-pointer text-mid">Messages</Link>
          </li>
          <li>
            <Link to="clips" smooth={true} duration={500} className="cursor-pointer text-mid">Clips</Link>
          </li>
          <li>
            <Link to="greet" smooth={true} duration={500} className="cursor-pointer text-mid">Greet</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
