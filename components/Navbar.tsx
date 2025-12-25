"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Leaf } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <Leaf className="h-8 w-8 text-teal-600" />
                        <span className="font-bold text-xl tracking-tight text-gray-900">
                            Food-Stat
                        </span>
                    </div>

                    <div className="hidden md:flex space-x-8">
                        <Link href="/" className="text-gray-600 hover:text-teal-600 transition-colors">
                            Home
                        </Link>
                        <Link href="/about" className="text-gray-600 hover:text-teal-600 transition-colors">
                            About
                        </Link>
                        <Link href="/features" className="text-gray-600 hover:text-teal-600 transition-colors">
                            Features
                        </Link>
                    </div>

                    <div className="hidden md:flex">
                        <button className="bg-teal-600 text-white px-4 py-2 rounded-full font-medium hover:bg-teal-700 transition-colors">
                            Get Started
                        </button>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-gray-900 focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-b border-gray-100">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link
                            href="/"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50"
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50"
                            onClick={() => setIsOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            href="/features"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50"
                            onClick={() => setIsOpen(false)}
                        >
                            Features
                        </Link>
                        <div className="pt-4 pb-2">
                            <button className="w-full bg-teal-600 text-white px-4 py-2 rounded-full font-medium hover:bg-teal-700 transition-colors">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
