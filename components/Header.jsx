// components/Header.jsx
"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    // lock body scroll when mobile menu is open
    useEffect(() => {
        if (typeof window !== 'undefined') {
            document.body.style.overflow = menuOpen ? 'hidden' : '';
        }
    }, [menuOpen]);

    return (
        <header className="bg-white shadow sticky top-0 z-50">
            <nav className="mx-auto px-4 py-4 flex items-center justify-between max-w-[1100px]">
                <Link
                    href="/"
                    className="flex items-center"
                    scroll={true}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                    <img src="/images/logo.png" alt="Neat Logo" className="h-8 w-auto" />
                    <span className="sr-only">Neat</span>
                </Link>

                <ul className="hidden md:flex space-x-8 text-sm font-medium">
                    <li><Link href="/#how-it-works" className="hover:text-green-700 transition-colors">How it works</Link></li>
                    <li><Link href="/#popular-services" className="hover:text-green-700 transition-colors">Services</Link></li>
                    <li><Link href="/#features" className="hover:text-green-700 transition-colors">Features</Link></li>

                    <li>
                        <Link href="/pricing" className="text-sm font-medium text-gray-700 hover:text-green-700 transition-colors">
                            Pricing
                        </Link>
                    </li>

                </ul>

                <div className="hidden md:flex items-center space-x-4">
                    <Link href="/login" className="text-sm font-medium text-gray-700 hover:text-green-700 transition-colors">
                        Login
                    </Link>
                    <Link
                        href="/#get-started"
                        className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded hover:bg-green-700 transition-colors transform hover:scale-105"
                    >
                        Get Started
                    </Link>
                </div>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden focus:outline-none"
                    aria-label="Toggle menu"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>
            </nav>

            {menuOpen && (
                <div className="md:hidden bg-white border-t">
                    <ul className="px-4 py-2 space-y-2">
                        <li><Link href="/#how-it-works" className="block text-gray-700 hover:text-green-700 transition-colors">How it works</Link></li>
                        <li>
                            <Link href="/pricing" className="block text-gray-700 hover:text-green-700 transition-colors">
                                Pricing
                            </Link>
                        </li>
                        <li><Link href="/#features" className="block text-gray-700 hover:text-green-700 transition-colors">Features</Link></li>
                        <li>
                            <Link href="/login" className="block text-gray-700 hover:text-green-700 transition-colors">
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/#get-started"
                                className="block px-4 py-2 bg-primary text-white text-center rounded hover:bg-green-700 transition-colors transform hover:scale-105"
                            >
                                Get Started
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}
