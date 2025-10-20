'use client'

import Image from "next/image";
import { useEffect, useState } from "react";

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
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="w-full flex flex-col items-center">
            {/* Slider */}
            <div className="relative w-full h-[250px] sm:h-[400px] md:h-[600px] lg:h-[990px] bg-black overflow-hidden rounded-none sm:rounded-md">
                {images.map((src, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                    >
                        <Image
                            src={src}
                            alt={`slide ${index + 1}`}
                            fill
                            className="object-cover"
                            priority={index === 0}
                        />
                    </div>
                ))}
            </div>

            {/* Indicadores */}
            <div className="mt-3 sm:mt-4 flex gap-2 sm:gap-3">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full border-2 cursor-pointer ${
                            index === currentIndex
                                ? 'bg-white border-white'
                                : 'bg-transparent border-white'
                        } transition-all duration-300`}
                        aria-label={`Ir para slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
