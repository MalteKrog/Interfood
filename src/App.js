import './App.css';
import { Route, Routes, NavLink } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProductPage from './pages/ProductPage';
import Footer from './components/Footer'

function App() {
  return (
    <div>

      {/* Skal vi ikke lave et nav component? */}
      <NavLink to="/">
          Hjem
      </NavLink>
      <NavLink to="/products">
          Produkter
      </NavLink>
      <NavLink to="/about">
          Om os
      </NavLink>
      <NavLink to="/contact">
          Kontakt
      </NavLink>            
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/products" element={<ProductPage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
