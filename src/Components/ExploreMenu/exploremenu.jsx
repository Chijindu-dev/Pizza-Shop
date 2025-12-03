import React from 'react'
import { Menu_list } from '../../assets/assets'
import './exploremenu.css'




const exploremenu = () => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Menu</h1>
        <p className='explore-menu-text'>Explore our menu filled with freshly baked pizzas, bold flavors, and delicious combinations crafted to bring comfort, excitement, and unforgettable taste in every bite.</p>
        <div className="explore-menu-list">
        {Menu_list.map((menu,index)=>{
            return(
                <div className="explore-menu-item" key={index}>
                    <img src={menu.menu_image} alt=""  className='img'/>
                    <p>{menu.menu_name}</p>
                </div>
            )
        })}
        </div>
    </div>
  )
}

export default exploremenu