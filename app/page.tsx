import SpeedwagonHero from "@/components/SpeedwagonHero";
import FeatureCard from "@/components/FeatureCard";
import { Leaf, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <SpeedwagonHero />

            {/* Products Section */}
            <section id="products" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Products</h2>
                        <p className="text-gray-500">Innovative solutions powering the next generation.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Food-Stat Card */}
                        <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all group">
                            <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center mb-6 text-teal-600 group-hover:scale-110 transition-transform">
                                <Leaf className="h-8 w-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Food-Stat</h3>
                            <p className="text-gray-500 mb-6 min-h-[48px]">
                                Explainable, context-aware nutrition intelligence powered by AI.
                            </p>
                            <Link
                                href="/food-stat"
                                className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-700"
                            >
                                Learn more <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>

                        {/* Placeholder for future products */}
                        <div className="bg-gray-100 rounded-2xl p-8 border border-dashed border-gray-300 flex flex-col items-center justify-center text-center opacity-70">
                            <span className="text-4xl mb-4">🚀</span>
                            <h3 className="text-xl font-bold text-gray-500 mb-2">Coming Soon</h3>
                            <p className="text-gray-400">
                                More revolutionary products are in the pipeline.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Driven by Velocity</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
                        At Speedwagon, we believe in shipping fast, iterating continuously, and using cutting-edge technology to solve human problems.
                    </p>
                </div>
            </section>
        </>
    );
}
