import React, { useState } from 'react'
import assets from '../../assets/assets';

import './NavBar.css'
import { BiSearch } from 'react-icons/bi';
import { SlBasket } from "react-icons/sl";
import { Link } from 'react-router-dom';


const Navbar = ({setShowLogin}) => {

      const [menu , setMenu] = useState("home");



  return (
    <div className='navbar'>
      <Link to="/"><img src={assets.logo} alt=""  className='logo'/></Link>
      <ul className="navbar-menu">
          <Link to='/' onClick={()=>setMenu("home")} className={menu === "home" ? "active": ""}>home</Link>
          <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
          <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
          <a href='#footer' onClick={()=>setMenu("contact us")} className={menu === "contact us" ? "active" : ""}>contact us </a>
      </ul>
      <div className="navbar-right">
        <BiSearch className='search'/>
        <div className="navbar-SearchIcon">
         <Link to="/cart"><SlBasket className='basket'/></Link> 
          <div className="dot">          
          </div>
        </div>
        <button onClick={()=>setShowLogin(true)}>sign in</button>
      </div>
    </div>
  )
}

export default Navbar