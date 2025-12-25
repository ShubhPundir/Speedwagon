import Link from "next/link";
import { ArrowRight, Wind } from "lucide-react";

export default function SpeedwagonHero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-white">
                <div className="absolute top-[-20%] right-[-10%] w-[900px] h-[900px] rounded-full bg-blue-50 blur-3xl opacity-80"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] rounded-full bg-red-50 blur-3xl opacity-60"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-900 text-sm font-bold tracking-wide mb-8 border border-blue-100 uppercase">
                    <Wind className="h-4 w-4" />
                    Accelerating Innovation
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter text-blue-900 mb-6 italic">
                    Building the Engines of <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-red-600">
                        Tomorrow&apos;s Velocity
                    </span>
                </h1>

                <p className="max-w-2xl mx-auto text-xl text-gray-700 mb-10 leading-relaxed font-medium">
                    Speedwagon delivers high-velocity solutions to complex problems.
                    We move fast so you don&apos;t have to.
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <Link
                        href="/products"
                        className="w-full sm:w-auto px-8 py-4 bg-red-600 text-white rounded-full font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-200 flex items-center justify-center gap-2"
                    >
                        Explore Products <ArrowRight className="h-5 w-5" />
                    </Link>
                    <Link
                        href="/about"
                        className="w-full sm:w-auto px-8 py-4 bg-white text-blue-900 border-2 border-blue-50 rounded-full font-bold hover:border-blue-200 transition-all flex items-center justify-center"
                    >
                        Our Mission
                    </Link>
                </div>
            </div>
        </section>
    );
}
