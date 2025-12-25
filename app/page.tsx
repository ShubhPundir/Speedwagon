import SpeedwagonHero from "@/components/SpeedwagonHero";
import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";

export default function Home() {
    return (
        <>
            <SpeedwagonHero />

            {/* Featured Product Section */}
            <section id="products" className="py-24 bg-blue-50/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-blue-900 mb-2 italic">Featured Product</h2>
                            <p className="text-gray-600">Our flagship nutrition intelligence engine.</p>
                        </div>
                        <Link href="/products" className="group flex items-center font-bold text-blue-700 hover:text-red-600 transition-colors mt-4 md:mt-0">
                            View All Products <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl flex flex-col md:flex-row gap-8 md:gap-16 items-center">
                        <div className="flex-1">
                            <div className="inline-block p-4 bg-teal-50 rounded-2xl mb-6">
                                <Leaf className="h-10 w-10 text-teal-600" />
                            </div>
                            <h3 className="text-4xl font-bold text-gray-900 mb-4">Food-Stat</h3>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Stop guessing about your food. Food-Stat uses advanced AI to analyze nutrition labels,
                                ingredients, and context to give you explainable, expert-level advice.
                            </p>
                            <div className="flex gap-4">
                                <Link
                                    href="/products/food-stat"
                                    className="px-8 py-3 bg-teal-600 text-white rounded-xl font-bold hover:bg-teal-700 transition-colors"
                                >
                                    Open App
                                </Link>
                                <Link
                                    href="/products/food-stat/about"
                                    className="px-8 py-3 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-colors"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                        <div className="flex-1 w-full bg-gray-100 rounded-2xl h-64 md:h-96 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-green-500/10"></div>
                            <div className="bg-white p-6 rounded-xl shadow-lg max-w-xs rotate-[-6deg] absolute left-10 top-10 border border-gray-100">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-bold text-gray-900">Apple</span>
                                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-bold">Score: 92</span>
                                </div>
                                <div className="h-2 bg-gray-100 rounded-full w-full">
                                    <div className="h-2 bg-green-500 rounded-full w-[92%]"></div>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-lg max-w-xs rotate-[4deg] absolute right-10 bottom-10 border border-gray-100">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-bold text-gray-900">Donut</span>
                                    <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full font-bold">Score: 14</span>
                                </div>
                                <div className="h-2 bg-gray-100 rounded-full w-full">
                                    <div className="h-2 bg-red-500 rounded-full w-[14%]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-24 bg-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-blue-900 mb-8 italic">Driven by Veclocity</h2>
                    <p className="text-2xl text-gray-500 leading-relaxed">
                        At Speedwagon, we believe in shipping fast, iterating continuously, and using cutting-edge technology to solve human problems.
                    </p>
                </div>
            </section>
        </>
    );
}
