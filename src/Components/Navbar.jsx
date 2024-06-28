import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import app from '../firebase.init'


const Navbar = () => {

  const [login,setLogin] = useState(true);

  useEffect(() => {
    if(sessionStorage.getItem("Email")){
      setLogin(false);
    }else{
      setLogin(true)
    }
  },[])

  const handleLogout = () => {
    sessionStorage.removeItem("Email");
    setLogin(true);
    const auth = getAuth(app);
    signOut(auth).then(() => {
      alert("Logged Out");
    }).catch((err) => {
      console.error(err);
    })
  }

  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <Link to='/'><a className="btn btn-ghost text-xl">Resumeo.ai</a></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      
      <Link to='/about'><li><a>About us</a></li></Link>
      <Link to='/dashboard'><li><a>Dashboard</a>
        {/* <details>
          <summary>Build your resume</summary>
          <ul className="p-2">
            <li><a>Build it yourself</a></li>
            <li><a>Build with AI</a></li>
          </ul>
        </details> */}
      </li></Link>
      <Link to='/faq'><li><a>FAQ</a></li></Link>
      {login ? (
        <>
        <Link to='/login'><li><a>Login</a></li></Link>
        </>
        ) : (
        <>
        <Link to='/login' onClick={handleLogout}>LogOut</Link>
        </>
        )}
    </ul>
  </div>
  <div className="navbar-end avatar placeholder mr-5">
    <div className="bg-neutral text-neutral-content w-12 rounded-full">
      
      <span className="text-xl">PK</span>
      
    </div>
  </div>


  {/* <div className="navbar-end mr-5">
    <Link to='/login' className="btn bg-purple-300">Sign in</Link>
  </div> */}
</div>
  
  );
}

export default Navbar