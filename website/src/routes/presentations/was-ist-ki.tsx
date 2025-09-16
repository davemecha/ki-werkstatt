import { createFileRoute } from '@tanstack/react-router';
import Presentation from '@/components/Presentation';
import StartSlide from '@/components/slides/StartSlide';
import EndSlide from '@/components/slides/EndSlide';

export const Route = createFileRoute('/presentations/was-ist-ki')({
  component: RouteComponent,
  ssr: false,
  pendingComponent: () => <div />,
});

function RouteComponent() {
  return (
    <Presentation>
      <StartSlide title="Was ist KI?" />

      {/* <!-- AG Ablauf --> */}
      <section>
        <div className="grid grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <h2 className="text-5xl font-bold mb-12 text-left">AG Ablauf</h2>
            <ul className="list-disc list-inside text-2xl space-y-6">
              <li className="fragment" data-fragment-index="1">
                Begrüßung & Kennenlernen
              </li>
              <li className="fragment" data-fragment-index="2">
                Einführung & Organisatorisches
              </li>
              <li className="fragment" data-fragment-index="3">
                3 Phasen
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <img
              src="was-ist-ki/impuls-diskussion-experiment.webp"
              alt="Impuls, Diskussion, Experiment"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8 mt-16 text-center w-full">
          <div className="flex flex-col items-start">
            <p className="text-3xl font-bold fragment" data-fragment-index="3">
              Phase 1:
            </p>
            <p className="text-5xl mt-2 fragment" data-fragment-index="4">
              Impuls
            </p>
          </div>
          <div className="flex flex-col items-start">
            <p className="text-3xl font-bold fragment" data-fragment-index="3">
              Phase 2:
            </p>
            <p className="text-5xl mt-2 fragment" data-fragment-index="5">
              Diskussion
            </p>
          </div>
          <div className="flex flex-col items-start">
            <p className="text-3xl font-bold fragment" data-fragment-index="3">
              Phase 3:
            </p>
            <p className="text-5xl mt-2 fragment" data-fragment-index="6">
              Experiment
            </p>
          </div>
        </div>
      </section>

      {/* <!-- Was ist KI? - Concentric Circles --> */}
      <section>
        <h2 className="text-5xl font-bold mb-12 mt-7 text-left">Was ist KI?</h2>
        <p className="text-3xl text-left space-y-6 mb-6">
          Wenn ihr "Künstliche Intelligenz" hört, woran denkt ihr?
        </p>
        <div className="relative w-full h-[60vh] flex justify-center items-center scale-90">
          {/* Outer ellipse */}
          <div
            className="absolute w-full h-full bg-yellow-300/80 rounded-[50%] flex flex-row justify-around items-center px-16 fragment"
            data-fragment-index="1"
          >
            <div className="text-4xl font-bold text-gray-800 shrink-0 pr-6">
              Künstliche
              <br />
              Intelligenz
            </div>
            {/* Middle ellipse */}
            <div
              className="w-full h-[90%] bg-red-500/70 rounded-[50%] flex flex-col justify-around items-center pt-8 fragment"
              data-fragment-index="2"
            >
              <div className="text-4xl font-bold text-gray-800">
                Neuronale Netze
              </div>
              {/* Inner ellipse */}
              <div
                className="w-[80%] h-[65%] bg-blue-300/80 rounded-[50%] flex justify-center items-center text-center fragment"
                data-fragment-index="3"
              >
                <span className="text-4xl font-bold text-gray-800">
                  Large
                  <br />
                  Language
                  <br />
                  Models (LLM)
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Neural Network Visualization --> */}
      <section>
        <div className="flex flex-row items-start">
          <h2 className="text-5xl font-bold mr-12 mb-8 text-left">
            Was ist KI?
          </h2>
          <p className="text-3xl text-gray-400 mb-8 text-left leading-16 mt-0">
            Neuronales Netz
          </p>
        </div>
        <div className="grid grid-cols-[repeat(9,max-content)] gap-x-4 items-center text-center text-sm h-full">
          {/* 0. Input Text */}
          <div
            className="flex flex-col items-start justify-start fragment"
            data-fragment-index="0"
          >
            <div className="bg-yellow-200 text-black text-2xl rounded-full w-32 h-32 flex items-center justify-center text-center p-2">
              Male
              <br />
              mir eine
              <br />
              Katze
            </div>
          </div>

          {/* 1. => Input Vector */}
          <div
            className="col-start-1 text-5xl text-white fragment pt-2 pb-4"
            data-fragment-index="1"
          >
            &darr;
          </div>

          <div
            className="col-start-9 text-2xl text-white fragment"
            data-fragment-index="5"
          >
            Output
          </div>

          <div
            className="col-start-1 fragment text-black justify-items-center"
            data-fragment-index="1"
          >
            <div className="bg-gray-100 rounded-lg shadow-md grid w-10 py-4 grid-cols-1 gap-0 text-md">
              <span>1</span>
              <span>3</span>
              <span>7</span>
              <span>2</span>
              <span>4</span>
              <span>⋮</span>
              <span>8</span>
            </div>
          </div>

          {/* 2. => Input Layer */}
          <div className="text-5xl text-white fragment" data-fragment-index="2">
            &rarr;
          </div>

          <div
            className="bg-blue-200 rounded-lg w-32 h-32 shadow-md fragment text-black"
            data-fragment-index="2"
          >
            <div className="grid w-32 h-32 p-4 grid-cols-[repeat(6,1fr)] gap-x-1 gap-y-0 text-md">
              <span>4</span>
              <span>1</span>
              <span>7</span>
              <span>5</span>
              <span>…</span>
              <span>2</span>
              <span className="col-span-full text-start">9</span>
              <span className="col-span-full text-start">0</span>
              <span className="col-span-full text-start">⋮</span>
              <span className="col-span-full text-start">8</span>
            </div>
          </div>

          {/* 3. => Hidden Layers */}
          <div className="text-5xl text-white fragment" data-fragment-index="3">
            &rarr;
          </div>

          <div
            className="grid place-content-center w-32 h-32 pr-4 fragment text-black"
            data-fragment-index="3"
          >
            <div className="col-start-1 row-start-1 bg-gray-200/80 p-2 rounded-lg shadow-lg transform translate-3 w-32 h-32"></div>
            <div className="col-start-1 row-start-1 bg-gray-200/80 p-2 rounded-lg shadow-lg transform translate-1.5 w-32 h-32"></div>
            <div className="col-start-1 row-start-1 bg-gray-100 p-2 rounded-lg shadow-lg w-32 h-32 flex items-center justify-center z-10">
              <div className="grid grid-cols-[repeat(6,1fr)] gap-x-1 gap-y-0 text-md">
                <span>3</span>
                <span>2</span>
                <span>6</span>
                <span>1</span>
                <span>…</span>
                <span>9</span>
                <span className="col-span-full text-start">2</span>
                <span className="col-span-full text-start">3</span>
                <span className="col-span-full text-start">⋮</span>
                <span className="col-span-full text-start">0</span>
              </div>
            </div>
          </div>

          {/* 4. => Output Layer */}
          <div className="text-5xl text-white fragment" data-fragment-index="4">
            &rarr;
          </div>

          <div
            className="bg-blue-200 rounded-lg w-32 h-32 shadow-md fragment text-black"
            data-fragment-index="4"
          >
            <div className="grid w-32 h-32 p-4 grid-cols-[repeat(6,1fr)] gap-x-1 gap-y-0 text-md">
              <span>6</span>
              <span>2</span>
              <span>9</span>
              <span>3</span>
              <span>…</span>
              <span>4</span>
              <span className="col-span-full text-start">0</span>
              <span className="col-span-full text-start">1</span>
              <span className="col-span-full text-start">⋮</span>
              <span className="col-span-full text-start">5</span>
            </div>
          </div>

          {/* 5. => Output Vector */}
          <div className="text-5xl text-white fragment" data-fragment-index="5">
            &rarr;
          </div>

          <div
            className="fragment text-black justify-items-center"
            data-fragment-index="5"
          >
            <div className="bg-gray-100 rounded-lg shadow-md grid w-10 py-4 grid-cols-1 gap-0 text-md">
              <span>3</span>
              <span>9</span>
              <span>2</span>
              <span>5</span>
              <span>4</span>
              <span>⋮</span>
              <span>7</span>
            </div>
          </div>

          <div
            className="col-start-1 text-2xl text-white fragment"
            data-fragment-index="1"
          >
            Input
          </div>

          {/* 6. => Output Image */}
          <div
            className="col-start-9 text-5xl text-white fragment"
            data-fragment-index="6"
          >
            &darr;
          </div>

          <div className="col-start-9 fragment pb-16" data-fragment-index="6">
            <img
              src="was-ist-ki/ki-katze.jpg"
              alt="Katze"
              className="rounded-lg shadow-lg w-40"
            />
          </div>
        </div>
      </section>

      {/* <!-- Learning --> */}
      <section>
        <div className="flex flex-row items-start">
          <h2 className="text-5xl font-bold mr-12 mb-8 text-left">
            Was ist KI?
          </h2>
          <p className="text-3xl text-gray-400 mb-8 text-left leading-16 mt-0">
            Lernen
          </p>
        </div>
        <ul className="list-disc list-inside text-4xl space-y-8 text-left">
          <li className="fragment" data-fragment-index="1">
            KI lernt durch Beispiele und Feedback
          </li>
          <li className="fragment" data-fragment-index="2">
            Muster erkennen
            <ul className="list-disc list-inside text-3xl space-y-4 mt-4 ml-8">
              <li className="fragment" data-fragment-index="3">
                Wie sieht eine Katze aus
              </li>
              <li className="fragment" data-fragment-index="4">
                Was ist wahrscheinlich das nächste Wort in einem Satz
              </li>
            </ul>
          </li>
        </ul>
      </section>

      {/* <!-- Prompts --> */}
      <section>
        <div className="flex flex-row items-start">
          <h2 className="text-5xl font-bold mr-12 mb-8 text-left">
            Was ist KI?
          </h2>
          <p className="text-3xl text-gray-400 mb-8 text-left leading-16 mt-0">
            Was ist ein Prompt?
          </p>
        </div>
        <div className="text-left">
          <p className="text-4xl fragment" data-fragment-index="1">
            Eingabe an ein LLM
          </p>
          <div className="mt-8 fragment" data-fragment-index="2">
            <p className="text-3xl">Bsp:</p>
            <ul className="list-disc list-inside text-3xl space-y-4 mt-4 ml-8">
              <li>Male mir eine Katze</li>
              <li>Erzähle mir eine Geschichte</li>
              <li>Mach ein Quizz mit mir</li>
            </ul>
          </div>
          <div className="mt-12 fragment" data-fragment-index="3">
            <p className="text-4xl font-bold text-yellow-300">
              Kann das Verhalten steuern!!!
            </p>
            <p className="text-3xl mt-4">
              Bsp: Du bist Mathelehrer, hilf mir bei Mathe...
            </p>
          </div>
        </div>
      </section>

      <EndSlide />
    </Presentation>
  );
}
