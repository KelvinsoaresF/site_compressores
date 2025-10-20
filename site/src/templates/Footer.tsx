
import Image from "next/image";


export default function Footer() {
    return (
        <footer className="flex flex-col md:flex-row justify-between items-center md:items-start bg-blue-600 p-4 sm:p-6 gap-8 md:gap-0 w-full">
            {/* Logo e informações da empresa */}
            <div className="flex flex-col justify-start items-center md:items-start gap-4 md:gap-6 md:px-12 w-full md:w-1/2">
                <Image
                    src="/img/logo.png"
                    alt="Logo"
                    width={180}
                    height={180}
                    className="w-[150px] sm:w-[180px] object-contain"
                />
                <Image
                    src="/img/chicago.png"
                    alt="Chicago logo"
                    width={180}
                    height={180}
                    className="w-[150px] sm:w-[180px] object-contain"
                />
                <p className="text-sm sm:text-base md:text-lg text-white text-center md:text-left mt-2 md:mt-4">
                    CNPJ: 07.803.971/0001-19
                </p>
            </div> 

            {/* Contato e redes sociais */}
            <div className="flex flex-col items-center md:items-end justify-start gap-4 md:gap-5 md:px-12 w-full md:w-1/2">
                <div className="flex items-center gap-4 sm:gap-6">
                    <a
                        href="https://www.instagram.com/compressoresbrasil/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/icons/insta.png"
                            alt="Instagram"
                            width={30}
                            height={30}
                            className="w-[25px] sm:w-[30px] cursor-pointer object-contain"
                        />
                    </a>

                    <a
                        href="https://www.facebook.com/profile.php?id=100009399556815"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/icons/facebook.png"
                            alt="Facebook"
                            width={30}
                            height={30}
                            className="w-[25px] sm:w-[30px] cursor-pointer object-contain"
                        />
                    </a>

                    <a
                        href="https://api.whatsapp.com/send?phone=5518981489410&text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/icons/whatsapp.png"
                            alt="WhatsApp"
                            width={30}
                            height={30}
                            className="w-[25px] sm:w-[30px] cursor-pointer object-contain"
                        />
                    </a>

                </div>
                <p className="text-sm sm:text-base md:text-lg text-white text-center md:text-right">
                    Telefone: (18) 3634-2216
                </p>
                <p className="text-sm sm:text-base md:text-lg text-white text-center md:text-right">
                    WhatsApp: (18) 98148-9410
                </p>
                <p className="text-sm sm:text-base md:text-lg text-white text-center md:text-right break-words max-w-[90%] md:max-w-none">
                    Email: atendimento@compressoresbrasil.com.br
                </p>
            </div>
        </footer>


    )
}