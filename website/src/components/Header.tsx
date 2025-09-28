import { Link } from '@tanstack/react-router';

export default function Header() {
  return (
    <>
      <header className="flex gap-2 text-white/80 justify-between">
        <div className="w-full h-10"></div>
        <nav className="flex flex-row fixed top-0 left-0 right-0 z-50 p-2 bg-[oklch(52.71%_0.1638_271.53)]/70  transition-colors duration-300 backdrop-blur-[2px] border-b border-b-white/20">
          <div className="px-2 font-semibold">
            <Link to="/">Home</Link>
          </div>

          <div className="px-2 font-semibold">
            <Link to="/poster">Poster</Link>
          </div>

          <div className="px-2 font-semibold">
            <Link to="/presentations">Präsentationen</Link>
          </div>

          <div className="px-2 font-semibold">
            <Link to="/docs">Dokumente</Link>
          </div>
        </nav>
      </header>
    </>
  );
}
