export default function EndSlide({ notes }: { notes?: string }) {
  return (
    <section>
      <h2 className="text-7xl font-bold">
        Diskussion und Experimente
        <br />
        <br />
        🎉
        <aside className="notes" data-markdown>
          {notes}
        </aside>
      </h2>
    </section>
  );
}
