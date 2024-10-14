import React from 'react';
import MovieLogo from '../assets/MovieLogo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-4'>
        <img className='w-[50px]' src={MovieLogo} alt="Movie Logo"/>

        <Link to="/" className='text-blue-400 text-3xl font-bold'>Movies</Link>

        <Link to="/watchlist" className='text-blue-400 text-3xl font-bold'>WatchList</Link>

    </div>
  )
}

export default NavBar