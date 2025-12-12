import React from 'react'
import './Appdownload.css'
import assets from '../../assets/assets'


const Appdownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>For Better Experience Download  <br /> Pizzaro App</p>
      <div className="app-download-platform">
          <img src={assets.playstore} alt=""  className='play'/>
          <img src={assets.appstore} alt="" />
      </div>
    </div>
  )
}

export default Appdownload