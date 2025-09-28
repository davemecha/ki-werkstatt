import { Link, createFileRoute } from '@tanstack/react-router';
import Footer from '@/components/Footer';

export const Route = createFileRoute('/presentations/')({
  component: PresentationsPage,
  head: () => ({
    meta: [
      {
        title: 'Präsentationen - KI-Werkstatt',
      },
    ],
  }),
});

function PresentationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[oklch(42.71%_0.1638_271.53)] to-[oklch(20.12%_0.1384_304.73)] text-white font-['Poppins'] p-10">
      <div className="max-w-[900px] mx-auto bg-white/10 rounded-lg p-10 backdrop-blur-[5px] border border-white/20">
        <header className="text-center mb-14 text-white ">
          <h1 className="text-5xl font-bold mb-6">Präsentationen</h1>
          <p className="text-lg leading-relaxed opacity-90 mb-4">
            Präsentationen für die Phasen Impuls und ggf. Diskussion der AG. -
            Die Präsentationen können direkt ausgeführt werden.
          </p>
          <p className="text-base leading-relaxed text-start opacity-80">
            <strong>Keybindings:</strong>
            <br />
            Vollbild: F
            <br />
            Übersicht: Esc oder O
            <br />
            Speaker-View/Notizen: S
            <br />
            Navigation: Pfeiltasten (links, rechts), Leertaste oder Swipe.
          </p>
        </header>

        <main className="space-y-6">
          <div className="bg-white/10 rounded-lg p-6 hover:bg-white/20 transition-colors duration-300 backdrop-blur-[2px] border border-white/20">
            <h2 className="text-3xl font-bold mb-4">
              <Link
                to="/presentations/was-ist-ki"
                className="text-purple-300 underline font-semibold hover:text-white hover:no-underline focus:outline-none focus:ring-2 focus:ring-yellow-300 rounded"
              >
                Was ist KI?
              </Link>
            </h2>
            <p className="text-lg leading-relaxed text-blue-100 opacity-90">
              Eine Präsentation, die erklärt, was künstliche Intelligenz,
              neuronale Netze und große Sprachmodelle (LLMs) sind.
            </p>
          </div>

          <div className="bg-white/10 rounded-lg p-6 hover:bg-white/20 transition-colors duration-300 backdrop-blur-[2px] border border-white/20">
            <h2 className="text-3xl font-bold mb-4">
              <Link
                to="/presentations/datenschutz"
                className="text-purple-300 underline font-semibold hover:text-white hover:no-underline focus:outline-none focus:ring-2 focus:ring-yellow-300 rounded"
              >
                Datenschutz & KI
              </Link>
            </h2>
            <p className="text-lg leading-relaxed text-blue-100 opacity-90">
              Eine Präsentation über den Umgang mit Daten bei der Nutzung von
              KI-Diensten.
            </p>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
