import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SellerDashboard from './pages/SellerDashboard';
import BuyerDashboard from './pages/BuyerDashboard';
import Navbar from './components/Navbar';
import Footer from './pages/Footer';
import PageTransition from './components/PageTransition';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <PageTransition>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/seller/profile' element={<SellerDashboard />} />
          <Route path='/buyer/profile' element={<BuyerDashboard />} />
        </Routes>
      </PageTransition>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

