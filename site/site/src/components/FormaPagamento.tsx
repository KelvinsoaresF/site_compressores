import Image from "next/image"

export default function FormaPagamento() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8 bg-white p-4 w-full text-center">
            <p className="w-full text-black text-base sm:text-lg md:text-2xl font-semibold mb-2">
                FORMAS DE PAGAMENTO
            </p>

            <Image
                src="/icons/visa.png"
                alt="Visa"
                height={40}
                width={60}
                className="object-contain transition-opacity duration-700 ease-in-out"
            />
            <Image
                src="/icons/mastercard.png"
                alt="Mastercard"
                height={40}
                width={60}
                className="object-contain transition-opacity duration-700 ease-in-out"
            />
            <Image
                src="/icons/american-express.png"
                alt="Amex"
                height={40}
                width={60}
                className="object-contain transition-opacity duration-700 ease-in-out"
            />
            <Image
                src="/icons/banco-brasil.png"
                alt="Banco do Brasil"
                height={40}
                width={60}
                className="object-contain transition-opacity duration-700 ease-in-out"
            />
            <Image
                src="/icons/boleto.png"
                alt="Boleto"
                height={40}
                width={60}
                className="object-contain transition-opacity duration-700 ease-in-out"
            />
            <Image
                src="/icons/itau.webp"
                alt="Itaú"
                height={40}
                width={60}
                className="object-contain transition-opacity duration-700 ease-in-out"
            />
        </div>

    )
}