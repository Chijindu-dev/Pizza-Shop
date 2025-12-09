import React from "react";
import { Menu } from "../../assets/assets.js";
import "./exploremenu.css";

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">
        Explore our menu filled with freshly baked pizzas, bold flavors, and
        delicious combinations crafted to bring comfort..
      </p>

      <div className="explore-menu-list">
        {Menu.map((menu, index) => {
          return (
            <div
              onClick={()=> setCategory(prev => prev === menu.menu_name ? "All" : menu.menu_name)}
              className="explore-menu-list-item" 
              key={index}
            >
              <img src={menu.menu_image} alt="#" className = {category === menu.menu_name ? "active" : ""}
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
