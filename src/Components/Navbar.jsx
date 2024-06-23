import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <Link to='/'><a className="btn btn-ghost text-xl">Resumeo.ai</a></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      
      <Link to='/about'><li><a>About us</a></li></Link>
      <li>
        <details>
          <summary>Build your resume</summary>
          <ul className="p-2">
            <li><a>Build it yourself</a></li>
            <li><a>Build with AI</a></li>
          </ul>
        </details>
      </li>
      <Link to='faq'><li><a>FAQ</a>
      </li></Link>
    </ul>
  </div>
  <div className="navbar-end mr-5">
    <Link to='/login' className="btn bg-purple-300">Sign in</Link>
  </div>
</div>
  
  );
}

export default Navbar