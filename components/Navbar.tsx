"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Wind, ChevronDown } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <Wind className="h-8 w-8 text-red-600 -skew-x-12" />
                        <span className="font-bold text-2xl tracking-tighter italic text-blue-900">
                            Speedwagon
                        </span>
                    </div>

                    <div className="hidden md:flex space-x-8">
                        <Link href="/" className="text-blue-900 font-medium hover:text-red-600 transition-colors">
                            Home
                        </Link>
                        <div className="relative group">
                            <button className="flex items-center text-blue-900 font-medium hover:text-red-600 transition-colors">
                                Products <ChevronDown className="h-4 w-4 ml-1" />
                            </button>
                            <div className="absolute top-full left-0 w-56 bg-white border border-gray-100 shadow-xl rounded-xl p-2 hidden group-hover:block">
                                <Link href="/products" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 rounded-lg font-medium">
                                    All Products
                                </Link>
                                <div className="my-1 border-t border-gray-100"></div>
                                <Link href="/products/food-stat" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 rounded-lg">
                                    Food-Stat
                                </Link>
                            </div>
                        </div>
                        <Link href="/about" className="text-blue-900 font-medium hover:text-red-600 transition-colors">
                            About
                        </Link>
                    </div>

                    <div className="hidden md:flex">
                        <button className="bg-blue-900 text-white px-5 py-2.5 rounded-full font-bold hover:bg-red-600 transition-colors shadow-lg shadow-blue-900/20">
                            Contact Us
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
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href="/food-stat"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                            onClick={() => setIsOpen(false)}
                        >
                            Product: Food-Stat
                        </Link>
                        <Link
                            href="/about"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                            onClick={() => setIsOpen(false)}
                        >
                            About
                        </Link>
                        <div className="pt-4 pb-2">
                            <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-full font-medium hover:bg-indigo-700 transition-colors">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
