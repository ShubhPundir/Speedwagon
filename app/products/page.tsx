import Link from "next/link";
import { Leaf, ArrowRight } from "lucide-react";

export default function Products() {
    return (
        <div className="bg-white min-h-screen pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-blue-900 mb-6 italic">Our Products</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        High-velocity solutions solving complex problems.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Food-Stat Card */}
                    <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all group">
                        <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center mb-6 text-teal-600 group-hover:scale-110 transition-transform">
                            <Leaf className="h-8 w-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Food-Stat</h3>
                        <p className="text-gray-500 mb-6 min-h-[48px]">
                            Explainable, context-aware nutrition intelligence powered by AI.
                        </p>
                        <Link
                            href="/products/food-stat"
                            className="inline-flex items-center text-teal-600 font-bold hover:text-teal-700"
                        >
                            Explore Food-Stat <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>

                    {/* Placeholder for future products */}
                    <div className="bg-gray-50 rounded-2xl p-8 border border-dashed border-gray-300 flex flex-col items-center justify-center text-center opacity-70">
                        <span className="text-4xl mb-4">🚀</span>
                        <h3 className="text-xl font-bold text-gray-500 mb-2">Project: Comet</h3>
                        <p className="text-gray-400 mb-6">
                            Next-gen productivity for remote teams.
                        </p>
                        <span className="px-3 py-1 bg-gray-200 text-gray-500 rounded-full text-xs font-bold uppercase tracking-wide">In Development</span>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-8 border border-dashed border-gray-300 flex flex-col items-center justify-center text-center opacity-70">
                        <span className="text-4xl mb-4">⚡</span>
                        <h3 className="text-xl font-bold text-gray-500 mb-2">Project: Bolt</h3>
                        <p className="text-gray-400 mb-6">
                            Instant infrastructure deployment.
                        </p>
                        <span className="px-3 py-1 bg-gray-200 text-gray-500 rounded-full text-xs font-bold uppercase tracking-wide">In Development</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
