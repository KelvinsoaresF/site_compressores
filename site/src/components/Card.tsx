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
            className="
                group flex flex-col items-center justify-between 
                bg-white border border-gray-200 rounded-xl shadow-md 
                transition-all duration-300 hover:scale-[1.02] hover:shadow-xl 
                w-[180px] h-[260px] sm:w-[220px] sm:h-[300px] 
                p-3
            "
        >
            {/* Imagem com efeito de overlay e troca */}
            <div className="relative w-full h-[140px] sm:h-[160px] rounded-lg overflow-hidden">
                {image && (
                    <Image
                        src={image}
                        alt={title ?? "Produto"}
                        fill
                        className="object-cover transition-opacity duration-700 ease-in-out"
                    />
                )}

                {hoverImage && (
                    <Image
                        src={hoverImage}
                        alt={`${title} hover`}
                        fill
                        className={`object-cover absolute top-0 left-0 transition-opacity duration-700 ease-in-out ${hover ? "opacity-100" : "opacity-0"
                            }`}
                    />
                )}

                {/* Overlay sutil */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent transition-opacity duration-500 opacity-0 group-hover:opacity-100 z-10" />
            </div>

            {/* Título */}
            <div className="mt-3 mb-2 text-center text-xs sm:text-sm md:text-base text-black font-medium line-clamp-2">
                {title}
            </div>

            {/* Botão */}
            <button
                className="
                    bg-blue-600 text-white font-semibold 
                    text-xs sm:text-sm 
                    rounded-xl px-4 py-1.5 
                    shadow-md hover:shadow-lg 
                    transition-all duration-300 hover:scale-105 hover:bg-blue-700
                "
            >
                VER MAIS
            </button>
        </div>
    )
}
