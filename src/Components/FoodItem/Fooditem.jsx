import { useContext } from 'react';
import assets from '../../assets/assets'
import { PiPlus } from 'react-icons/pi';
import { BiMinus } from 'react-icons/bi';
import { StoreContext } from '../../Context/StoreContext';
import "./Fooditem.css";




const Fooditem =({id,name,price,description,image}) => {

    const {cartItems,addToCart,RemoveFromCart} = useContext(StoreContext);


  return (
    <div className='Fooditem'>
        <div className="food-item-image-container">
            <img className='food-item-img' src={image} alt="" />
            {!cartItems[id]
                    ? <img src= {assets.Add} className="add" onClick={()=>addToCart(id)}/>
                    : <div className="food-item-counter">
                        <BiMinus className='minus' onClick={()=>RemoveFromCart(id)}/>
                            <p>{cartItems[id]}</p>
                        <PiPlus className='plus' onClick={()=>addToCart(id)}/> 
                    </div>
            }

        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.star} alt="star" />
            </div>
            <div className="food-item-description">{description}</div>
            <div className="food-item-price">${price}</div>
        </div>
    </div>
  )
}

export default Fooditem