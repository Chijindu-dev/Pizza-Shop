import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext";
import { BsX } from "react-icons/bs";

const Cart = () => {
  const { cartItems, Food_List, RemoveFromCart } = useContext(StoreContext);

  return (
    <div className="Cart">
      <div className="cart-Items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {Food_List.map((items, index) => {
          if (cartItems[items.id] > 0) {
            return (
              <>
                <div className="cart-items-title  cart-items-item">
                  <img src={items.image} alt={items.title} />
                  <p>{items.name}</p>
                  <p>${items.price}</p>
                  <p>{cartItems[items.id]}</p>
                  <p>${items.price * cartItems[items.id]}</p>
                  <BsX className="Cancel" onClick={()=>RemoveFromCart(items.id)} />
                </div>
                <hr />
              </>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Cart;
