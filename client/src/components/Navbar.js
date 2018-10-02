import React from 'react';
import { NavLink } from 'react-router-dom'




const Navbar = () =>{
  return(
  <div className='navbar'>
    <NavLink to='/' className="navbar navbar-light bg-light">Most Viewed</NavLink>
    <NavLink to='/techstories' className="navbar navbar-light bg-light">Tech Stories</NavLink>
    <NavLink to='/moviereview' className="navbar navbar-light bg-light">Movie Review</NavLink>
  </div>
  )
}


export default Navbar;
