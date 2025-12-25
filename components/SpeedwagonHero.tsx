import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

export default function SpeedwagonHero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full bg-indigo-50 blur-3xl opacity-60"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-violet-50 blur-3xl opacity-60"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium mb-8 border border-indigo-100">
                    <Zap className="h-4 w-4" />
                    Accelerating the Future of Tech
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6">
                    Building the Engines of <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-500">
                        Tomorrow&apos;s Solutions
                    </span>
                </h1>

                <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-10 leading-relaxed">
                    Speedwagon is a technology incubator and solutions provider. We build high-velocity products that solve complex real-world problems.
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <Link
                        href="#products"
                        className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200/50 flex items-center justify-center gap-2"
                    >
                        View Products <ArrowRight className="h-5 w-5" />
                    </Link>
                    <Link
                        href="/about"
                        className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-full font-semibold hover:bg-gray-50 transition-all flex items-center justify-center"
                    >
                        About Us
                    </Link>
                </div>
            </div>
        </section>
    );
}
