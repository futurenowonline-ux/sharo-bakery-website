"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Products", href: "/products" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "FAQ", href: "/faq" },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full bg-sharo-brown text-white shadow-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
                {/* Mobile Hamburger Menu Button */}
                <button
                    onClick={toggleMobileMenu}
                    className="block md:hidden focus:outline-none"
                    aria-label="Toggle mobile menu"
                >
                    <div className="flex flex-col space-y-1.5">
                        <span
                            className={`block h-0.5 w-6 bg-white transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-y-2 rotate-45" : ""
                                }`}
                        ></span>
                        <span
                            className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ease-in-out ${isMobileMenuOpen ? "opacity-0" : ""
                                }`}
                        ></span>
                        <span
                            className={`block h-0.5 w-6 bg-white transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
                                }`}
                        ></span>
                    </div>
                </button>

                {/* Center Logo */}
                <div className="text-2xl font-bold">
                    <Link href="/">Sharo Bakery</Link>
                </div>

                {/* Desktop Navigation Links */}
                <div className="hidden space-x-8 md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-base font-medium transition-colors duration-150 hover:text-sharo-gold relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sharo-gold transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                </div>

                {/* Placeholder for symmetry on mobile or potential right-side icons (e.g. Cart) 
            If not needed, can be removed or used for cart icon specified in inspiration but not explicitly in structure list.
            The structure list said: Left: Hamburger, Center: Logo, Right: Desktop Links. 
            On mobile, the logo is center. To keep it centered, we might need an invisible element on the right or just flex logic.
            Let's stick to the explicit "Structure" list: Left Hamburger (mobile), Center Logo, Right Links (desktop). 
            On mobile, usually logo is center, menu left. 
        */}
                <div className="w-6 md:hidden"></div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 top-[64px] z-40 transform bg-sharo-brown transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                    } md:hidden`}
            >
                <div className="flex flex-col space-y-6 p-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-lg font-medium text-white transition-colors duration-150 hover:text-sharo-gold"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
