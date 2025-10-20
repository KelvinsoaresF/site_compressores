import Image from "next/image";

type RoundedProps = {
    image?: string
}

export default function Rounded({ image }: RoundedProps) {
    return (
        <div className="relative bg-white rounded-full w-32 h-32 sm:w-40 sm:h-40 lg:w-60 lg:h-60 overflow-hidden group ring-0 group-hover:ring-4 group-hover:ring-blue-500 transition-all duration-300 ease-in-out">
            <Image
                src={image}
                alt="Produto"
                fill
                className="object-cover rounded-full transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
        </div>
    )
}