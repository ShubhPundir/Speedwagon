import FoodStatCTA from "@/components/FoodStatCTA";
import FeatureCard from "@/components/FeatureCard";
import { Search, BrainCircuit, Target, MessageCircle, Database, ShieldCheck } from "lucide-react";

export default function Features() {
    return (
        <div className="bg-white">
            <div className="bg-teal-900 py-20 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Features & Capabilities</h1>
                    <p className="text-xl text-teal-100 max-w-2xl mx-auto">
                        Explore the technology that powers the next generation of nutrition intelligence.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    <FeatureCard
                        icon={Search}
                        title="Custom Scoring Logic"
                        description="Our proprietary scoring algorithm digests complex nutritional labels to give you a simple 0-100 health score, adapted to your dietary goals."
                    />
                    <FeatureCard
                        icon={BrainCircuit}
                        title="Prompt Engineering"
                        description="We use sophisticated chain-of-thought prompting to ensure our AI acts like a certified nutritionist, checking facts and avoiding hallucinations."
                    />
                    <FeatureCard
                        icon={Target}
                        title="Context Awareness"
                        description="A 'good' food depends on who is eating it. Switch profiles instantly between 'Infant', 'Pregnant', 'Bodybuilder', and more."
                    />
                    <FeatureCard
                        icon={MessageCircle}
                        title="Interactive Chatbot"
                        description="Don't just read—ask. 'Is this too much sugar for my kid?' or 'What can I pair this with?' Our bot has the answers."
                    />
                    <FeatureCard
                        icon={Database}
                        title="Vector Database"
                        description="Powered by Qdrant to find similar foods and semantic matches lightning fast, ensuring you always find what you're looking for."
                    />
                    <FeatureCard
                        icon={ShieldCheck}
                        title="Safety First"
                        description="Built-in guardrails to flag allergens and dangerous ingredients based on your personal health profile."
                    />
                </div>

                {/* Deep Dive Section */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Deep Dive: How Scoring Works</h2>
                    <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-xl font-bold mb-4">1. Data Ingestion</h3>
                                <p className="text-gray-600 mb-6">
                                    We ingest raw data from FDA and USDA databases, normalizing values for consistency.
                                </p>
                                <h3 className="text-xl font-bold mb-4">2. Contextual Filtering</h3>
                                <p className="text-gray-600 mb-6">
                                    If you selected &quot;Low Carb&quot;, penalties for sugar are doubled. If &quot;Muscle Gain&quot; is active, protein is weighted higher.
                                </p>
                                <h3 className="text-xl font-bold mb-4">3. LLM Synthesis</h3>
                                <p className="text-gray-600">
                                    Finally, Gemini analyzes the weighted data to write a natural language summary, explaining the &apos;Why&apos; behind the score.
                                </p>
                            </div>
                            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 flex flex-col justify-center">
                                <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-4">
                                    <span className="font-semibold text-gray-900">Apple</span>
                                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">Score: 92</span>
                                </div>
                                <div className="space-y-3">
                                    <div className="h-2 bg-gray-100 rounded-full w-full">
                                        <div className="h-2 bg-green-500 rounded-full w-[92%]"></div>
                                    </div>
                                    <p className="text-sm text-gray-500 italic">
                                        &quot;High in fiber and Vitamin C. Excellent natural snack. Low caloric density makes it great for weight management.&quot;
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

            <FoodStatCTA />
        </div>
    );
}
