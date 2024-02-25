import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductDetails from './pages/ProductDetails';
import { Route, Routes } from 'react-router-dom';
import Contacts from './pages/Contacts';
import NotFound from './pages/NotFound';
import { ProductProvider } from './context/ProductContext';

function App() {
  return (
    <div>
      <ProductProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </ProductProvider>
    </div>
  );
}

export default App;
