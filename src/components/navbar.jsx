import React from "react";
import logo from '../Logo.svg'
import {BtnText} from './css/style'
import '../App.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a href="#break" className="navbar-brand d-flex">
        <img className='icon m-2' src={logo} alt=""/>
        
        <BtnText style={{color: '#1b2a4d'}} className="m-2">ZeroToHero</BtnText>
        
      </a>
    </nav>
  );
};

export default Navbar;
