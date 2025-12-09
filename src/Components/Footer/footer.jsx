import React from 'react'
import "./footer.css"
import assest from "../../assets/assets"
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa'
import { BsTwitterX } from 'react-icons/bs'





const footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className="footer-content-left">
              <img src={assest.logo} alt="#" />
              <p>We craft every pizza with fresh ingredients and real flavor, delivering hot, delicious slices that keep you coming back for more</p>
              <div className="footer-social-icons">
                <FaFacebook/>
                <BsTwitterX/>
                <FaLinkedinIn/>
              </div>
        </div>

        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
            </ul>
        </div>

        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
              <li>+234 81-3132-3623</li>
              <li>contact@pizzaro.com</li>

            </ul>
        </div>

      </div>
        <hr />
        <p className='footer-copyright'>copyright 2025 @ Pizzaro.com - All Right Reserved..</p>
    </div>
  )
}

export default footer