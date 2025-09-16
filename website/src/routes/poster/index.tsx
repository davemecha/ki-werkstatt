import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useRef, useState } from 'react';
import { usePosterResize } from './usePosterResize';
import './poster.css';

export const Route = createFileRoute('/poster/')({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        title: 'Poster - KI-Werkstatt',
      },
    ],
  }),
});

const STORAGE_KEY = 'kiwerkstatt_poster_inputs_v1';

function RouteComponent() {
  const posterRef = useRef<HTMLDivElement>(null);

  const [schoolName, setSchoolName] = useState<string>('');
  const [classDate, setClassDate] = useState<string>('');
  const [classLocation, setClassLocation] = useState<string>('');
  const [saveLabel, setSaveLabel] = useState<string>('Speichern');

  const saveInputs = () => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ schoolName, classDate, classLocation }),
      );
      setSaveLabel('Gespeichert');
      setTimeout(() => setSaveLabel('Speichern'), 1200);
    } catch (e) {
      console.error('Konnte Eingaben nicht speichern:', e);
    }
  };

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const saved = JSON.parse(raw);
      setSchoolName(saved.schoolName ?? '');
      setClassDate(saved.classDate ?? '');
      setClassLocation(saved.classLocation ?? '');
    } catch (e) {
      console.error('Konnte gespeicherte Eingaben nicht laden:', e);
    }
  }, []);

  usePosterResize(posterRef);

  return (
    <div className="poster-container">
      <div id="poster" ref={posterRef}>
        <div className="poster-content">
          <div className="header-section">
            <div className="headline"></div>
            <div>
              <div className="subline">
                Die AG für KI-Kultur und Experimente
              </div>
              <p>
                Eintauchen in die Welt der KI
                <br />
                für Lernende und Lehrende
                <br />
                <input
                  type="text"
                  value={schoolName}
                  onChange={(e) => setSchoolName(e.target.value)}
                />
              </p>
            </div>
          </div>

          <div className="content-grid">
            <div className="content-block">
              <h3>🚀 Warum mitmachen?</h3>
              <ul>
                <li>KI verstehen & anwenden</li>
                <li>Eigene Projekte (Apps, Cheatsheets, Videos …)</li>
                <li>Schule aktiv mitgestalten</li>
              </ul>
            </div>

            <div className="content-block">
              <h3>👥 &nbsp;Wer kann teilnehmen?</h3>
              <ul>
                <li>
                  Schüler:innen
                  <br />
                  12 Jahre - 12. Klasse
                </li>
                <li>Lehrkräfte welcome</li>
              </ul>
            </div>

            <div className="content-block">
              <h3>⏰ Wann und Wo?</h3>
              <ul>
                <li>
                  <input
                    type="text"
                    value={classDate}
                    onChange={(e) => setClassDate(e.target.value)}
                  />
                </li>
                <li>
                  <input
                    type="text"
                    value={classLocation}
                    onChange={(e) => setClassLocation(e.target.value)}
                  />
                </li>
              </ul>
            </div>

            <div className="content-block">
              <h3>📱 Bring mit!</h3>
              <ul>
                <li>Eigenes Gerät (Handy, Tablet, Laptop)</li>
                <li>Neugier & Experimentierfreude</li>
              </ul>
            </div>
          </div>

          <div className="process-section">
            <h3>🔎 Was passiert?</h3>
            <div className="process-grid">
              <div className="process-step">
                <div className="icon">💡</div>
                <h4>KI-Moment der Woche</h4>
                <p>Neueste Entwicklungen & spannende Anwendungen</p>
              </div>
              <div className="process-step">
                <div className="icon">🗣️</div>
                <h4>Mini-Talk & Diskussion</h4>
                <p>Austausch & gemeinsame Erkundung</p>
              </div>
              <div className="process-step">
                <div className="icon">⚡</div>
                <h4>45-60 Min. Projektzeit</h4>
                <p>Praktische Umsetzung eigener Ideen</p>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <div className="footer-notice">
              Teilnahme nur mit Einwilligung der Eltern.
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={saveInputs}
        type="button"
        title="Eingaben speichern (nur Anzeige, nicht im Druck)"
        className="save-btn font-semibold fixed top-4 left-1/2 -translate-x-1/2 z-50 border-none rounded-full bg-black/55 text-white cursor-pointer shadow-lg shadow-black/25 px-6 py-2 print:hidden"
      >
        {saveLabel}
      </button>
    </div>
  );
}
