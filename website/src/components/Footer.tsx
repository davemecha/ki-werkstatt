export default function Footer() {
  return (
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
  );
}
