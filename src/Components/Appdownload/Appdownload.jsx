import React from 'react'
import './appdownload.css'
import { FaAppStore } from 'react-icons/fa'
import { IoLogoGooglePlaystore } from 'react-icons/io5'


const Appdownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>For Better Experience Download  <br /> Pizzaro App</p>
      <div className="app-download-platform">
         <IoLogoGooglePlaystore/>
         <FaAppStore/>
      </div>
    </div>
  )
}

export default Appdownload