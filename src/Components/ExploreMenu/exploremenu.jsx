import React from 'react';
import { Menu_list } from '../../assets/assets';
import './exploremenu.css';




const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Our Menu</h1>

      <p className='explore-menu-text'>
        Explore our menu filled with freshly baked pizzas, bold flavors, and delicious combinations crafted to bring comfort, excitement, and unforgettable taste in every bite.
      </p>

      <div className="explore-menu-list">
        {Menu_list.map((menu, index) => {
          return (
            <div
              className="explore-menu-item"
              key={index}
              onClick={()=> setCategory(prev => prev === menu.menu_name ?"All" : menu.menu_name)}
            >
              <img 
                src={menu.menu_image} 
                alt={menu.menu_name} 
                className={category === menu.menu_name ?"Active" : ""} 
              />
              <p>{menu.menu_name}</p>
            </div>
          );
        })}
      </div>

      <hr />
    </div>
  );
};

export default ExploreMenu;
