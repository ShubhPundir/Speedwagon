import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
    return (
        <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-4 text-teal-600">
                <Icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-500 leading-relaxed">
                {description}
            </p>
        </div>
    );
}
