import Link from "next/link";

export default function CTASection() {
    return (
        <section className="py-20 bg-teal-900 text-white rounded-3xl mx-4 lg:mx-8 mb-20 relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-teal-800 opacity-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-teal-500 opacity-10 blur-3xl"></div>

            <div className="relative max-w-4xl mx-auto text-center px-4">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Understand Food Before You Eat It
                </h2>
                <p className="text-teal-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                    Join thousands of users who are making smarter, data-driven nutrition choices
                    with Food-Stat&apos;s AI-powered insights.
                </p>
                <Link
                    href="#"
                    className="inline-block px-8 py-4 bg-white text-teal-900 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg"
                >
                    Get Started Now
                </Link>
            </div>
        </section>
    );
}
