import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProductPage from './pages/ProductPage';
import Footer from './components/Footer'
import Nav from './components/nav/Nav';

// Fonts
import "./assets/fonts/NeueHaasDisplayThin.ttf";
import "./assets/fonts/NeueHaasDisplayLight.ttf";
import "./assets/fonts/NeueHaasDisplayRoman.ttf";
import "./assets/fonts/NeueHaasDisplayMediu.ttf";
import "./assets/fonts/NeueHaasDisplayBold.ttf";
import "./assets/fonts/NeueHaasDisplayBoldItalic.ttf";

function App() {
  return (
    <div>
      <Nav />
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
