import React, { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Produto from '../../../models/Produto';
import { buscar, cadastrar, atualizar } from '../../../services/Service';

export default function FormProduto() {
    const [produto, setProduto] = useState<Produto>({
        id: 0,
        nome: '',
        descricao: '',
        quantidade: 0,
        laboratorio: '',
        preco: 0.0,
        foto: '',
        categoria: null
    });

    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        await buscar(`/produtos/${id}`, setProduto);
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        setProduto({
            ...produto,
            [e.target.name]: e.target.value
        });
    }

    async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        if (id !== undefined) {
            try {
                await atualizar(`/produtos`, produto, setProduto);

                alert('Produto atualizado com sucesso');
                retornar();
            } catch (error) {
                alert('Erro ao atualizar o produto');
            }
        } else {
            try {
                await cadastrar(`/produtos`, produto, setProduto);

                alert('Produto cadastrado com sucesso');
                retornar();
            } catch (error) {
                alert('Erro ao cadastrar o produto');
            }
        }
    }

    function retornar() {
        navigate('/produtos');
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">
                {id === undefined ? 'Cadastre um novo produto' : 'Editar produto'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovoProduto}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="nome">Nome do Produto</label>
                    <input
                        type="text"
                        name="nome"
                        className="border-2 border-slate-700 rounded p-2"
                        value={produto.nome}
                        onChange={atualizarEstado}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Descrição</label>
                    <input
                        type="text"
                        name="descricao"
                        className="border-2 border-slate-700 rounded p-2"
                        value={produto.descricao}
                        onChange={atualizarEstado}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="quantidade">Quantidade</label>
                    <input
                        type="number"
                        name="quantidade"
                        className="border-2 border-slate-700 rounded p-2"
                        value={produto.quantidade}
                        onChange={atualizarEstado}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="laboratorio">Laboratório</label>
                    <input
                        type="text"
                        name="laboratorio"
                        className="border-2 border-slate-700 rounded p-2"
                        value={produto.laboratorio}
                        onChange={atualizarEstado}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="preco">Preço</label>
                    <input
                        type="number"
                        step="0.01"
                        name="preco"
                        className="border-2 border-slate-700 rounded p-2"
                        value={produto.preco}
                        onChange={atualizarEstado}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="foto">URL da Foto</label>
                    <input
                        type="text"
                        name="foto"
                        className="border-2 border-slate-700 rounded p-2"
                        value={produto.foto}
                        onChange={atualizarEstado}
                    />
                </div>

                <button
                    className="rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto block"
                    type="submit"
                >
                    {id === undefined ? 'Cadastrar' : 'Editar'}
                </button>
            </form>
        </div>
    );
}
