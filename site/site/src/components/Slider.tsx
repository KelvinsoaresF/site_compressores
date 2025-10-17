'use client'

import Image from "next/image";
import { useEffect, useState } from "react";

interface SliderProps {
    images: string[]
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
            <div className="relative w-full h-[900px] sm:h-[400px] md:h-[900px] bg-blue-500 overflow-hidden">
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
                            layout="fill"
                            objectFit="cover"
                            priority={index === 0}
                        />
                    </div>
                ))}
            </div>

            {/* Indicadores fora do slider */}
            <div className="mt-4 flex gap-3">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full border-2 cursor-pointer ${
                            index === currentIndex ? 'bg-white border-white' : 'bg-transparent border-white'
                        } transition-colors duration-300`}
                        aria-label={`Ir para slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}