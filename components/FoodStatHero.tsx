import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-teal-50 blur-3xl opacity-60"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-green-50 blur-3xl opacity-60"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-sm font-medium mb-8 border border-teal-100">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                    </span>
                    Now Available in Beta
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6">
                    Expert-Level Nutrition <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-green-500">
                        Intelligence, Powered by AI
                    </span>
                </h1>

                <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-10 leading-relaxed">
                    Food-Stat analyzes any food item and delivers explainable nutrition scores
                    and personalized recommendations tailored to your context.
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <Link
                        href="/features"
                        className="w-full sm:w-auto px-8 py-4 bg-teal-600 text-white rounded-full font-semibold hover:bg-teal-700 transition-all shadow-lg shadow-teal-200/50 flex items-center justify-center gap-2"
                    >
                        Explore Features <ArrowRight className="h-5 w-5" />
                    </Link>
                    <Link
                        href="#use-cases"
                        className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-full font-semibold hover:bg-gray-50 transition-all flex items-center justify-center"
                    >
                        View Use Cases
                    </Link>
                </div>

                <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                        <CheckCircle className="h-4 w-4 text-teal-500" /> No credit card required
                    </div>
                    <div className="flex items-center gap-1">
                        <CheckCircle className="h-4 w-4 text-teal-500" /> Free strictly for individuals
                    </div>
                </div>
            </div>
        </section>
    );
}
