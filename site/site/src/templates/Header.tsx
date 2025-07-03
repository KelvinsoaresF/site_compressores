'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <header className="bg-blue-800 text-white">
                <div className="flex justify-between items-center h-[100px] px-6">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <Image
                            src="/img/logo.png"
                            width={200}
                            height={200}
                            alt="Logo"
                            className="rounded"
                        />
                    </div>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex space-x-6">
                        <a href="#home" className="hover:text-blue-300">Início</a>
                        <a href="#produtos" className="hover:text-blue-300">Produtos</a>
                        <a href="#sobre" className="hover:text-blue-300">Sobre</a>
                        <a href="#contato" className="hover:text-blue-300">Contato</a>
                    </nav>

                    {/* Mobile menu toggle */}
                    <button
                        className="md:hidden focus:outline-none"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <nav className="md:hidden px-6 pb-4 w-[60px]">
                        <ul className="flex flex-col space-y-2">
                            <li><a href="#home" className="block py-2 hover:text-blue-300">Início</a></li>
                            <li><a href="#produtos" className="block py-2 hover:text-blue-300">Produtos</a></li>
                            <li><a href="#sobre" className="block py-2 hover:text-blue-300">Sobre</a></li>
                            <li><a href="#contato" className="block py-2 hover:text-blue-300">Contato</a></li>
                        </ul>
                    </nav>
                )}
            </header>

            <div className='text-sm py-2 flex justify-center bg-blue-50/15'>
                Av. Geraldo Liessi, 611 2º Distrito Industrial - Birigui/SP
            </div>


        </>

    );
}
