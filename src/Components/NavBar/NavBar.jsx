import React, { useState } from 'react'
import assets from '../../assets/assets';

import './NavBar.css'
import { BiSearch } from 'react-icons/bi';
import { SlBasket } from "react-icons/sl";


const Navbar = () => {

      const [menu , setMenu] = useState("home");



  return (
    <div className='navbar'>
      <img src={assets.logo} alt=""  className='logo'/>
      <ul className="navbar-menu">
          <li onClick={()=>setMenu("home")} className={menu === "home" ? "active": ""}>home</li>
          <li onClick={()=>setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</li>
          <li onClick={()=>setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</li>
          <li onClick={()=>setMenu("contact us")} className={menu === "contact us" ? "active" : ""}>contact us</li>
      </ul>
      <div className="navbar-right">
        <BiSearch className='search'/>
        <div className="navbar-SearchIcon">
          <SlBasket className='basket'/>
          <div className="dot">          
          </div>
        </div>
        <button>sign in</button>
      </div>
    </div>
  )
}

export default Navbar