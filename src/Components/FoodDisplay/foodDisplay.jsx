import React, { useContext } from 'react'
import "./foodDisplay.css"
import { StoreContext } from '../../Context/StoreContext'
import Fooditem from '../FoodItem/Fooditem'


const FoodDisplay = ({category}) => {

    const { Food_List } = useContext(StoreContext)

  return (
    <div className='foodDisplay' id='foodDisplay'>
        <h2>Top dishes near you</h2>
        <div className="food-display-list">
            {Food_List.map((item, index)=>{
                return <Fooditem key={index} id={item.id} name={item.name} price={item.price} description={item.description} image={item.image}/>
            })}
        </div>
    </div>
  )
}

export default FoodDisplay