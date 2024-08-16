import React, { useEffect, useState } from 'react';
import { DNA } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import Produto from '../../../models/Produto';
import { buscar } from '../../../services/Service';
import CardProduto from '../cardProduto/CardProduto';

export default function ListarProdutos() {
    const [produtos, setProdutos] = useState<Produto[]>([]);
    let navigate = useNavigate();

    async function buscarProdutos() {
        try {
            await buscar('/produtos', setProdutos);
        } catch (error) {
            alert('Erro ao buscar produtos');
        }
    }

    useEffect(() => {
        buscarProdutos();
    }, []);

    return (
        <>
            {produtos.length === 0 && (
                <div className="flex justify-center items-center">
                    <DNA
                        visible={true}
                        height="200"
                        width="200"
                        ariaLabel="dna-loading"
                        wrapperStyle={{}}
                        wrapperClass="dna-wrapper"
                    />
                </div>
            )}
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {produtos.map((produto) => (
                            <CardProduto key={produto.id} produto={produto} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
