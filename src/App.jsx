import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import Footer from './components/Footer/Footer'
import AppDownload from './components/AppDownload/AppDownload'
import { useState } from 'react'
import LoginPopup from './components/LoginPopup/LoginPopup'
function App() {
  const [showlogin, setShowlogin] = useState(false);
  return (
    <>
      {showlogin ? <LoginPopup setShowlogin={setShowlogin} /> : <></>}
      <div className='app'>
        <Navbar setShowlogin={setShowlogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
        </Routes>
      </div >
      <AppDownload />
      <Footer />
    </>

  )
}

export default App
