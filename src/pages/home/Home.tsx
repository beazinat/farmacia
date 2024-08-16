import React from 'react';
import homeLogo from '../../assets/home.jpg'
import './Home.css';


function Home() {
    return (
        <>
            <div className="bg-[#90D6EF] flex justify-center">
                <div className='container grid grid-cols-2 text-gray-800'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>Seja bem vinde à Gen Farma!</h2>
                        <p className='text-xl'>Gerando vidas mais saudáveis</p>

                        <div className="flex justify-around gap-4">

                            <button className='rounded bg-gray-200 text-blue-600 py-2 px-4'>Ver todos os produtos</button>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img src={homeLogo} alt="" className='w-2/3' />

                    </div>
                </div>
            </div>

        </>
    );
}

export default Home;