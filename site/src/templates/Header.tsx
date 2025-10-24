'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <header className="fixed top-0 left-0 w-full bg-blue-800 text-white z-50 shadow-md">
                <div className="flex justify-between items-center h-[100px] px-6">

                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <Link href={'/'}>
                            <Image
                                src="/img/logo.png"
                                width={200}
                                height={200}
                                alt="Logo"
                                className="rounded"
                            />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex space-x-6">
                        <Link href="/">
                            <p className="hover:text-blue-300">Início</p>
                        </Link>

                        <Link href="/sobre">
                            <p className="hover:text-blue-300">Sobre nós</p>
                        </Link>

                        <Link href="/contato">
                            <p className="hover:text-blue-300">Contato</p>
                        </Link>
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

                            <Link href={'/'}>
                                <li><p className="block py-2 hover:text-blue-300">Início</p></li>

                            </Link>

                            <Link href={'/sobre'}>
                                <li><p className="block py-2 hover:text-blue-300">Sobre nós</p></li>

                            </Link>

                            <Link href={'/contato'}>
                                <li><p className="block py-2 hover:text-blue-300">Contato</p></li>
                            </Link>

                        </ul>
                    </nav>
                )}
                <div className='text-sm py-2 flex justify-center bg-black'>
                    Av. Geraldo Liessi, 611 2º Distrito Industrial - Birigui-SP
                </div>

            </header>



        </>

    );
}
