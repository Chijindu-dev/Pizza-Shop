import React from 'react'
import './header.css'
import bgVideo from '../../Assets/navbar.mp4'




const Header = () => {
  return (
    <div className='header'>
      
      {/* Background video */}
      <video className="bg-video" autoPlay loop muted playsInline>
        <source src={bgVideo} type="video/mp4" />
      </video>

      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>Choose from a diverse menu featuring an exciting selection of freshly prepared dishes from hearty classics and chef-crafted specialties to light, flavorful options inspired by cuisines from around the world. Every plate is made with quality ingredients, bold flavors, and the perfect balance of taste to satisfy every craving.</p>
        <button>Explore Menu</button>
      </div>

    </div>
  )
}

export default Header
