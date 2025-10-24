'use client'
import Image from "next/image";

export default function InfoBar() {
    function Item({ icon, text, size }: { icon: string; text: string; size: number }) {
        return (
            <div className="flex items-center gap-2 text-xs sm:text-sm md:text-base text-black">
                <Image
                    src={icon}
                    alt={text}
                    width={size}
                    height={size}
                    className="object-contain w-[20px] sm:w-[25px] md:w-[size] h-auto"
                />
                <p className="whitespace-nowrap font-medium">{text}</p>
            </div>
        );
    }

    function Separator() {
        return <p className="text-gray-400 font-extrabold hidden sm:block">|</p>;
    }

    return (
        <div className="relative w-full overflow-hidden bg-white py-3 sm:py-4 border-y border-gray-100">
            <div className="animate-marquee flex gap-8 sm:gap-12 whitespace-nowrap">
                {Array(2).fill(0).map((_, i) => (
                    <div key={i} className="flex items-center gap-6 sm:gap-10 px-3 sm:px-6">
                        <Item
                            icon="/icons/pix.png"
                            text="Aceitamos Pix"
                            size={30}
                        />
                        <Separator />
                        <Item
                            icon="/icons/entrega.png"
                            text="Entregamos em todo Brasil"
                            size={35}
                        />
                        <Separator />
                        <Item
                            icon="/icons/cadeado.png"
                            text="Qualidade e segurança"
                            size={25}
                        />
                        <Separator />
                        <Item
                            icon="/icons/cartao.png"
                            text="Parcelamos em até 12x"
                            size={30}
                        />
                    </div>
                ))}
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(0%);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                .animate-marquee {
                    animation: marquee 25s linear infinite;
                }

                @media (max-width: 640px) {
                    .animate-marquee {
                        animation-duration: 35s; /* move mais devagar no mobile */
                    }
                }
            `}</style>
        </div>
    );
}
