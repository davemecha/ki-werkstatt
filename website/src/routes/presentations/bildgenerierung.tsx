import { createFileRoute } from '@tanstack/react-router';
import Presentation from '@/components/Presentation';
import StartSlide from '@/components/slides/StartSlide';
import EndSlide from '@/components/slides/EndSlide';

export const Route = createFileRoute('/presentations/bildgenerierung')({
  component: RouteComponent,
  ssr: false,
  pendingComponent: () => <div />,
});

function RouteComponent() {
  return (
    <Presentation>
      <StartSlide title="Bildgenerierung" />

      <section>
        <h2 className="text-5xl font-bold mb-12 mt-7 text-left">Tools für Bildgenerierung</h2>
        <p className="text-3xl text-left mb-8">
          Kostenfreie Tools, die ihr schnell testen könnt:
        </p>

        <ul className="max-w-[520px] mx-auto text-left space-y-4 text-3xl">
          <li>
            <a
              href="https://www.fotor.com/ai-art-generator/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-yellow-200"
            >
              Fotor AI Art Generator
            </a>
          </li>
          <li>
            <a
              href="https://labs.google/fx/de/tools/whisk"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-yellow-200"
            >
              Whisk (Google Labs)
            </a>
          </li>
          <li>
            <a
              href="https://aistudio.google.com/prompts/new_chat"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-yellow-200"
            >
              AI Studio
            </a>
          </li>
          <li>
            <a
              href="https://www.bing.com/images/create"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-yellow-200"
            >
              Bing Image Creator (DALL·E 3)
            </a>
          </li>
          <li>
            <a
              href="https://www.craiyon.com/de"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-yellow-200"
            >
              Craiyon
            </a>
          </li>
        </ul>
      </section>

      <EndSlide
        notes={`
### Bildgenerierung - Diskussion & Experimente

#### Einführung in die Bildgenerierung:
- Erklären, dass KI Bilder aus Textbeschreibungen erstellen kann
- Unterschied zu herkömmlichem Zeichnen/Malen erklären
- Grundbegriffe: Prompt, Style, Variationen

#### Prompt-Ideen zum Ausprobieren:
- "Ein Roboter malt ein Selbstporträt mit Wasserfarben, Cartoon-Stil"
- "Mittelalterliches Dorf im Stil von Minecraft"
- "Katze im Astronautenanzug im Weltall, fotorealistisch"
- "Ein Drachenflug über Magdeburg im Stil von Van Gogh"

#### Experimente:
- Verschiedene Stile ausprobieren (Anime, Comic, Ölgemälde, etc.)
- Prompt-Optimierung: Mit möglichst wenigen Worten ein genaues Bild erzeugen
- Fehlerhafte Details einbauen und sehen, ob die KI sie übernimmt
- Absurde Prompts testen ("ein heißer Schneeball")

#### Wichtige Hinweise:
- Datenschutz: Keine echten Personenfotos hochladen
- Limitationen: Auflösung, Detailfehler, mögliche Bias
- Tools vorher testen und bei Bedarf auf Tablets/Schul-PCs freischalten

Viel Spaß beim Experimentieren mit den verschiedenen Tools!
`}
      />
    </Presentation>
  );
}
