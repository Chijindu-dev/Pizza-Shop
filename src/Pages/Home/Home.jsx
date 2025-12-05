import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/header';
import ExploreMenu from '../../Components/ExploreMenu/exploremenu';
import FoodDisplay from '../../Components/FoodDisplay/foodDisplay';


const Home = () => {

    const [category, setCategory] = useState("All")
   
  return (
    <div>
        <Header />
        <ExploreMenu category={category} setCategory={setCategory} />
        <FoodDisplay category={category}/>
    </div>
  )
}

export default Home