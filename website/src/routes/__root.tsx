import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';
import { TanstackDevtools } from '@tanstack/react-devtools';

import Header from '../components/Header';
import appCss from '../styles.css?url';

import type { PropsWithChildren } from 'react';

import '@fontsource/poppins/400.css'; // Specify weight
import '@fontsource/poppins/600.css'; // Specify weight
import '@fontsource/poppins/700.css'; // Specify weight
import '@fontsource/poppins/400-italic.css'; // Specify weight and style

function NotFound() {
  return <div>Seite nicht gefunden</div>;
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        name: 'google-site-verification',
        content: '4FpOEYlnZwdoWYDmOe01I69jPXLibEFl4IErrJi0eXw',
      },
      {
        title: 'KI-Werkstatt',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),

  shellComponent: RootDocument,
  notFoundComponent: NotFound,
});

function RootDocument({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen bg-gradient-to-br from-[oklch(42.71%_0.1638_271.53)] to-[oklch(20.12%_0.1384_304.73)]">
        <Header />
        {children}
        {import.meta.env.DEV && (
          <TanstackDevtools
            config={{
              position: 'bottom-left',
            }}
            plugins={[
              {
                name: 'Tanstack Router',
                render: <TanStackRouterDevtoolsPanel />,
              },
            ]}
          />
        )}
        <Scripts />
      </body>
    </html>
  );
}
