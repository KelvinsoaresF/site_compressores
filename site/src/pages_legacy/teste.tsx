import Image from 'next/image'
import '../app/globals.css'
import Card from '@/components/Card'
import Header from '@/templates/Header';
import Footer from '@/templates/Footer';

import { compressorData } from "@/data/products"

type Params = {
    params:{
        id: string
    }
}

export default function Teste({params}: Params ) {
    const produtoId = parseInt(params.id)
    const produto = compressorData.find((item) => item.id === produtoId)



    const especificacoes = [
        { caracteristica: "Potência", detalhes: "de 3 a 400 HP" },
        { caracteristica: "Vazão de Ar (CFM)", detalhes: "de 8,5 a 420 CFM (varia conforme modelo e pressão)" },
        { caracteristica: "Pressão de Operação", detalhes: "100 a 175 psi (7 a 12 bar)" },
        { caracteristica: "Tecnologia", detalhes: "Parafuso rotativo com injeção de óleo" },
        { caracteristica: "Ruído", detalhes: "de 61 a 77 dBA — operação silenciosa" },
        { caracteristica: "Tensão", detalhes: "220V / 380V / 440V — trifásico" },
        { caracteristica: "Montagem", detalhes: "Base (BM), Tanque (TM), ou Tanque + Secador (TD)" },
        { caracteristica: "Refrigeração", detalhes: "Por ar (padrão); modelos maiores podem ter opção líquida" },
    ];

    return (
        <>
        <Header/>
        <div className="flex flex-col items-center p-4 md:p-8 bg-black min-h-screen w-full">
            {/* Top Section */}
            <div className="flex flex-col md:flex-row bg-white w-full max-w-7xl gap-6 h-full rounded-md p-6">
                <div className="w-full md:w-1/2">
                    <Image
                        src="/destaques/img1.jpg"
                        alt="Produto"
                        height={950}
                        width={950}
                        className="object-cover w-full h-full max-h-[400px] md:max-h-full rounded-md"
                    />
                </div>
                <div className='flex flex-col items-center justify-between w-full md:w-1/2 text-center'>
                    {/* <h2 className='text-black text-3xl md:text-5xl font-bold'>Compressores Rotativos de Parafuso - Chicago Pneumatic</h2> */}
                    <h2 className='text-black text-3xl md:text-5xl font-bold'>{produto?.name}</h2>
                    <button className='bg-red-500 font-bold text-white p-4 mt-6 md:mt-40 w-full max-w-[300px] rounded-full hover:scale-105 transition-transform'>
                        <p className='text-xl'>Contato</p>
                    </button>
                </div>
            </div>

            {/* Bottom Section */}
            <div className='flex flex-col lg:flex-row w-full max-w-7xl gap-6 mt-6'>

                {/* Descrição e Tabela */}
                <div className='bg-white w-full lg:w-[65%] rounded-md p-4'>
                    <h3 className='text-black font-bold mb-4 text-2xl'>Descrição Geral</h3>
                    <p className='text-black mb-8 text-base md:text-xl'>
                        Os compressores rotativos de parafuso da Chicago Pneumatic são projetados para oferecer desempenho industrial robusto com alta eficiência energética. Com tecnologia de ponta e engenharia confiável, são ideais para aplicações que exigem fornecimento contínuo de ar comprimido com baixo nível de ruído e manutenção simplificada.

                        Disponíveis em versões com velocidade fixa ou variável (VSD), modelos com tanque integrado, secador de ar (secador por refrigeração), e diversos níveis de potência — desde 3 até 400 HP.
                    </p>

                    <h3 className='text-black font-bold mt-4 mb-2 text-2xl'>Ficha Técnica</h3>
                    <div className="overflow-x-auto w-full">
                        <table className="min-w-full border border-gray-300 rounded-lg shadow-md">
                            <thead className="bg-red-500 text-white">
                                <tr>
                                    <th className="text-left px-4 py-3">Característica</th>
                                    <th className="text-left px-4 py-3">Detalhes</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {especificacoes.map((item, idx) => (
                                    <tr key={idx}>
                                        <td className="px-4 py-3 font-medium text-gray-700">{item.caracteristica}</td>
                                        <td className="px-4 py-3 text-gray-600">{item.detalhes}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Lateral "Mais produtos" */}
                <div className="flex flex-col bg-red-500 rounded-md p-4 shadow-md w-full lg:w-[35%]">
                    <h2 className='font-bold text-2xl mb-4 text-white'>Mais produtos</h2>

                    {[1, 2].map((_, i) => (
                        <div key={i} className='flex items-center p-2 bg-white rounded-md mb-4'>
                            <div className="flex-shrink-0">
                                <Image
                                    src="/destaques/img1.jpg"
                                    alt="Produto"
                                    width={100}
                                    height={100}
                                    className="rounded-md object-cover"
                                />
                            </div>
                            <div className="ml-4 text-black">
                                <h2 className="text-base font-bold">Título do Produto</h2>
                                <p className="text-sm mt-1">Descrição do produto, ou qualquer coisa que você quiser escrever aqui.</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}
