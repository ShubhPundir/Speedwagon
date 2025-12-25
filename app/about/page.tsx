export default function About() {
    return (
        <div className="bg-white">
            <div className="bg-indigo-900 py-20 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">About Speedwagon</h1>
                    <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
                        We are a collective of engineers, designers, and dreamers building the future.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        Speedwagon started with a simple idea: technology moves fast, and we should moving even faster.
                        We identify gaps in the market where AI and modern software engineering can make a massive impact,
                        and we build solutions to fill those gaps.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        From nutrition intelligence to future productivity tools, our portfolio is diverse but unified by a single principle: Utility.
                    </p>
                </section>

                <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                        <p className="text-gray-600 mb-4">
                            Interested in working with us or learning more about our products?
                        </p>
                        <a href="mailto:hello@speedwagon.tech" className="text-indigo-600 font-semibold hover:text-indigo-800 text-lg">
                            hello@speedwagon.tech
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
}
