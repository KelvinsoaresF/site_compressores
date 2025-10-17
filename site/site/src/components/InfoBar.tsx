'use client'
import Image from "next/image";

export default function InfoBar() {

    function Item({ icon, text, size }: { icon: string; text: string; size: number }) {
        return (
            <div className="flex items-center gap-2 text-sm sm:text-base">
                <Image src={icon} alt={text} width={size} height={size} className="object-contain" />
                <p className="text-black whitespace-nowrap">{text}</p>
            </div>
        )
    }

    function Separator() {
        return <p className="text-black font-extrabold">|</p>
    }
    return (
        <div className="relative w-full overflow-hidden bg-white py-4">
            <div className="animate-marquee flex gap-10 whitespace-nowrap">
                {Array(2).fill(0).map((_, i) => (
                    <div key={i} className="flex items-center gap-10 px-4">
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
          animation: marquee 20s linear infinite;
        }
      `}</style>
        </div>


    )
} 