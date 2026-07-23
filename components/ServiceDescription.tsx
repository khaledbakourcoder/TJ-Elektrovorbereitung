interface ServiceDescriptionProps {
    description: string;
}

export default function ServiceDescription({ description }: ServiceDescriptionProps) {
    return (
        <section className="space-y-4">
            <h2 className="text-xl font-bold text-logo-blue tracking-tight">
                Über diese Leistung
            </h2>
            <p className="text-gray-700 leading-relaxed text-base">
                {description}
            </p>
        </section>
    );
}
