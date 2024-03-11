
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ProductPage from './pages/ProductPage';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import ProductDetail from './pages/ProductDetail';
import CategortPage from './pages/CategoryPage';


function App() {
  return (

    <BrowserRouter>
      <div className='page'>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/ürünler" element={<ProductPage />} />
          <Route path="/ürün/:id" element={<ProductDetail />} />

          {/* nested routes > iç içe yollar */}
          <Route path="/kategori" element={<CategortPage />}>
            <Route path="hikaye" element={<h1>HİKAYE</h1>} />
            <Route path="roman" element={<h1>ROMAN</h1>} />
          </Route>

          {/* tanımsız  bir route yönlenirse */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter >
  );
}

export default App;
