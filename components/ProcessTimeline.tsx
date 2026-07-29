interface ProcessStep {
    number: number;
    title: string;
    description: string;
    duration?: string;
}

const defaultSteps: ProcessStep[] = [
    {
        number: 1,
        title: "Anfrage",
        description: "Formular, Telefon oder Mail – sagen Sie uns kurz, was Sie brauchen.",
        duration: "5 Minuten",
    },
    {
        number: 2,
        title: "Besichtigung",
        description: "Wir kommen kostenlos vorbei, sehen uns die Sache an und klären die Details.",
        duration: "1–2 Werktage",
    },
    {
        number: 3,
        title: "Angebot",
        description: "Sie bekommen einen Festpreis – detailliert und unverbindlich.",
        duration: "24 Stunden",
    },
    {
        number: 4,
        title: "Ausführung",
        description: "Dann geht's los – sauber, pünktlich und ohne Rumgemache.",
        duration: "Nach Vereinbarung",
    },
    {
        number: 5,
        title: "Abnahme",
        description: "Wir gehen alles gemeinsam durch – erst wenn Sie zufrieden sind, sind wir fertig.",
        duration: "Vor Ort",
    },
];

interface ProcessTimelineProps {
    steps?: ProcessStep[];
}

export default function ProcessTimeline({ steps = defaultSteps }: ProcessTimelineProps) {
    return (
        <section className="space-y-8 pt-8 border-t border-gray-200">
            <div className="flex items-center gap-3 text-logo-blue/30">
                <svg width="8" height="10" viewBox="0 0 8 10" fill="none" stroke="currentColor" strokeWidth={1}>
                    <path d="M7.5 0.5L0.5 5L7.5 9.5" />
                </svg>
                <span className="text-[10px] font-mono tracking-widest uppercase">So läuft&apos;s ab</span>
                <div className="flex-1 h-px bg-current" />
            </div>

            <div className="hidden sm:block relative">
                <div className="absolute top-6 left-[3.5rem] right-[3.5rem] h-px bg-gray-200" />
                <div className="grid grid-cols-5 gap-4">
                    {steps.map((step) => (
                        <div key={step.number} className="flex flex-col items-center text-center gap-3">
                            <div className="relative z-10 flex-shrink-0 w-12 h-12 border-2 border-logo-blue bg-white text-logo-blue flex items-center justify-center font-mono font-black text-base">
                                {step.number}
                            </div>
                            <div>
                                <h3 className="font-black text-logo-blue text-sm">{step.title}</h3>
                                <p className="text-xs text-gray-500 mt-1 leading-relaxed">{step.description}</p>
                                {step.duration && (
                                    <span className="inline-block mt-2 px-2 py-0.5 text-[10px] font-semibold bg-gray-100 text-gray-500 border border-gray-200">
                                        ~{step.duration}
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="sm:hidden relative pl-8">
                <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gray-200" />
                <div className="space-y-8">
                    {steps.map((step) => (
                        <div key={step.number} className="relative flex items-start gap-4">
                            <div className="absolute -left-8 z-10 flex-shrink-0 w-10 h-10 border-2 border-logo-blue bg-white text-logo-blue flex items-center justify-center font-mono font-black text-sm">
                                {step.number}
                            </div>
                            <div className="pt-0.5">
                                <h3 className="font-black text-logo-blue text-sm">{step.title}</h3>
                                <p className="text-xs text-gray-500 mt-1 leading-relaxed">{step.description}</p>
                                {step.duration && (
                                    <span className="inline-block mt-2 px-2 py-0.5 text-[10px] font-semibold bg-gray-100 text-gray-500 border border-gray-200">
                                        ~{step.duration}
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
