Erstelle eine responsive HTML-5-Einseiter-Website, die als druckfähiges A3-Poster fungiert.
Hard-Specs und Design-Vorgaben:

## 🔖 GRUNDGERÜST

- A3-Format, Hochformat: 297 mm (Breite) × 420 mm (Höhe) im Druck.
- <meta viewport="width=device-width, initial-scale=1">.
- Container mit fester Größe (297mm × 420mm); für Screen-Ansicht
  per JS/CSS transform: scale() automatisch so verkleinern,
  dass er komplett in den aktuellen Viewport passt (inkl. Padding).
  → Fenster-Resize überwachen.

## 🖋️ TYPO & FARBEN

- Max. 3 Hauptfarben + 1 Akzentfarbe. - Orientiere dich bei den Farben an den Farben in ki-werkstatt.jpeg.
- Klare, serifenlose Headline-Font (z. B. Poppins, bold, 48-64 px),
  Body-Text 18-20 px.
- Kontraststarke Farbpalette, viel Weißraum.

📐 PRINT-REGELN
@media print {
@page { size: A3 portrait; margin: 0; }
html,body,#poster { width: 297mm; height: 420mm; transform: none !important; }
}

## 📃 INHALT SEITENBLOCK (#poster)

🚀 HEADLINE
»KI-Werkstatt« - Die Headline kann durch das ki-werkstatt.jpeg umgesetzt werden und muss nicht unbedingt als text erscheinen.
Sub-Line (kursiv): »Die AG für KI-Kultur und Experimente«

💡 WARUM MITMACHEN? (<ul>)
• KI verstehen & anwenden  
• Eigene Projekte (Apps, Cheatsheets, Videos …)  
• Schule aktiv mitgestalten

👥 WER KANN TEILNEHMEN?
Schüler:innen ab ca. 12 J. – Lehrkräfte welcome

⏰ WANN?
Montags, 15:20 – 16:05 Uhr

🔎 WAS PASSIERT? (3-Stufen-Grafik – Icon/Emoji vor jedem Punkt)
• »KI-Moment der Woche«  
• Mini-Talk & Diskussion  
• 45–60 Min. Projektzeit

📱 BRING MIT!
• Eigenes Gerät (Handy, Tablet, Laptop)  
• Neugier & Experimentierfreude

🛡️ HINWEIS (klein, Fußzeile):
Teilnahme nur mit Einwilligung der Eltern.

🎨 STYLE TAGS
flat-design, vector-look, playful-tech, clean, soft-shadows, rounded-containers-2xl

👉 Gib mir fertigen HTML-/CSS-/JS-Code, der obige Struktur & Regeln exakt umsetzt,
inkl. minimaler JavaScript-Funktion, die das Scaling bei Window-Resize neu berechnet.
