/** Rendert strukturierte Daten (schema.org) als JSON-LD-Script. */
export default function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify escaped keine '<' – daher manuell, um Script-Injection auszuschliessen.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  )
}
