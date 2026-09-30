import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Datenschutzerklärung – TJ Elektrovorbereitung",
    description:
        "Datenschutzerklärung gemäß DSGVO für TJ Elektrovorbereitung, Inhaber Taha Alabd, Flensburg.",
};

export default function DatenschutzPage() {
    return (
        <div className="min-h-screen bg-white text-gray-900">
            <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <h1 className="text-3xl sm:text-4xl font-black text-logo-blue tracking-tight mb-2">
                    Datenschutzerklärung
                </h1>
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
                    Gemäß Art. 13, 14 DSGVO
                </p>
                <div className="w-12 h-px bg-gray-300 mb-12" />

                <div className="space-y-12">

                    {/* ── 1. Verantwortlicher ───────────────────────────── */}
                    <section>
                        <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">
                            1. Verantwortlicher
                        </p>
                        <div className="space-y-1 text-gray-700 leading-relaxed">
                            <p>Taha Alabd</p>
                            <p>TJ Elektrovorbereitung</p>
                            <p>Thomas Mann Straße 12</p>
                            <p>24937 Flensburg</p>
                            <p className="mt-3">
                                <span className="text-gray-400 mr-2">Tel.:</span>
                                <a href="tel:+4915734403463" className="hover:text-logo-blue transition-colors">
                                    +49 1573 4403463
                                </a>
                            </p>
                            <p>
                                <span className="text-gray-400 mr-2">E-Mail:</span>
                                <a href="mailto:info@tj-elektrovorbereitung.de" className="hover:text-logo-blue transition-colors">
                                    info@tj-elektrovorbereitung.de
                                </a>
                            </p>
                        </div>
                    </section>

                    <div className="w-full h-px bg-gray-100" />

                    {/* ── 2. SSL-Verschlüsselung ───────────────────────── */}
                    <section>
                        <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">
                            2. SSL-/TLS-Verschlüsselung
                        </p>
                        <div className="space-y-3 text-gray-700 leading-relaxed">
                            <p>
                                Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
                                vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte
                                Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://"
                                auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                            </p>
                            <p>
                                Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten,
                                die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
                            </p>
                        </div>
                    </section>

                    <div className="w-full h-px bg-gray-100" />

                    {/* ── 3. Allgemeines zur Datenverarbeitung ─────────── */}
                    <section>
                        <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">
                            3. Allgemeines zur Datenverarbeitung
                        </p>
                        <div className="space-y-3 text-gray-700 leading-relaxed">
                            <p>
                                Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln
                                Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
                                Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                            </p>
                            <p>
                                Die Nutzung unserer Website ist grundsätzlich ohne Angabe personenbezogener
                                Daten möglich. Soweit personenbezogene Daten erhoben werden, erfolgt dies
                                stets auf freiwilliger Basis.
                            </p>
                            <p>
                                Rechtsgrundlage für die Verarbeitung ist, je nach Zweck, Art. 6 Abs. 1 lit. a
                                (Einwilligung), lit. b (Vertragserfüllung), lit. c (rechtliche Verpflichtung)
                                oder lit. f DSGVO (berechtigtes Interesse).
                            </p>
                        </div>
                    </section>

                    <div className="w-full h-px bg-gray-100" />

                    {/* ── 4. Hosting & Server-Log-Dateien ─────────────── */}
                    <section>
                        <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">
                            4. Hosting & Server-Log-Dateien
                        </p>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <div>
                                <p className="font-semibold text-gray-800 mb-2">Hosting-Anbieter</p>
                                <p>
                                    Diese Website wird gehostet bei:
                                </p>
                                <div className="mt-2 ml-4 text-gray-600 space-y-0.5">
                                    <p>Vercel Inc.</p>
                                    <p>440 N Barranca Ave #4133</p>
                                    <p>Covina, CA 91723, USA</p>
                                    <p>
                                        <a href="https://vercel.com" className="hover:text-logo-blue transition-colors" target="_blank" rel="noopener noreferrer">
                                            www.vercel.com
                                        </a>
                                    </p>
                                </div>
                                <p className="mt-3">
                                    Mit Vercel Inc. besteht ein Auftragsverarbeitungsvertrag (AVV) gemäß
                                    Art. 28 DSGVO.
                                </p>
                            </div>

                            <div>
                                <p className="font-semibold text-gray-800 mb-2">Drittlandübermittlung</p>
                                <p>
                                    Da Vercel Inc. seinen Sitz in den USA hat, findet eine Übermittlung
                                    personenbezogener Daten in ein Drittland (USA) statt. Die Übermittlung
                                    erfolgt auf Grundlage der EU-Standardvertragsklauseln gemäß Art. 46
                                    Abs. 2 lit. c DSGVO. Vercel ist zudem nach dem EU-U.S. Data Privacy
                                    Framework zertifiziert. Nähere Informationen finden Sie in der{" "}
                                    <a
                                        href="https://vercel.com/legal/privacy-policy"
                                        className="text-logo-blue hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Datenschutzerklärung von Vercel
                                    </a>
                                    .
                                </p>
                            </div>

                            <div>
                                <p className="font-semibold text-gray-800 mb-2">Server-Log-Dateien</p>
                                <p>
                                    Vercel erhebt und speichert automatisch Informationen in sogenannten
                                    Server-Log-Dateien, die Ihr Browser automatisch übermittelt. Dazu gehören:
                                </p>
                                <ul className="mt-2 ml-4 space-y-1 list-disc list-outside text-gray-600">
                                    <li>Browsertyp und Browserversion</li>
                                    <li>Verwendetes Betriebssystem</li>
                                    <li>Referrer URL</li>
                                    <li>Hostname des zugreifenden Rechners</li>
                                    <li>Uhrzeit der Serveranfrage</li>
                                    <li>IP-Adresse (vollständig, temporär für bis zu 24 Stunden gespeichert)</li>
                                </ul>
                                <p className="mt-3">
                                    Die Server-Log-Dateien werden für einen Zeitraum von maximal 30 Tagen
                                    gespeichert und anschließend automatisch gelöscht, soweit keine
                                    sicherheitsrelevante Aufbewahrung erforderlich ist.
                                </p>
                                <p className="mt-3">
                                    Diese Daten werden nicht mit anderen Datenquellen zusammengeführt.
                                    Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse
                                    an einem sicheren und stabilen Betrieb der Website).
                                </p>
                            </div>
                        </div>
                    </section>

                    <div className="w-full h-px bg-gray-100" />

                    {/* ── 5. Kontaktaufnahme ───────────────────────────── */}
                    <section>
                        <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">
                            5. Kontaktaufnahme per E-Mail, Telefon oder WhatsApp
                        </p>
                        <div className="space-y-3 text-gray-700 leading-relaxed">
                            <p>
                                Auf unserer Website wird kein Kontaktformular angeboten. Wenn Sie uns
                                per E-Mail, Telefon oder WhatsApp kontaktieren, werden Ihre übermittelten
                                Daten (z. B. Name, Telefonnummer, E-Mail-Adresse, Anfrageinhalte) bei uns
                                zum Zweck der Bearbeitung Ihrer Anfrage und für eventuelle Rückfragen
                                gespeichert.
                            </p>
                            <p>
                                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
                                lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags
                                zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich
                                ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem
                                berechtigten Interesse (Art. 6 Abs. 1 lit. f DSGVO).
                            </p>
                            <p>
                                Die von Ihnen übermittelten Daten verbleiben bei uns, bis Sie uns zur
                                Löschung auffordern oder der Zweck der Datenspeicherung entfällt.
                                Gesetzliche Aufbewahrungsfristen bleiben unberührt.
                            </p>
                        </div>
                    </section>

                    <div className="w-full h-px bg-gray-100" />

                    {/* ── 6. Externe Dienste & Drittanbieter ───────────── */}
                    <section>
                        <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">
                            6. Externe Dienste & Drittanbieter
                        </p>
                        <div className="space-y-6 text-gray-700 leading-relaxed">

                            <div>
                                <p className="font-semibold text-gray-800 mb-2">Schriftarten (Geist)</p>
                                <p>
                                    Diese Website verwendet die Schriftarten „Geist" und „Geist Mono" von
                                    Vercel Inc. Die Schriftarten werden über das Next.js-Framework lokal
                                    auf unserer Website eingebunden und nicht direkt von Google-Servern
                                    abgerufen. Es findet daher{" "}
                                    <span className="font-medium text-gray-900">keine</span> Verbindung
                                    zu externen Fontservern statt und es werden keine personenbezogenen
                                    Daten an Google oder andere Dritte übertragen.
                                </p>
                            </div>

                            <div>
                                <p className="font-semibold text-gray-800 mb-2">WhatsApp</p>
                                <p>
                                    Auf unserer Kontaktseite ist ein Link zu WhatsApp (Meta Platforms
                                    Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2,
                                    Irland) eingebunden. Wenn Sie auf den Link klicken, werden Sie zur
                                    WhatsApp-Anwendung weitergeleitet. Dabei können Daten wie Ihre
                                    IP-Adresse und Geräteinformationen an Meta übertragen werden.
                                    Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Nähere Informationen
                                    finden Sie in der{" "}
                                    <a
                                        href="https://www.whatsapp.com/legal/privacy-policy"
                                        className="text-logo-blue hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        WhatsApp-Datenschutzrichtlinie
                                    </a>
                                    .
                                </p>
                            </div>

                            <div>
                                <p className="font-semibold text-gray-800 mb-2">Facebook</p>
                                <p>
                                    Auf unserer Kontaktseite ist ein Link zu Facebook (Meta Platforms
                                    Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2,
                                    Irland) vorhanden. Beim Klick auf den Link werden Sie zu Facebook
                                    weitergeleitet. Wir haben keine Kontrolle über die dort verarbeiteten
                                    Daten. Informationen zum Datenschutz bei Facebook finden Sie in der{" "}
                                    <a
                                        href="https://www.facebook.com/privacy/policy"
                                        className="text-logo-blue hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Facebook-Datenschutzrichtlinie
                                    </a>
                                    .
                                </p>
                            </div>

                            <div>
                                <p className="font-semibold text-gray-800 mb-2">Instagram</p>
                                <p>
                                    Auf unserer Kontaktseite ist ein Link zu Instagram (Meta Platforms
                                    Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2,
                                    Irland) vorhanden. Beim Klick auf den Link werden Sie zu Instagram
                                    weitergeleitet. Informationen zum Datenschutz bei Instagram finden
                                    Sie in der{" "}
                                    <a
                                        href="https://privacycenter.instagram.com/policy"
                                        className="text-logo-blue hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Instagram-Datenschutzrichtlinie
                                    </a>
                                    .
                                </p>
                                <p className="mt-2 text-sm text-gray-500">
                                    Hinweis: Da Meta seinen Hauptsitz in den USA hat, findet bei Nutzung
                                    dieser Dienste eine Übermittlung in ein Drittland statt (Art. 44 ff. DSGVO).
                                    Meta ist nach dem EU-U.S. Data Privacy Framework zertifiziert.
                                </p>
                            </div>

                        </div>
                    </section>

                    <div className="w-full h-px bg-gray-100" />

                    {/* ── 7. Ihre Rechte ───────────────────────────────── */}
                    <section>
                        <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">
                            7. Ihre Rechte
                        </p>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:</p>
                            <ul className="ml-4 space-y-2 list-disc list-outside text-gray-600">
                                <li>
                                    <span className="text-gray-800 font-medium">Auskunft</span> (Art. 15 DSGVO)
                                </li>
                                <li>
                                    <span className="text-gray-800 font-medium">Berichtigung</span> (Art. 16 DSGVO)
                                </li>
                                <li>
                                    <span className="text-gray-800 font-medium">Löschung</span> (Art. 17 DSGVO)
                                </li>
                                <li>
                                    <span className="text-gray-800 font-medium">Einschränkung der Verarbeitung</span> (Art. 18 DSGVO)
                                </li>
                                <li>
                                    <span className="text-gray-800 font-medium">Datenübertragbarkeit</span> (Art. 20 DSGVO)
                                </li>
                                <li>
                                    <span className="text-gray-800 font-medium">Widerspruch</span> gegen die Verarbeitung (Art. 21 DSGVO)
                                </li>
                            </ul>
                            <p>
                                Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
                                <a
                                    href="mailto:info@tj-elektrovorbereitung.de"
                                    className="text-logo-blue hover:underline"
                                >
                                    info@tj-elektrovorbereitung.de
                                </a>
                            </p>
                        </div>
                    </section>

                    <div className="w-full h-px bg-gray-100" />

                    {/* ── 8. Beschwerderecht ───────────────────────────── */}
                    <section>
                        <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">
                            8. Beschwerderecht bei der Aufsichtsbehörde
                        </p>
                        <div className="space-y-3 text-gray-700 leading-relaxed">
                            <p>
                                Sie haben das Recht, sich bei der zuständigen Datenschutz-Aufsichtsbehörde
                                über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren.
                            </p>
                            <p>Zuständige Aufsichtsbehörde für Schleswig-Holstein:</p>
                            <div className="ml-4 text-gray-600 space-y-1">
                                <p className="font-medium text-gray-700">Unabhängiges Landeszentrum für Datenschutz Schleswig-Holstein (ULD)</p>
                                <p>Holstenstraße 98, 24103 Kiel</p>
                                <p>
                                    <a
                                        href="https://www.datenschutzzentrum.de"
                                        className="hover:text-logo-blue transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        www.datenschutzzentrum.de
                                    </a>
                                </p>
                            </div>
                        </div>
                    </section>

                    <div className="w-full h-px bg-gray-100" />

                    {/* ── 9. Aktualität ────────────────────────────────── */}
                    <section>
                        <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">
                            9. Aktualität dieser Datenschutzerklärung
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Diese Datenschutzerklärung hat den Stand{" "}
                            <span className="font-medium">August 2026</span>. Durch die
                            Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher
                            Vorgaben kann es notwendig werden, diese Erklärung anzupassen. Die jeweils
                            aktuelle Version ist stets unter{" "}
                            <a href="/datenschutz" className="text-logo-blue hover:underline">
                                tj-elektrovorbereitung.de/datenschutz
                            </a>{" "}
                            abrufbar.
                        </p>
                    </section>

                </div>
            </main>
        </div>
    );
}
