import Footer from '@/components/Footer';
import { createFileRoute } from '@tanstack/react-router';

const documents = [
  {
    title: 'Konzept der KI-Werkstatt',
    description:
      'Pädagogisches Leitdokument mit Zielen, Ablauf und Ideen für die Gestaltung der AG.',
    href: '/dokumente/konzept.md',
    note: 'Markdown • Vorlage zur individuellen Anpassung',
  },
  {
    title: 'Informationsblatt für Erziehungsberechtigte',
    description:
      'Umfassende Übersicht zur AG für Eltern und Interessierte mit Hintergründen, Ablauf und Datenschutzhinweisen.',
    href: '/dokumente/informationsblatt.md',
    note: 'Markdown • Direkt einsetzbar als Informationsschreiben',
  },
  {
    title: 'Einwilligungserklärung – Erziehungsberechtigte',
    description:
      'Formular für die Zustimmung zur Teilnahme der Kinder inklusive Nutzung eigener Geräte und Online-Tools.',
    href: '/dokumente/einwilligungserklärung-erziehungsberechtigte.md',
    note: 'Markdown • Unterschriftsfeld zum Ausdrucken oder Digitalisieren',
  },
  {
    title: 'Einwilligungserklärung – Teilnehmende',
    description:
      'Begleitende Selbstverpflichtung der Jugendlichen zum verantwortungsvollen Umgang mit KI-Tools in der AG.',
    href: '/dokumente/einwilligungserklärung-teilnehmende.md',
    note: 'Markdown • Ergänzt die Einwilligung der Erziehungsberechtigten',
  },
];

export const Route = createFileRoute('/docs/')({
  component: DokumentePage,
  head: () => ({
    meta: [
      {
        title: 'Dokumente - KI-Werkstatt',
      },
    ],
  }),
});

function DokumentePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[oklch(42.71%_0.1638_271.53)] to-[oklch(20.12%_0.1384_304.73)] text-white font-['Poppins'] p-10">
      <div className="max-w-[900px] mx-auto bg-white/10 rounded-lg p-10 backdrop-blur-[5px] border border-white/20">
        <header className="text-center mb-14 text-white">
          <h1 className="text-5xl font-bold mb-6">Dokumente</h1>
          <p className="text-lg leading-relaxed opacity-90">
            Alle Materialien, Formulare und Infoblätter zum Start der KI-Werkstatt
            an deiner Schule. Dateien können direkt geöffnet oder heruntergeladen
            werden.
          </p>
        </header>

        <main className="space-y-6">
          {documents.map((document) => (
            <div
              key={document.title}
              className="bg-white/10 rounded-lg p-6 hover:bg-white/20 transition-colors duration-300 backdrop-blur-[2px] border border-white/20"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <h2 className="text-3xl font-bold">{document.title}</h2>
                <a
                  href={document.href}
                  download
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-purple-500/30 px-5 py-2 text-base font-semibold text-white hover:bg-purple-400/40 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                >
                  Herunterladen
                </a>
              </div>
              <p className="text-lg leading-relaxed text-blue-100 opacity-90 mt-3">
                {document.description}
              </p>
              <p className="text-sm uppercase tracking-wide text-white/60 mt-4">
                {document.note}
              </p>
            </div>
          ))}
        </main>

        <Footer />
      </div>
    </div>
  );
}
