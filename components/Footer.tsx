import Link from "next/link";
import { Rocket, Twitter, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <Rocket className="h-6 w-6 text-indigo-600" />
                            <span className="font-bold text-lg text-gray-900">Speedwagon</span>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Accelerating innovation with AI-driven solutions for the modern world.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Products</h3>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><Link href="/food-stat" className="hover:text-indigo-600">Food-Stat</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><Link href="/about" className="hover:text-indigo-600">About Us</Link></li>
                            <li><Link href="#" className="hover:text-indigo-600">Careers</Link></li>
                            <li><Link href="mailto:hello@speedwagon.tech" className="hover:text-indigo-600">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><Link href="#" className="hover:text-indigo-600">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-indigo-600">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-400">
                        © {new Date().getFullYear()} Speedwagon. All rights reserved.
                    </p>
                    <div className="flex space-x-6 text-gray-400">
                        <Link href="#" className="hover:text-indigo-600"><Twitter className="h-5 w-5" /></Link>
                        <Link href="#" className="hover:text-indigo-600"><Github className="h-5 w-5" /></Link>
                        <Link href="#" className="hover:text-indigo-600"><Linkedin className="h-5 w-5" /></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
