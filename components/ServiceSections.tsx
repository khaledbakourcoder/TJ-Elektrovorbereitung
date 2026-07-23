import { ISection } from "@/Types/Service.type";

interface ServiceSectionsProps {
    sections: ISection[];
}

export default function ServiceSections({ sections }: ServiceSectionsProps) {
    if (!sections || sections.length === 0) return null;

    return (
        <section className="space-y-6 pt-6 border-t border-gray-100">
            <h2 className="text-xl font-bold text-logo-blue tracking-tight">
                Ausführung & Details
            </h2>

            <div className="grid grid-cols-1 gap-4">
                {sections.map((section, index) => (
                    <div
                        key={index}
                        className="p-6 rounded-xl bg-gray-50/70 border border-gray-100 space-y-2"
                    >
                        <h3 className="text-base font-bold text-logo-blue">
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
