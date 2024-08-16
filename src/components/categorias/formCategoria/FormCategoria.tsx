import React, { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import { atualizar, buscar, cadastrar } from '../../../services/Service';

function FormularioCategoria() {
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        await buscar(`/categorias/${id}`, setCategoria);
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value,
        });
        console.log(JSON.stringify(categoria));
    }

    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        if (id !== undefined) {
            try {
                await atualizar(`/categorias`, categoria, setCategoria);
                alert('Categoria atualizada com sucesso');
            } catch (error) {
                alert('Erro ao atualizar a categoria');
            }
        } else {
            try {
                await cadastrar(`/categorias`, categoria, setCategoria);
                alert('Categoria cadastrada com sucesso');
            } catch (error) {
                alert('Erro ao cadastrar a categoria');
            }
        }

        retornar();
    }

    function retornar() {
        navigate('/categorias');
    }

    return (
        <div className="flex justify-center bg-[#90D6EF] text-gray-800">
            <div className="container flex flex-col items-center py-4">
                <h2 className='text-xl font-bold'>Cadastrar Categoria</h2>
                <form
                    onSubmit={gerarNovaCategoria}
                    className="w-1/3 flex flex-col gap-4"
                >
                    <input
                        type="text"
                        name="nome"
                        id="nome"
                        placeholder="Nome da categoria"
                        value={categoria?.nome}
                        onChange={atualizarEstado}
                        className="border rounded-lg p-2"
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    );
}