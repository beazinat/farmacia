import React from 'react';
import './App.css';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import ListarCategorias from './components/categorias/listarCategorias/ListarCategorias';
import ListarProdutos from './components/produtos/listarProdutos/ListarProdutos'
import FormCategoria from './components/categorias/formCategoria/FormCategoria';
import FormProduto from './components/produtos/formProduto/FormProduto'
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria';
import DeletarProduto from './components/produtos/deletarProduto/DeletarProduto';

function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
            <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/produtos" element={<ListarProdutos />} />
              <Route path="/criarProduto" element={<FormProduto />} />
              <Route path="editarProduto/:id" element={<FormProduto />} />
              <Route path="deletarProduto/:id" element={<DeletarProduto />} />
              <Route path="/categorias" element={<ListarCategorias />} />
              <Route path="/criarCategoria" element={<FormCategoria />} />
              <Route path="editarCategoria/:id" element={<FormCategoria />} />
              <Route path="deletarCategoria/:id" element={<DeletarCategoria />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  );
}
export default App;