export default function About() {
    return (
        <div className="bg-white">
            <div className="bg-blue-900 py-24 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-6xl font-black italic mb-6">About Speedwagon</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto font-medium">
                        We are a collective of engineers, designers, and dreamers building the future.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-blue-900 mb-8 italic">Our Story</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        Speedwagon started with a simple idea: technology moves fast, and we should be moving even faster.
                        We identify gaps in the market where AI and modern software engineering can make a massive impact,
                        and we build solutions to fill those gaps.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed border-l-4 border-red-500 pl-6 italic">
                        &quot;Velocity is the only advantage that matters in the long run.&quot;
                    </p>
                </section>

                <section>
                    <h2 className="text-3xl font-bold text-blue-900 mb-8 italic">Contact Us</h2>
                    <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100 text-center">
                        <p className="text-gray-600 mb-6 text-lg">
                            Interested in working with us or learning more about our products?
                        </p>
                        <a href="mailto:hello@speedwagon.tech" className="text-3xl font-bold text-red-600 hover:text-red-700 transition-colors">
                            hello@speedwagon.tech
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
}
