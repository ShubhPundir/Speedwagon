interface TechBadgeProps {
    name: string;
    color?: string;
}

export default function TechBadge({ name, color = "bg-gray-100 text-gray-700" }: TechBadgeProps) {
    return (
        <span className={`inline-flex items-center px-4 py-2 rounded-lg font-medium text-sm ${color}`}>
            {name}
        </span>
    );
}
