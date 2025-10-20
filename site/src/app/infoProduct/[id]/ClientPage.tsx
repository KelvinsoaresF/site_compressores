'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { compressorData } from '@/data/products'

type Props = { id: string }

export default function ClientPage({ id }: Props) {
  const produtoId = parseInt(id)  // Converte string → número
  const produto = compressorData.find(p => p.id === produtoId)
  const [imagemAtiva, setImagemAtiva] = useState(produto?.images?.[0] || '')

  if (!produto) return <p>Produto não encontrado</p>

  return (
    <div className="flex flex-col items-center p-4 sm:p-6 md:p-8 bg-black min-h-screen w-full">
      <div className="flex flex-col md:flex-row bg-white w-full max-w-7xl gap-6 h-full rounded-md p-4 sm:p-6">
        {/* Imagem principal e miniaturas */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <Image
            src={imagemAtiva || '/placeholder.png'}
            alt={produto.name}
            width={400}
            height={400}
            className="object-contain w-full h-[250px] sm:h-[350px] md:h-[400px] rounded-md"
          />
          <div className="flex gap-2 sm:gap-4 mt-3 sm:mt-4 flex-wrap justify-center">
            {produto.images.map((img, idx) => (
              <Image
                key={img || idx}  // chave única
                src={img || '/placeholder.png'}
                alt={`Miniatura ${idx + 1}`}
                width={70}
                height={70}
                onClick={() => setImagemAtiva(img)}
                className={`cursor-pointer rounded-md border-2 ${
                  img === imagemAtiva ? 'border-blue-500' : 'border-transparent'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Informações do produto */}
        <div className="flex flex-col items-center justify-between w-full md:w-1/2 text-center">
          <h2 className="text-black text-2xl sm:text-3xl md:text-5xl font-bold mt-4 md:mt-0">
            {produto.name}
          </h2>

          <a
            href="https://api.whatsapp.com/send?phone=5518981489410&text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 font-bold cursor-pointer text-white p-3 sm:p-4 mt-6 md:mt-40 w-full max-w-[280px] rounded-full hover:scale-105 transition-transform text-lg sm:text-xl"
          >
            Contato
          </a>
        </div>
      </div>

      {/* Descrição, ficha técnica e mais produtos */}
      <div className="flex flex-col lg:flex-row w-full max-w-7xl gap-6 mt-6">
        <div className="bg-white w-full lg:w-[65%] rounded-md p-4 sm:p-6">
          <h3 className="text-black font-bold mb-3 sm:mb-4 text-xl sm:text-2xl">Descrição Geral</h3>
          <p className="text-black mb-6 sm:mb-8 text-sm sm:text-base md:text-lg leading-relaxed">
            {produto.description}
          </p>

          <h3 className="text-black font-bold mt-4 mb-2 text-xl sm:text-2xl">Ficha Técnica</h3>
          <div className="overflow-x-auto w-full">
            <table className="min-w-full border border-gray-300 rounded-lg shadow-md text-sm sm:text-base">
              <thead className="bg-blue-500 text-white">
                <tr>
                  <th className="text-left px-3 sm:px-4 py-2 sm:py-3">Característica</th>
                  <th className="text-left px-3 sm:px-4 py-2 sm:py-3">Detalhes</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {produto.specs.map((item, idx) => (
                  <tr key={item.caracteristica + idx}>
                    <td className="px-3 sm:px-4 py-2 sm:py-3 font-medium text-gray-700">{item.caracteristica}</td>
                    <td className="px-3 sm:px-4 py-2 sm:py-3 text-gray-600">{item.detalhes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-col bg-blue-500 rounded-md p-4 sm:p-6 shadow-md w-full lg:w-[35%]">
          <h2 className="font-bold text-xl sm:text-2xl mb-4 text-white text-center lg:text-left">Mais produtos</h2>
          {compressorData
            .filter(c => c.id !== produtoId)
            .map(compressor => (
              <Link href={`/infoProduct/${compressor.id}`} key={compressor.id}>
                <div className="flex items-center gap-3 sm:gap-4 p-2 sm:p-3 bg-white rounded-md mb-4 hover:scale-[1.02] transition-transform cursor-pointer">
                  <Image
                    src={compressor.images[0] || '/placeholder.png'}
                    alt={compressor.name}
                    width={90}
                    height={90}
                    className="rounded-md object-cover w-[80px] sm:w-[100px]"
                  />
                  <div className="text-black flex flex-col">
                    <h2 className="text-sm sm:text-base font-bold">{compressor.name}</h2>
                    <p className="text-xs sm:text-sm mt-1 leading-snug">
                      Descrição rápida aqui.
                    </p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  )
}
