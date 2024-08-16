import React from 'react';
import './App.css';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import ListaCategorias from './components/categorias/listarCategorias/ListarCategorias';
import ListaProdutos from './components/produtos/listaProdutos/ListaProdutos'


function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
            <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/produtos" element={<ListaProdutos />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  );
}
export default App;