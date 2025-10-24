'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SliderProps {
    images: string[];
}

export default function Slider({ images }: SliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 20000); // 20 SEGUNDOS    
        return () => clearInterval(interval);
    }, [images.length]);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="w-full flex flex-col items-center">
            {/* Slider container */}
            <div className="relative w-full h-[240px] sm:h-[350px] md:h-[550px] lg:h-[750px] xl:h-[800px] overflow-hidden rounded-none sm:rounded-md">
                {images.map((src, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                    >
                        <Image
                            src={src}
                            alt={`slide ${index + 1}`}
                            fill
                            className="object-contain  sm:object-cover object-center"
                            priority={index === 0}
                        />
                    </div>
                ))}

                {/* Botão Esquerda */}
                <button
                    onClick={goToPrevious}
                    className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 
                               bg-black/30 hover:bg-black/50 backdrop-blur-sm 
                               text-white p-2 sm:p-3 rounded-full 
                               transition-all duration-300 shadow-md"
                    aria-label="Previous slide"
                >
                    <ChevronLeft size={28} />
                </button>

                {/* Botão Direita */}
                <button
                    onClick={goToNext}
                    className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 
                               bg-black/30 hover:bg-black/50 backdrop-blur-sm 
                               text-white p-2 sm:p-3 rounded-full 
                               transition-all duration-300 shadow-md"
                    aria-label="Next slide"
                >
                    <ChevronRight size={28} />
                </button>
            </div>

            {/* Indicadores */}
            <div className="mt-3 sm:mt-4 flex gap-2 sm:gap-3">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full border-2 cursor-pointer 
                            ${
                                index === currentIndex
                                    ? "bg-white border-white scale-110"
                                    : "bg-transparent border-white/70 hover:border-white/90"
                            } 
                            transition-all duration-300`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
