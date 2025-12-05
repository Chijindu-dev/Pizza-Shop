import { createContext, useEffect, useState} from "react";
import { Food_List } from "../assets/assets";



export const StoreContext = createContext(null)

const StoreContextProvider = (props) =>{

    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
        if(cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}) )
        }
    }


    const RemoveFromCart =(itemId)=>{
        setCartItems(()=>({...prev,[itemId]:prev[itemId]-1}))
    }


    useEffect(()=>{
        console.log("Cart Items:",cartItems);
    },[cartItems])



    const ContextValue  = {
        Food_List,
        cartItems,
        setCartItems
        ,addToCart
        ,RemoveFromCart
    }
    

    return(
        <StoreContext.Provider value={ContextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider





