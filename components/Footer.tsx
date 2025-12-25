import Link from "next/link";
import { Leaf, Twitter, Github, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <Leaf className="h-6 w-6 text-teal-600" />
                            <span className="font-bold text-lg text-gray-900">Food-Stat</span>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Explainable, context-aware nutrition intelligence for everyone.
                            Understand what you eat with the power of AI.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><Link href="/features" className="hover:text-teal-600">Features</Link></li>
                            <li><Link href="/#how-it-works" className="hover:text-teal-600">How It Works</Link></li>
                            <li><Link href="/#use-cases" className="hover:text-teal-600">Use Cases</Link></li>
                            <li><Link href="#" className="hover:text-teal-600">Pricing</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><Link href="/about" className="hover:text-teal-600">About Us</Link></li>
                            <li><Link href="#" className="hover:text-teal-600">Blog</Link></li>
                            <li><Link href="#" className="hover:text-teal-600">Careers</Link></li>
                            <li><Link href="#" className="hover:text-teal-600">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><Link href="#" className="hover:text-teal-600">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-teal-600">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:text-teal-600">Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-400">
                        © {new Date().getFullYear()} Food-Stat. All rights reserved.
                    </p>
                    <div className="flex space-x-6 text-gray-400">
                        <Link href="#" className="hover:text-teal-600"><Twitter className="h-5 w-5" /></Link>
                        <Link href="#" className="hover:text-teal-600"><Github className="h-5 w-5" /></Link>
                        <Link href="#" className="hover:text-teal-600"><Linkedin className="h-5 w-5" /></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
