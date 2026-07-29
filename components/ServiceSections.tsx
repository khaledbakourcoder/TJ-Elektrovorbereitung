import { ISection } from "@/Types/Service.type";

interface ServiceSectionsProps {
    sections: ISection[];
}

export default function ServiceSections({ sections }: ServiceSectionsProps) {
    if (!sections || sections.length === 0) return null;

    return (
        <section className="space-y-6 pt-8 border-t border-gray-200">
            <div className="flex items-center gap-3 text-logo-blue/30">
                <svg width="8" height="10" viewBox="0 0 8 10" fill="none" stroke="currentColor" strokeWidth={1}>
                    <path d="M7.5 0.5L0.5 5L7.5 9.5" />
                </svg>
                <span className="text-[10px] font-mono tracking-widest uppercase">Ausführung & Details</span>
                <div className="flex-1 h-px bg-current" />
            </div>

            <div className="grid grid-cols-1 gap-4">
                {sections.map((section, index) => (
                    <div
                        key={index}
                        className="p-6 bg-white border border-gray-200 space-y-2"
                    >
                        <h3 className="text-base font-black text-logo-blue">
                            {section.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            {section.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
