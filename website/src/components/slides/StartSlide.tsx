export default function StartSlide({
  title = 'Willkommen',
}: {
  title?: string;
}) {
  return (
    <section
      data-background-image={`${import.meta.env.BASE_URL}/ki-werkstatt.jpeg`}
      data-background-size="cover"
      data-background-position="center"
      className="h-full w-full"
    >
      <p className="text-4xl  text-blue-200 font-bold text-shadow-[2px_2px_8px_rgb(0_0_0_/_0.9)]">
        Die AG für KI-Kultur und Experimente
      </p>
      <h1 className="fixed bottom-40 w-full text-center text-6xl font-bold text-shadow-[2px_2px_8px_rgb(0_0_0_/_0.9)]">
        {title}
      </h1>
    </section>
  );
}
