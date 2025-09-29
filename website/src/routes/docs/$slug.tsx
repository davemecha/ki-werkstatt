import { Link, createFileRoute, notFound } from '@tanstack/react-router';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import { defaultSchema } from 'hast-util-sanitize';
import { toText } from 'hast-util-to-text';
import { getDocumentBySlug } from './docs.data';

import type { Schema } from 'hast-util-sanitize';
import type { Components } from 'react-markdown';

import Footer from '@/components/Footer';
import { useState } from 'react';

const sanitizeSchema: Schema = {
  ...defaultSchema,
  attributes: {
    ...defaultSchema.attributes,
    a: [
      ...(defaultSchema.attributes?.a ?? []),
      'className',
      'target',
      'rel',
      'title',
      'aria-label',
    ],
    span: [
      ...(defaultSchema.attributes?.span ?? []),
      'className',
      'aria-label',
      'data-placeholder',
      'title',
    ],
  },
};

const markdownComponents: Components = {
  h1: ({ node, ...props }) => (
    <h1 className="text-4xl font-bold text-white mt-6" {...props} />
  ),
  h2: ({ node, ...props }) => (
    <h2 className="text-3xl font-semibold text-white mt-8" {...props} />
  ),
  h3: ({ node, ...props }) => (
    <h3 className="text-2xl font-semibold text-white mt-6" {...props} />
  ),
  p: ({ node, ...props }) => (
    <p className="mt-4 text-lg leading-relaxed text-blue-100" {...props} />
  ),
  ul: ({ node, ...props }) => (
    <ul className="mt-4 list-disc space-y-2 pl-6 text-blue-100" {...props} />
  ),
  ol: ({ node, ...props }) => (
    <ol className="mt-4 list-decimal space-y-2 pl-6 text-blue-100" {...props} />
  ),
  li: ({ node, ...props }) => <li {...props} />,
  a: ({ node, ...props }) => (
    <a
      className="text-yellow-200 underline decoration-yellow-200/40 underline-offset-4 transition hover:text-yellow-100"
      {...props}
    />
  ),
  pre: ({ node, ...props }) => (
    <pre
      {...props}
      className="mt-6 overflow-x-auto rounded-lg bg-black/30 p-4 text-sm text-white"
    />
  ),
  strong: ({ node, ...props }) => (
    <strong className="font-semibold text-white" {...props} />
  ),
  em: ({ node, ...props }) => (
    <em className="italic text-blue-100" {...props} />
  ),
  span: ({ node, children, className, ...props }) => {
    const text = node ? toText(node) : '';
    const hasInputClass = className?.split(/\s+/)?.includes('input-text');
    const [value, setValue] = useState(text);

    if (!hasInputClass)
      return (
        <span className={className} {...props}>
          {children}
        </span>
      );

    const getPropValue = (prop: string, defaultValue?: string) => {
      const value = node?.properties?.[prop];
      return typeof value === 'string' ? value : defaultValue;
    };

    const ariaLabel = getPropValue('aria-label', 'Freitextfeld');
    const dataPlaceholder = getPropValue('data-placeholder');
    const title = getPropValue('title');

    return (
      <>
        <input
          type="text"
          className={className}
          aria-label={ariaLabel}
          placeholder={dataPlaceholder}
          title={title}
          defaultValue={text}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <span className={className} {...props}>
          {value}
        </span>
      </>
    );
  },
  blockquote: ({ node, ...props }) => (
    <blockquote
      className="mt-6 border-l-4 border-yellow-300/60 pl-4 text-lg italic text-blue-100"
      {...props}
    />
  ),
  table: ({ node, ...props }) => (
    <div className="mt-6 overflow-x-auto">
      <table className="min-w-full divide-y divide-white/20" {...props} />
    </div>
  ),
  thead: ({ node, ...props }) => (
    <thead
      className="bg-white/10 text-left text-sm uppercase tracking-wide text-white/80"
      {...props}
    />
  ),
  tbody: ({ node, ...props }) => (
    <tbody className="divide-y divide-white/10" {...props} />
  ),
  tr: ({ node, ...props }) => <tr className="hover:bg-white/5" {...props} />,
  th: ({ node, ...props }) => (
    <th className="px-4 py-3 font-semibold text-sm text-white" {...props} />
  ),
  td: ({ node, ...props }) => (
    <td className="px-4 py-3 text-blue-100" {...props} />
  ),
};

export const Route = createFileRoute('/docs/$slug')({
  loader: ({ params }) => {
    const document = getDocumentBySlug(params.slug);

    if (!document) {
      throw notFound({
        data: `Dokument mit dem Namen "${params.slug}" wurde nicht gefunden.`,
      });
    }

    return document;
  },
  component: DokumentDetailPage,
  head: ({ loaderData }) => ({
    meta: [
      {
        title: `${loaderData?.title} – Dokumente - KI-Werkstatt`,
      },
      {
        name: 'description',
        content: loaderData?.description,
      },
    ],
  }),
});

function DokumentDetailPage() {
  const document = Route.useLoaderData();
  const handlePrint = () => {
    if (typeof window !== 'undefined') window.print();
  };

  return (
    <div className="min-h-screen print-document-page bg-gradient-to-br from-[oklch(42.71%_0.1638_271.53)] to-[oklch(20.12%_0.1384_304.73)] text-white font-['Poppins'] p-6 md:p-10">
      <div className="mx-auto print-document-shell flex max-w-[900px] flex-col gap-8 rounded-lg border border-white/20 bg-white/10 p-6 backdrop-blur-[5px] md:p-10">
        <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/60">
              Dokument
            </p>
            <h1 className="text-4xl font-bold text-white md:text-5xl">
              {document.title}
            </h1>
            <p className="mt-3 text-base text-blue-100 md:text-lg">
              {document.description}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/docs"
              className="inline-flex print-hidden items-center justify-center rounded-full border border-white/30 px-5 py-2 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/10 md:text-base"
            >
              Zur Übersicht
            </Link>
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex print-hidden items-center justify-center rounded-full bg-purple-500/70 px-5 py-2 text-sm font-semibold text-white transition hover:bg-purple-400/80 md:text-base"
            >
              Als PDF drucken
            </button>
          </div>
        </header>

        <div className="prose prose-invert prose-headings:text-white max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw, [rehypeSanitize, sanitizeSchema]]}
            components={markdownComponents}
            className="markdown-content"
          >
            {document.content}
          </ReactMarkdown>
        </div>

        <Footer />
      </div>
    </div>
  );
}
