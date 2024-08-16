import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {



    return (
        <>
            <div className='w-full bg-[#90D6EF] text-gray-800 flex justify-center py-4'>
                <div className="container flex justify-between text-lg">
                    <div className='text-2xl font-bold uppercase'>Gen Farma</div>

                    <div className='flex gap-4'>
                    <Link to='/' className='hover:text-purple-500 hover:font-bold'>Home</Link>
                    <Link to='/produtos' className='hover:text-purple-500 hover:font-bold'>Todos os Produtos</Link>
                    <Link to='/categorias' className='hover:text-purple-500 hover:font-bold'>Categorias de Produtos</Link>
                    <Link to='/criarcategoria' className='hover:text-purple-500 hover:font-bold'>Cadastrar Categorias</Link>
                    <Link to='/criarproduto' className='hover:text-purple-500 hover:font-bold'>Cadastrar Produtos</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar