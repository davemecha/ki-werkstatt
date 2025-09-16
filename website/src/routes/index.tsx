import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: App,
  head: () => ({
    meta: [
      {
        title: 'Home - KI-Werkstatt',
      },
    ],
  }),
});

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[oklch(42.71%_0.1638_271.53)] to-[oklch(20.12%_0.1384_304.73)] text-white font-['Poppins'] p-10">
      <div className="max-w-[900px] mx-auto bg-white/10 rounded-lg p-10 backdrop-blur-[5px] border border-white/20">
        <header className="text-center mb-14">
          <img
            src="ki-werkstatt.jpeg"
            alt="KI-Werkstatt Keyvisual"
            className="w-full max-h-[300px] object-cover rounded-lg mb-5"
          />
          <h1 className="text-5xl font-bold mb-6">
            Willkommen in der KI-Werkstatt
          </h1>
          <p className="text-3xl">Eine AG für KI-Kultur und KI-Kompetenz</p>
        </header>

        <main>
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-5 border-b-2 border-white/30 pb-2.5">
              Worum geht es?
            </h2>
            <p className="text-lg leading-relaxed mb-5">
              Die KI-Werkstatt ist eine Arbeitsgemeinschaft (AG) für
              Schülerinnen und Schüler, in der wir gemeinsam die Welt der
              Künstlichen Intelligenz entdecken. Wir experimentieren, gestalten
              und lernen, wie wir KI kreativ und kritisch nutzen können. Diese
              Seite stellt alle Materialien zur Verfügung, um eine ähnliche AG
              an anderen Schulen oder Bildungseinrichtungen zu starten.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-5 border-b-2 border-white/30 pb-2.5">
              Materialien und Dokumente
            </h2>
            <ul className="list-none p-0">
              <li className="bg-white/15 rounded-md p-4 mb-2.5 border border-white/20">
                <a
                  href="https://github.com/davemecha/ki-werkstatt/blob/main/dokumente/konzept.md"
                  target="_blank"
                  className="text-lg text-purple-300 underline font-semibold hover:text-white hover:no-underline"
                >
                  Das Konzept
                </a>
                <p className="text-base leading-relaxed mt-2 mb-0 text-blue-100 opacity-90">
                  Unser pädagogisches Konzept beschreibt die Ziele, den Ablauf
                  und die didaktischen Ideen hinter der AG. Es dient als
                  Leitfaden für die Gestaltung der einzelnen Treffen.
                </p>
              </li>
              <li className="bg-white/15 rounded-md p-4 mb-2.5 border border-white/20">
                <a
                  href="../poster/ki-werkstatt-poster.html"
                  target="_blank"
                  className="text-lg text-purple-300 underline font-semibold hover:text-white hover:no-underline"
                >
                  Druckbares Projekt-Poster
                </a>
                <p className="text-base leading-relaxed mt-2 mb-0 text-blue-100 opacity-90">
                  Ein anpassbares Poster im DIN A3-Format, um die AG in der
                  Schule bekannt zu machen. Einfach im Browser anpassen, als PDF
                  speichern und ausdrucken.
                </p>
              </li>
              <li className="bg-white/15 rounded-md p-4 mb-2.5 border border-white/20">
                <a
                  href="https://github.com/davemecha/ki-werkstatt/tree/main/dokumente"
                  target="_blank"
                  className="text-lg text-purple-300 underline font-semibold hover:text-white hover:no-underline"
                >
                  Infomaterial und Einwilligungen
                </a>
                <p className="text-base leading-relaxed mt-2 mb-0 text-blue-100 opacity-90">
                  Alle wichtigen Dokumente für Teilnehmende und
                  Erziehungsberechtigte in einem Ordner (Informationsblatt,
                  Einwilligungserklärungen).
                </p>
              </li>
              <li className="bg-white/15 rounded-md p-4 mb-2.5 border border-white/20">
                <a
                  href="https://github.com/davemecha/ki-werkstatt"
                  target="_blank"
                  className="text-lg text-purple-300 underline font-semibold hover:text-white hover:no-underline"
                >
                  GitHub Repository (für technisch Versierte)
                </a>
                <p className="text-base leading-relaxed mt-2 mb-0 text-blue-100 opacity-90">
                  Das gesamte Projekt, inklusive aller Dateien und der
                  Versionsgeschichte, wird auf GitHub gehostet. Hier können Sie
                  direkt zum Projekt beitragen, Fehler melden oder eigene
                  Versionen (Forks) erstellen.
                </p>
              </li>
            </ul>
          </section>
        </main>

        <footer className="text-center mt-10 pt-5 border-t border-white/20 text-sm text-blue-100 opacity-80">
          <p>
            &copy; 2025 Dave Gööck. Alle Inhalte stehen unter der{' '}
            <a
              href="https://creativecommons.org/publicdomain/zero/1.0/deed.de"
              target="_blank"
              className="text-purple-300 underline font-semibold hover:text-white hover:no-underline"
            >
              CC0 1.0 Public Domain Dedication
            </a>
            .
          </p>
        </footer>
      </div>
    </div>
  );
}
