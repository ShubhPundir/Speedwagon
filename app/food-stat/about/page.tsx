import FoodStatCTA from "@/components/FoodStatCTA";

export default function About() {
    return (
        <div className="bg-white">
            {/* Header */}
            <div className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Food-Stat</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Our mission is to make nutrition understandable, transparent, and personalized for everyone.
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">

                {/* The Problem */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">The Problem</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Generic food labels are confusing and static. They don&apos;t adapt to who you are.
                            A &quot;healthy&quot; snack for an athlete might be dangerous for someone with a specific condition.
                            Consumers are left guessing what the numbers actually mean for <em>them</em>.
                        </p>
                    </div>
                    <div className="bg-red-50 rounded-2xl p-8 h-64 flex items-center justify-center">
                        <span className="text-6xl">😕</span>
                    </div>
                </section>

                {/* The Solution */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1 bg-teal-50 rounded-2xl p-8 h-64 flex items-center justify-center">
                        <span className="text-6xl">💡</span>
                    </div>
                    <div className="order-1 md:order-2">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">The Solution</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Food-Stat bridges the gap between raw data and human understanding.
                            By combining robust nutritional databases with advanced Large Language Models (LLMs),
                            we provide reasoning, not just ratings. We explain &quot;why&quot; a food is good or bad for your specific context.
                        </p>
                    </div>
                </section>

                {/* Our Values */}
                <section className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 border border-gray-100 rounded-xl">
                            <h3 className="font-bold text-lg mb-2">Transparency</h3>
                            <p className="text-sm text-gray-500">No black-box scores. We always show our work.</p>
                        </div>
                        <div className="p-6 border border-gray-100 rounded-xl">
                            <h3 className="font-bold text-lg mb-2">Accuracy</h3>
                            <p className="text-sm text-gray-500">Grounded in scientific data, interpreted by AI.</p>
                        </div>
                        <div className="p-6 border border-gray-100 rounded-xl">
                            <h3 className="font-bold text-lg mb-2">Empathy</h3>
                            <p className="text-sm text-gray-500">Understanding that every body is unique.</p>
                        </div>
                    </div>
                </section>

            </div>

            <FoodStatCTA />
        </div>
    );
}
