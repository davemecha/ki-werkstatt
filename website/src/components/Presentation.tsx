import { useEffect, useRef } from 'react';
import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import Notes from 'reveal.js/plugin/notes/notes.esm.js';
import type { PropsWithChildren } from 'react';

export default function Presentation({ children }: PropsWithChildren) {
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
      className="reveal [body:has(&)]:bg-none [body:has(&)_header]:fixed [body:has(&)_header]:top-0 [body:has(&)_header]:left-0 [body:has(&)_header]:w-full [body:has(&)_header]:z-50 [body:has(&)_header]:opacity-0 [body:has(&)_header]:hover:opacity-50"
    >
      <div className="slides">{children}</div>
    </div>
  );
}
