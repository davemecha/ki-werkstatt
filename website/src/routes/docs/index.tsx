import { Link, createFileRoute } from '@tanstack/react-router';
import { documents } from './docs.data';
import Footer from '@/components/Footer';

export const Route = createFileRoute('/docs/')({
  component: DokumentePage,
  head: () => ({
    meta: [
      {
        title: 'Dokumente - KI-Werkstatt',
      },
      {
        name: 'description',
        content:
          'Übersicht über alle Unterlagen der KI-Werkstatt inklusive Konzept, Informationsblatt und Einwilligungen.',
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
            Alle Materialien, Formulare und Infoblätter zum Start der
            KI-Werkstatt an deiner Schule. Öffne die Dokumente, um die Inhalte
            direkt im Browser zu lesen oder lade sie zur weiteren Anpassung
            herunter.
          </p>
        </header>

        <main className="space-y-6">
          {documents.map((document) => (
            <article
              key={document.slug}
              className="bg-white/10 rounded-lg p-6 hover:bg-white/20 transition-colors duration-300 backdrop-blur-[2px] border border-white/20"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="space-y-3">
                  <h2 className="text-3xl font-bold">{document.title}</h2>
                  <p className="text-lg leading-relaxed text-blue-100 opacity-90">
                    {document.description}
                  </p>
                  <p className="text-sm uppercase tracking-wide text-white/60">
                    {document.note}
                  </p>
                </div>
                <div className="flex flex-shrink-0 gap-3">
                  <Link
                    to="/docs/$slug"
                    params={{ slug: document.slug }}
                    className="inline-flex items-center justify-center rounded-full bg-purple-500/30 px-5 py-2 text-base font-semibold text-white transition hover:bg-purple-400/40 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  >
                    Ansehen
                  </Link>
                  <a
                    href={document.downloadUrl}
                    download
                    className="inline-flex items-center justify-center rounded-full border border-white/40 px-5 py-2 text-base font-semibold text-white transition hover:border-white/80 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  >
                    Download
                  </a>
                </div>
              </div>
            </article>
          ))}
        </main>

        <Footer />
      </div>
    </div>
  );
}
