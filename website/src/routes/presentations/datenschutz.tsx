import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useRef } from 'react';
import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import Notes from 'reveal.js/plugin/notes/notes.esm.js';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';

export const Route = createFileRoute('/presentations/datenschutz')({
  component: RouteComponent,
  ssr: false,
  pendingComponent: () => <div />,
});

function RouteComponent() {
  const revealContainerRef = useRef<HTMLDivElement>(null);
  const revealApiRef = useRef<Reveal.Api | null>(null);

  useEffect(() => {
    if (revealApiRef.current || !revealContainerRef.current) return;

    revealApiRef.current = new Reveal(revealContainerRef.current, {
      transition: 'slide',
      // other config options
      plugins: [Markdown, Highlight, Notes],
      hash: true,
      slideNumber: true,
    });

    revealApiRef.current.initialize().then(() => {
      // good place for event handlers and plugin setups
    });

    return () => {
      try {
        if (revealApiRef.current) {
          revealApiRef.current.destroy();
          revealApiRef.current = null;
        }
      } catch (e) {
        console.warn('Reveal.js destroy call failed.');
      }
    };
  }, []);

  return (
    <div
      ref={revealContainerRef}
      className="reveal [body:has(&)_header]:fixed [body:has(&)_header]:top-0 [body:has(&)_header]:left-0 [body:has(&)_header]:w-full [body:has(&)_header]:z-50 [body:has(&)_header]:opacity-0 [body:has(&)_header]:hover:opacity-50"
    >
      <div className="slides">
        <section
          data-background-image={`${import.meta.env.BASE_URL}/ki-werkstatt.jpeg`}
          data-background-size="cover"
          data-background-position="center"
          className="h-full w-full"
        >
          <h1 className="transform-none text-5xl rotate-13 translate-x-74 translate-y-40 text-shadow-[2px_2px_8px_rgb(0_0_0_/_0.9)]">
            Willkommen
          </h1>
          <p
            className="fixed bottom-8 left-0 text-5xl font-bold"
            style={{
              WebkitBoxReflect:
                'below 10px linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6))',
            }}
          >
            Die AG für KI-Kultur und Experimente
          </p>
        </section>

        {/* <!-- Folie 1 --> */}
        <section>
          <h2 className="text-5xl font-bold mb-12 text-left">
            Was sind eigentlich "personenbezogene" Daten?
          </h2>
          <div className="grid grid-cols-2 gap-8 items-center">
            <div>
              <ul className="list-disc text-4xl space-y-8 text-left">
                <li className="fragment">Stimme, Fotos, Texte</li>
                <li className="fragment">Auch Hintergründe & Umgebung</li>
                <li className="fragment">Standort & technische Infos</li>
              </ul>
            </div>
            <div>
              <img
                src="datenschutz/folie-1.webp"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          <aside className="notes">
            Daten sind viel mehr als Name und Adresse. Schon eure Stimme oder
            ein Foto verraten etwas. Im Hintergrund sieht man vielleicht euer
            Zimmer. Online erkennt man auch automatisch, wo ihr seid oder
            welches Gerät ihr benutzt.
          </aside>
        </section>

        {/* <!-- Folie 2 --> */}
        <section>
          <h2 className="text-5xl font-bold mb-12 text-left">
            Wer hat die Kontrolle?
          </h2>
          <div className="grid grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="datenschutz/folie-2.webp"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <ul className="list-disc text-4xl space-y-8 text-left">
                <li className="fragment">Ihr entscheidet, was ihr teilt</li>
                <li className="fragment">Kleine Infos = großes Bild</li>
                <li className="fragment">Daten = Macht</li>
              </ul>
            </div>
          </div>
          <aside className="notes">
            Ihr bestimmt, was ihr weitergebt. Aber man darf nicht unterschätzen,
            wie stark kleine Infos zusammengesetzt werden können. Aus scheinbar
            harmlosen Daten entsteht ein ziemlich genaues Bild von euch. Wer
            Daten hat, hat Macht.
          </aside>
        </section>

        {/* <!-- Folie 3 --> */}
        <section>
          <h2 className="text-5xl font-bold mb-12 text-left">
            Kostenlose Dienste?
          </h2>
          <div className="grid grid-cols-2 gap-8 items-center">
            <div>
              <ul className="list-disc text-4xl space-y-8 text-left">
                <li className="fragment">
                  „Kostenlos“ = oft bezahlt mit Daten
                </li>
                <li className="fragment">
                  Geschäftsmodell prüfen: womit verdient die Firma?
                </li>
                <li className="fragment">Daten fürs KI-Training genutzt</li>
                <li className="fragment">
                  Risiko: KI kann Infos wieder ausspucken
                </li>
              </ul>
            </div>
            <div>
              <img
                src="datenschutz/folie-3.webp"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          <aside className="notes">
            Bei kostenlosen Diensten bezahlt ihr meist mit euren Daten. Darum
            lohnt sich die Frage: Womit verdient die Firma eigentlich ihr Geld?
            Viele nutzen Daten, um ihre KI zu trainieren. Das kann gefährlich
            sein: In manchen Fällen haben KIs später zufällig persönliche Infos
            ausgespuckt, die im Training gelandet sind.
          </aside>
        </section>

        {/* <!-- Folie 4 --> */}
        <section>
          <h2 className="text-5xl font-bold mb-12 text-left">
            Wem kann man vertrauen?
          </h2>
          <div className="grid grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="datenschutz/folie-4.webp"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <ul className="list-disc text-3xl space-y-6 text-left">
                <li className="fragment">EU: klare Datenschutzgesetze</li>
                <li className="fragment">
                  USA: weniger Schutz, abhängig von Firmen
                </li>
                <li className="fragment">
                  China: Staat hat überall Mitspracherecht
                </li>
                <li className="fragment">
                  Firmen = wollen Geld; Staaten = haben politische Ziele
                </li>
              </ul>
            </div>
          </div>
          <aside className="notes">
            Es gibt Unterschiede, aber man darf nicht pauschalisieren: In der EU
            gibt es klare Datenschutzgesetze. In den USA hängt es viel mehr von
            den Firmen selbst ab. In China dagegen hat der Staat bei jedem
            Unternehmen Mitspracherecht und nutzt Systeme gezielt, um Meinungen
            zu lenken. Firmen wollen in erster Linie Geld verdienen – das kann
            man kritisch sehen, aber es ist wenigstens klar. Staaten haben oft
            zusätzliche Interessen, die nicht immer zu unseren Werten passen.
            Wichtig ist: Ihr habt die Freiheit, selbst zu entscheiden, welchen
            Diensten ihr vertraut – solange euch bewusst ist, wie sie mit euren
            Daten umgehen.
          </aside>
        </section>

        {/* <!-- Folie 5 --> */}
        <section>
          <h2 className="text-5xl font-bold mb-12 text-left">
            Nachdenken bevor man teilt
          </h2>
          <div className="grid grid-cols-2 gap-8 items-center">
            <div>
              <ul className="list-disc text-3xl space-y-6 text-left">
                <li className="fragment">
                  Einmal geteilt = schwer zurückzuholen
                </li>
                <li className="fragment">Welche Daten müssen wirklich rein?</li>
                <li className="fragment">Gibt es bessere Alternativen?</li>
                <li className="fragment">
                  Würde ich das auch Freunden oder Fremden erzählen?
                </li>
              </ul>
            </div>
            <div>
              <img
                src="datenschutz/folie-5.webp"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          <aside className="notes">
            Wenn Daten einmal im Netz sind, lassen sie sich kaum zurückholen.
            Deshalb: Welche Infos sind wirklich nötig, um die KI zu nutzen? Gibt
            es eine andere Möglichkeit? Und stellt euch immer die Frage: Würde
            ich das auch Freunden erzählen? Oder jemandem auf der Straße? Wenn
            nicht, dann lieber auch nicht mit einer KI oder einem Unternehmen
            teilen.
          </aside>
        </section>
        <section>
          <h2 className="text-7xl font-bold">
            Diskussion und Experimente
            <br />
            <br />
            🎉
          </h2>
        </section>
      </div>
    </div>
  );
}
