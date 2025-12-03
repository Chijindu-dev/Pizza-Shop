import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/header';
import ExploreMenu from '../../Components/ExploreMenu/exploremenu';


const Home = () => {

    const [catergory, setCategory] = useState("All")
   
  return (
    <div>
        <Header />
        <ExploreMenu catergory={catergory} setCategory={setCategory} />
    </div>
  )
}

export default Home