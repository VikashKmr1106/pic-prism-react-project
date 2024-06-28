
import { BrowserRouter , Route ,Routes } from 'react-router-dom'

import './App.css'
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SellerDashboard from './pages/SellerDashboard';
import BuyerDashboard from './pages/BuyerDashboard';
import Navbar from './components/Navbar';
// import HeroSection from './components/HeroSection';

function App() {


  return (
    <>
      <BrowserRouter>
      <Navbar/>
         <Routes>
            <Route path='/' element={<Home/>} />
            {/* <Route path='/' element={<HeroSection/>} /> */}
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/seller/profile' element={<SellerDashboard/>} />
            <Route path='/buyer/profile' element={<BuyerDashboard/>} />
         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
