import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/header';
import ExploreMenu from '../../Components/ExploreMenu/exploremenu';
import FoodDisplay from '../../Components/FoodDisplay/foodDisplay';


const Home = () => {

    const [catergory, setCategory] = useState("All")
   
  return (
    <div>
        <Header />
        <ExploreMenu catergory={catergory} setCategory={setCategory} />
        <FoodDisplay catergory={catergory}/>
    </div>
  )
}

export default Home