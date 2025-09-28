import { invariant } from '@tanstack/react-router';

export type DocumentSlug =
  | 'konzept.md'
  | 'informationsblatt.md'
  | 'einwilligungserklärung-erziehungsberechtigte.md'
  | 'einwilligungserklärung-teilnehmende.md';

export type DocumentMeta = {
  slug: DocumentSlug;
  title: string;
  description: string;
  note: string;
};

export type DocumentData = DocumentMeta & {
  route: `/docs/${DocumentSlug}`;
  downloadUrl: string;
  content: string;
};

const markdownContentModules = import.meta.glob(
  '../../content/dokumente/*.md',
  { as: 'raw', eager: true },
);

const markdownAssetModules = import.meta.glob('../../content/dokumente/*.md', {
  as: 'url',
  eager: true,
});

const slugFromPath = (path: string): DocumentSlug => {
  const segments = path.split('/');
  const slug = segments[segments.length - 1];
  invariant(slug, 'Failed to determine slug from markdown path');
  return slug as DocumentSlug;
};

const contentBySlug = new Map<DocumentSlug, string>(
  Object.entries(markdownContentModules).map(([path, content]) => [
    slugFromPath(path),
    content,
  ]),
);

const assetBySlug = new Map<DocumentSlug, string>(
  Object.entries(markdownAssetModules).map(([path, asset]) => [
    slugFromPath(path),
    asset,
  ]),
);

const documentMetaList: DocumentMeta[] = [
  {
    slug: 'konzept.md',
    title: 'Konzept der KI-Werkstatt',
    description:
      'Pädagogisches Leitdokument mit Zielen, Ablauf und Ideen für die Gestaltung der AG.',
    note: 'Markdown • Vorlage zur individuellen Anpassung',
  },
  {
    slug: 'informationsblatt.md',
    title: 'Informationsblatt für Erziehungsberechtigte',
    description:
      'Umfassende Übersicht zur AG für Eltern und Interessierte mit Hintergründen, Ablauf und Datenschutzhinweisen.',
    note: 'Markdown • Direkt einsetzbar als Informationsschreiben',
  },
  {
    slug: 'einwilligungserklärung-erziehungsberechtigte.md',
    title: 'Einwilligungserklärung – Erziehungsberechtigte',
    description:
      'Formular für die Zustimmung zur Teilnahme der Kinder inklusive Nutzung eigener Geräte und Online-Tools.',
    note: 'Markdown • Unterschriftsfeld zum Ausdrucken oder Digitalisieren',
  },
  {
    slug: 'einwilligungserklärung-teilnehmende.md',
    title: 'Einwilligungserklärung – Teilnehmende',
    description:
      'Begleitende Selbstverpflichtung der Jugendlichen zum verantwortungsvollen Umgang mit KI-Tools in der AG.',
    note: 'Markdown • Ergänzt die Einwilligung der Erziehungsberechtigten',
  },
];

export const documents: DocumentData[] = documentMetaList.map((meta) => {
  const content = contentBySlug.get(meta.slug);
  const downloadUrl = assetBySlug.get(meta.slug);

  invariant(content, `Missing markdown content for slug: ${meta.slug}`);
  invariant(
    downloadUrl,
    `Missing download URL for markdown document: ${meta.slug}`,
  );

  return {
    ...meta,
    content,
    downloadUrl,
    route: `/docs/${meta.slug}`,
  } satisfies DocumentData;
});

export const documentsBySlug = new Map<DocumentSlug, DocumentData>(
  documents.map((document) => [document.slug, document]),
);

export const getDocumentBySlug = (slug: string): DocumentData | null => {
  if (!documentsBySlug.has(slug as DocumentSlug)) {
    return null;
  }

  return documentsBySlug.get(slug as DocumentSlug) ?? null;
};
