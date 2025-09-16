import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/poster')({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        title: 'Poster - KI-Werkstatt',
      },
    ],
  }),
});

function RouteComponent() {
  return (
    <>
      <div>Hello "/poster"!</div>
    </>
  );
}
