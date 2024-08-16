import React from 'react';
import { Link } from 'react-router-dom';
import Produto from '../../../models/Produto';

interface CardProdutoProps {
    produto: Produto;
}

export default function CardProduto({ produto }: CardProdutoProps) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg[#90D6EF] text-gray-800 font-bold text-2xl'>
                Produto
            </header>
            <p className='p-8 text-3xl bg-slate-200 h-full'>{produto.nome}</p>
            <div className='p-8 text-xl bg-slate-100 h-full'>{produto.descricao}</div>
            <div className="flex">
                <Link to={`/editarCategoria/${produto.id}`} className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>
                <Link to={`/deletarCategoria/${produto.id}`} className='text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    );
}