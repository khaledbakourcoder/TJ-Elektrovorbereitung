interface ServiceDescriptionProps {
    description: string;
}

export default function ServiceDescription({ description }: ServiceDescriptionProps) {
    return (
        <section className="space-y-4">
            <div className="flex items-center gap-3 text-logo-blue/30">
                <svg width="8" height="10" viewBox="0 0 8 10" fill="none" stroke="currentColor" strokeWidth={1}>
                    <path d="M7.5 0.5L0.5 5L7.5 9.5" />
                </svg>
                <span className="text-[10px] font-mono tracking-widest uppercase">Über diese Leistung</span>
                <div className="flex-1 h-px bg-current" />
            </div>
            <p className="text-gray-700 leading-relaxed text-base">
                {description}
            </p>
        </section>
    );
}
