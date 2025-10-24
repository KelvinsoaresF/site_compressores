import Card from "@/components/Card"

import Destaque from "@/components/Destaque"
import InfoBar from "@/components/InfoBar"

import Slider from "@/components/Slider"

import { compressorData } from "@/data/products"
import Image from "next/image"
import Link from "next/link"



export default function Main() {
    return (
        <main className="flex flex-col mt-2 p-2 items-center space-y-10 justify-center">
            <Slider
                images={[
                    "/banners/banner1.png",
                    // "/banners/banner2.png",
                    "/banners/banner3.png",
                    "/banners/banner41.png",
                    "/banners/banner5.png",
                ]}
            />
            <InfoBar />

            <div className="        flex flex-col md:flex-row
        gap-4 sm:gap-6 md:gap-8
        p-3 sm:p-6 md:p-8
        w-full
        max-w-[1600px]
        mx-auto
        items-stretch">
                <div className="flex-3 w-full">
                    <Destaque image="/img/chicago-banner.jpg" />
                </div>

                <div className="flex-3 w-full">
                    <Destaque image="/img/empresa2.jpg" />
                </div>
            </div>

            <div className="flex flex-row sm:flex-row text-2xl sm:text-4xl md:text-6xl font-bold justify-center items-center gap-4 sm:gap-6 p-4">
                <h1 className="text-center text-4xl">Produtos</h1>

                <Image
                    src="/img/logo-chicago.png"
                    alt="Produto"
                    width={150}
                    height={150}
                    className="object-contain sm:w-[200px] md:w-[250px] lg:w-[300px] h-auto transition-opacity duration-700 ease-in-out"
                />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4 w-full max-w-7xl mx-auto px-2 py-2 sm:px-4">
                {compressorData.map((compressor) => (
                    <Link key={compressor.id} href={`/infoProduct/${compressor.id}`} className="block">
                        <Card
                            image={compressor?.images?.[0]}
                            title={compressor.name}
                            hoverImage={compressor?.images?.[1]}
                        />
                    </Link>
                ))}
            </div>


        </main>
    )
}