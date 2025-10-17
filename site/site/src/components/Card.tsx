"use client"
import Image from "next/image"

import { useState } from "react"

type CardProps = {
    image?: string
    hoverImage?: string
    title?: string
}

export default function Card({ image, hoverImage, title }: CardProps) {
    const [hover, setHover] = useState(false)

    return (
        <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="group transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl flex flex-col items-center justify-between bg-white w-full p-4 sm:p-6 shadow-lg rounded-2xl mx-auto max-w-xs sm:max-w-sm border border-gray-200"
        >
            {/* Imagem com efeito de overlay e troca */}
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
                {/* Imagem padrão */}
                {image && (
                    <Image
                        src={image}
                        alt={title ?? "Produto"}
                        fill
                        className="object-cover transition-opacity duration-700 ease-in-out"
                    />
                )}

                {/* Imagem hover sobreposta */}
                {hoverImage && (
                    <Image
                        src={hoverImage}
                        alt={`${title} hover`}
                        fill
                        className={`object-cover absolute top-0 left-0 transition-opacity duration-700 ease-in-out ${hover ? "opacity-100" : "opacity-0"
                            }`}
                    />
                )}

                {/* Overlay escuro sutil (opcional) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent transition-opacity duration-500 opacity-0 group-hover:opacity-100 z-10" />
            </div>

            {/* Título */}
            <div className="mt-6 mb-3 px-2 text-black text-center text-sm sm:text-base font-medium">
                {title}
            </div>

            {/* Botão */}
                <button className="bg-blue-600 cursor-pointer rounded-2xl px-6 py-2 text-white font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:bg-blue-700 shadow-md hover:shadow-xl">
                    VER MAIS
                </button>
        </div>
    )
}

