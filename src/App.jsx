import { Routes ,Route} from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import PlaceOrder from './Pages/PlaceOrder/placeorder';
import Footer from './Components/Footer/footer';
import { useState } from 'react';
import LoginPopUp from './Components/LoginPopUp/loginpopup';




function App() {

    const [showLogin, setShowLogin] = useState(false);

  return (
    <>
    {showLogin ? <LoginPopUp setShowLogin={setShowLogin}/> :<></>}
    <div className='app'>
      <NavBar setShowLogin ={setShowLogin} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/placeorder' element={<PlaceOrder />} />
      </Routes>
    </div>
    <Footer/>
    </>
  );
}

export default App;
