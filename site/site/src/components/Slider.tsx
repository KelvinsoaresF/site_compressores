'use client'

import Image from "next/image";
import { useState } from "react";


export default function Slider() {

    const images = [
        "/img/img1.jpg",
        "/img/img2.jpg",
        "/img/img3.jpg",
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    return (
        <div className=" bg-red-500 relative w-full h-[600px] overflow-hidden">
            {images.map((src, index) => (
                <>
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                            }`}
                    >

                    </div>
                </>
            ))}
        </div>
    )
}